var chartsTable = {};
//图表按钮
$('.btn_cahrt_value').click(function(){
	var chartbox = $(this.parentNode).find('.chartbox');
	chartbox.toggle();
	var sensorId = chartbox[0].id.replace('chart_', '');
	if(chartbox.is(":visible")){
		$(this).find('span').html("关闭图表");
		var defaultTimeScale = parseInt(chartbox.find('.timescale').attr('timescale'));
		if(defaultTimeScale == 0){
			defaultTimeScale == 600;
		}
		if(chartsTable[sensorId]){
			return;
		}
		chartsTable[sensorId] = new YeeChart({
			sensorId: sensorId,
			container: chartbox.find('.content>div')[0],
			defaultTimeScale: defaultTimeScale
		});
	}else{
		$(this).find('span').html("打开图表");
	}

});
//上一步
$('.chart_hand_prev').click(function(e){
	var sensorId = this.getAttribute('sensorid');
	chartsTable[sensorId].preview();
});
//下一步
$('.chart_hand_next').click(function(e){
	var sensorId = this.getAttribute('sensorid');
	chartsTable[sensorId].next();
});

//开关型传感器
$('.switch').click(function(e){
	e.preventDefault();
	var checkbox = $(this.parentNode).find('input')[0];
	var $loading = $(this).find('.loading');
	
	$loading.show();
	var sensorId = checkbox.getAttribute('sensorid');
	var status = checkbox.checked ? 0 : 1;
	var url = '/en_US/sensor/switcher-status?sensor_id=' + sensorId + '&status=' + status;
	
	$.ajax({
		url: url,
		type: 'get',
		dataType: 'json',
		success: function(result){
			$loading.hide();
			if(result.status){
				checkbox.checked = !checkbox.checked;
			}else{
				alert(result.message);
			}
		}
	});
});

$('.btn_map').click(function(e){
	var chartbox = $(this.parentNode).find('.chartbox');
	var sensorId = chartbox[0].id.replace('chart_', '');
	chartbox.toggle();
	var mapContent = chartbox.find('.content>div')[0];
	var position = chartbox.parent().find('.gps_value').attr('title');
	if (position == null || position == "") {
		return;
	}else{
		position = position.split(',');
	}
	var lat = position[0];
	var lng = position[1];
	if(chartbox.is(":visible")){
		$(this).find('span').html("关闭地图");
		if(chartsTable[sensorId]){
			chartsTable[sensorId].track();
			return;
		}
		chartsTable[sensorId] = new YeeMap({
			sensorId: sensorId,
			container: chartbox.find('.content>div')[0],
			lat: lat,
			lng: lng
		});
		
		chartsTable[sensorId].track();
        
	}else{
		$(this).find('span').html("打开地图");
		chartsTable[sensorId].stop();
	}
});

var mix = function(base, child){
	var o = new Object();
	for(var key in base){
		o[key] = base[key];
	}
	for(var key in child){
		o[key] = child[key];
	}
	return o;
};

var YeeMap = function(options){
	this._initYeeMap(options);
};

YeeMap.prototype = {
	_initYeeMap: function(options){
		this.options = {
			sensorId: 0,
			container: '',
			markerImage: '/resource/developer/images/marker.png',
			lat: 0,
			lng: 0
		};
		
		this.options = mix(this.options, options);
		var myLatLng = new google.maps.LatLng(this.options.lat,this.options.lng);
		this.mapOptions = {
			zoom: 12,
			center: myLatLng,
			mapTypeControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		
		this.map = new google.maps.Map(this.options.container, this.mapOptions);
		
		this.marker = new google.maps.MarkerImage(this.options.markerImage,
			new google.maps.Size(16, 16),
			new google.maps.Point(0,0),
			new google.maps.Point(8, 8));
			
		
        //generate new marker
        this.pMarker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            icon: this.marker
        });
	},
	
	stop: function(){
		clearInterval(this.timer);
	},
	
	track: function(){
		var self = this;
		if(this.timer){
			return;
		}
		this.timer = setInterval(function(){
        	$.ajax({
	        	url: LOCALE_PATH + '/sensor-data/gps-last?sensor_id=' + self.options.sensorId,
	        	type: 'get',
	        	dataType: 'json',
	        	success: function(result){
	        		var dataValue = result.data_value;
	        		var myLatLng = new google.maps.LatLng(dataValue.lat,dataValue.lng);
	        		self.pMarker.setPosition(myLatLng);
	        		self.map.setCenter(myLatLng);
	        	}
	        });
        }, 10000);
	}
	
};


//数据型传感器图表工具
var YeeChart = function(options){
	this._initYeeChart(options);
};


YeeChart.prototype = {
	_initYeeChart: function(options){
		this.options = {
			sensorId: 0,
			container: '',
			defaultTimeScale: 0
		};
		
		this.options = mix(this.options, options);
		this.realTime = false;
		this.timeScale = this.options.defaultTimeScale;
		this.timeBegin = -1;
		this.timeEnd = -1;
		this.chartOptions = {
		    tooltip : {
		        trigger: 'axis'
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : []
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            boundaryGap: [.2, .2]
		        }
		    ],
		    grid: {
		    	x:40,
		    	y:15,
		    	x2: 15,
		    	y2: 25
		    },
		    animation: false,
		    series : [
		        {
		            name:'',
		            type:'line',
		            symbol: 'none',
		            showAllSymbol: true,
		            smooth: true,
		            data:[]
		        }
		    ]
		};
		
		this.chart = null;

		this.fillData();
	},

	setTimeScale: function(timeScale){
		this.timeScale = timeScale;
		this.fillData();
	},
	
	getNowTime: function(){
		return new Date().getTime();
	},
	
	fillData: function(begin, end){
		var self = this;
		if(this.timeScale == 0){
			this.timeScale = YeeChart.TimeScaleType.ONE_HOUR;
		}
		if(!self.chart){
			self.chart = echarts.init(self.options.container);
			self.chart.setOption(self.chartOptions);
		}
		self.chart.showLoading({
			text : '载入中',
			effect : 'whirling',
			textStyle : {
				fontSize : 12
			}
		});
		
		var url = 'http://developer.yeelink.net/en_US/sensor/sensor-data?sensor_id=' + self.options.sensorId + '&timescale=' + this.timeScale;
		if(begin){
			url += "&timebegin=" + begin;
		}
		
		if(end){
			url += "&timeend=" + end;
		}
		
		$.ajax({
			url: url,
			type: 'get',
			dataType:'json',
			success: function(result){
				var timestamp = [];
				
				self.timeBegin = result[1][0];
				self.timeEnd = result[1][result[1].length];
				
				
				for(var i = 0, len = result[1].length; i < len; i++){
					if(self.timeScale <= 86400){
						timestamp.push(new Date(result[1][i] * 1000).toLocaleTimeString());
					}else{
						timestamp.push(new Date(result[1][i] * 1000).toLocaleDateString());
					}
				}
				self.chartOptions.xAxis[0].data = timestamp;
				self.chartOptions.series[0].data = result[0];
				self.chart.setOption(self.chartOptions, true);
			}
		});

	},
	
	next: function(){
		this.fillData(this.timeEnd);
	},
	
	preview: function(){
		this.fillData(null, this.timeBegin);
	},
	
	refresh: function(){
		this.fillData();
	}
};

YeeChart.TimeScaleType = {
	TEN_MINUTES: 600,
	ONE_HOUR: 3600,
	THREE_HOUR: 10800,
	HALF_DAY: 43200,
	ONE_DAY: 86400,
	ONE_WEEK : 604800,
	ONE_MONTH: 2592000,
	THREE_MONTH: 7776000
};
