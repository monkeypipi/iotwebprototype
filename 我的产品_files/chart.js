/*
 *
 * Purpose: Ajax Loading Chart
 * Rely on: jquery.highcharts
 *
 **/

var cached_charts = {};
function render_chart(chart_id, title, data_src_url, params, force_reload, opts,callback){
  var common_opts = {
    chart: {
      defaultSeriesType: "line",
      height: '300',
      animation: false
    },
    xAxis:{
      labels:{
        align: 'center',
        formatter: function(){
          if (typeof(this.value) == "string") {
            return this.value.split(':')[0];
          } else {
            return this.value;
          }
        }
      }
    },
    yAxis: {
      title:"",
      startOnTick: false,
      minPadding: 0.1,
      min:0
    },
    credits: {
      "enabled":false
    },
    plotOptions: {
      "area":{
        "stacking":null
      },
      "series":{
        animation: false,
        marker: {
            radius:2,
            enabled:true,
            symbol: 'circle',
            fillColor: '#FFFFFF',
            lineWidth: 1,
            lineColor: null
        },
        events: {
          legendItemClick: function(event) {
            var legendName = this.name+'_<dot>';
            var tempSeries = this.chart.series;
            var seriesLength = tempSeries.length;
            for (var i=0; i < seriesLength; i++){
              if (tempSeries[i].name == legendName){
                tempSeries[i].visible ? tempSeries[i].hide() : tempSeries[i].show();
              }
            }
          }
        }
      }
    },
    tooltip: {
      enabled: true,
      formatter: function() {
        var dates_mapping = $('#'+chart_id).data('dates_mapping_' + this.series.name);
        if( dates_mapping != undefined ){
          this.x = dates_mapping[this.x];
        }
        if( params['time_unit'] == 'hourly' ){
          var date_and_time =  this.x.split(' ');
          if(date_and_time.length > 1) {
            var hourFormat = date_and_time[1].split(':');
            return date_and_time[0] + " " + parseInt(hourFormat[0], 10) + "~" + (parseInt(hourFormat[0], 10)+1) +" "+I18n.t('components.filters.time_unit.hour_unit')+": " + this.y;
          } else {
            return parseInt(date_and_time[0], 10) + "~" + (parseInt(date_and_time[0], 10)+1) +" "+I18n.t('components.filters.time_unit.hour_unit')+": " + this.y;
          }
        } 
        return '' + this.x + ': ' + this.y;
      }
    },
    legend: {
      margin: 25,
      enabled: true
    },
    subtitle: {}
  };
    
  // Set Cached Chart Unique Id
  var chart_cache_id = 'umeng_' + chart_id;
  $.each(params, function(i,n){
    chart_cache_id += '_' + i + ':' + n;
  });
  //clear summary
  $('#'+chart_id).parent().find('.chart-summary').remove();
  
  // Do Nothing If Chart Existing and No Need To Reload
  var cached_data = $('#'+chart_id).data(chart_cache_id);
  if ( cached_charts[chart_cache_id] != undefined && !force_reload && cached_data != null ){
    try{
      //cached_charts[chart_cache_id].destroy();
      cached_charts[chart_cache_id] = new Highcharts.Chart($.extend(true, {}, common_opts, cached_data));
      $('#'+chart_id).data('current_chart',chart_cache_id);
      
      //load chart summary
      if($('#'+chart_id).data(chart_cache_id+'_summary') != undefined){
        window.showSummary($('#'+chart_id),$('#'+chart_id).data(chart_cache_id+'_summary'));
      }
      // Trigger chart_data_loaded event
      var data_source = $('#'+chart_id);
      data_source.trigger('chart_data_loaded', data_source.data(chart_cache_id+'_rawdata'));
    }catch(e){
      console.log(e)
    }
    if(callback != undefined){
      callback(cached_data);
    }
    return;
  }

  // Loading Data
  var categories = [];
  var series = [];
  var chart_canvas = $('#'+chart_id);
  if(!params.is_compared){
    var loading_img = $("<div style='text-align:center;padding-top:150px;'><img src='/images/pic/ajax-loader.gif' /></div>");
    $('#'+chart_id).html('').append(loading_img);
  }
  var style = {
    fillColor: {
      linearGradient: [0, 0, 0, 300],
      stops: [
      [0, 'rgb(160, 192, 193)'],
      [1, 'rgba(255,255,255,0)']
      ]
    },
    marker: {
        radius:2,
        enabled: true,
        symbol: 'circle',
        fillColor: '#FFFFFF',
        lineWidth: 1,
        lineColor: null
    }
  }
  
  $.get( data_src_url, params, function(resp){
    if( resp.result == 'success'){
      $.each(resp.dates, function(i,date){
        categories[i] = date
      });
      $.each(resp.stats, function(i,stat){
          series[i] = $.extend(true,{visible:true}, stat,style);
      });
           
      if (opts && opts.hasOwnProperty('pointFormatter')) {
        opts.pointFormatter(series, resp.dates);
      };

      // Set Init Options
      var options = $.extend(true, {
        colors:['#4096B5', '#ED7054', '#47C6C9', '#E5A653', '#399960', '#CC4A5A', '#9BAD4E', '#DB4F82', '#7E58AF','#CC5CB7'],
        chart: {
          renderTo: chart_id,
          type: ''
        },
        plotOptions: {
          series: {
            shadow: false
          }
        },    
        title: {
          text: title
        },
        yAxis: {
            allowDecimals: false
        },
        xAxis: {
          categories: categories,
          labels:{
            align:"right",
            formatter:function(){
                //this.value
                var d = this.value.split('-');
                if(d.length == 3){
                    return d[1] + '-' + d[2];
                }else{
                    return this.value;
                }
            },
            //rotation:-45,
            step: parseInt(categories.length / 7)
          }
        },
        series: series
      }, opts || {});

      // Cache data
      if(params.is_compared != true){
        $('#'+chart_id).data(chart_cache_id, options );
        $('#'+chart_id).data(chart_cache_id+'_rawdata', resp);
      }
      // Destroy Existing Chart
      if ( cached_charts[chart_cache_id] != undefined ){
        try{
          cached_charts[chart_cache_id].destroy();
        }catch(error){}
      }
      // Create Chart
      if( resp.result == 'success' && resp.is_compared ==true){
        //add compare chart
        $('.loadingChart').remove();
        for(i in series){
          var current_chart = cached_charts[$('#'+chart_id).data('current_chart')];
          var dates_mapping = {};
          for(var index=0; index < current_chart.xAxis[0].categories.length; index++){
            dates_mapping[current_chart.xAxis[0].categories[index]] = categories[index];
          }
          $('#'+chart_id).data('dates_mapping_'+series[i].name, dates_mapping);
          current_chart.addSeries(series[i]);
          //cache compare chart data
          if(typeof umeng != 'undefined'){
            umeng.ccd.setData(chart_id,series[i]);
          }
        }  
      //new chart
      }else{
        cached_charts[chart_cache_id] = new Highcharts.Chart($.extend(true, {}, common_opts, options));
        $('#'+chart_id).data('current_chart',chart_cache_id);
        //show summary
        $('#'+chart_id).data(chart_cache_id+'_summary',resp.summary);

      }
      if(callback != undefined){
        callback(resp);
      }
      // Trigger chart_data_loaded event
      $('#'+chart_id).trigger('chart_data_loaded', resp);
    }else if(resp.result == 'message'){
      chart_canvas.html('<div style="padding-top:150px;text-align:center;">'+resp.msg+'</div>');
      if(callback != undefined){
        callback(resp);
      }
    }else{
      chart_canvas.html('<div style="padding-top:150px;text-align:center;">'+resp.msg+'</div>');
    }
    if(resp.summary != undefined){
      window.showSummary($('#'+chart_id),resp.summary);
    }
    //chart_canvas.unblock();
  });
}
function flush_chart(){
  cached_charts = {};
}
