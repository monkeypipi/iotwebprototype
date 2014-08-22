var map = new BMap.Map("du_map");          // 创建地图实例

var marker = new BMap.Marker(null);        //全局marker

if ($("#du_map").attr('edit_device') == "true") {  //如果带有编辑（device_edit）属性，则中心点为设备位置，并添加标注
  var bdPoint = mars2bd($("#device_lng").val(), $("#device_lat").val());
  var centerPoint = new BMap.Point(bdPoint.bdLng, bdPoint.bdLat);
  map.centerAndZoom(centerPoint,12);
  marker.setPosition(centerPoint);
  map.addOverlay(marker);
}else{
  var city = new BMap.LocalCity();           //根据IP地图获得当前城市对象
  city.get(drawMap);
}

map.enableScrollWheelZoom();    //启用滚轮放大缩小
map.enableContinuousZoom();    //启用地图惯性拖拽
var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL};
map.addControl(new BMap.NavigationControl(opts)); //启用地图缩放移动控件（small）

map.addEventListener("click",function(e){
  marker.setPosition(e.point);
  map.addOverlay(marker);
  var marsPoint = bd2mars(e.point.lng, e.point.lat);
  putPoint2form(marsPoint);
});

marker.enableDragging();

marker.addEventListener("dragend", function(e){    
  var marsPoint = bd2mars(e.point.lng, e.point.lat);
  putPoint2form(marsPoint);
});

/**
* baidu map api
*
*/
function drawMap(result){
  var cityName = result.name;
  map.centerAndZoom(cityName,12); 
}

/**
**百度到火星
**
**@param lng,lat
*/

function bd2mars(lng,lat){
  var x = lng - 0.0065;
  var y = lat - 0.006;
  var z =  Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * Math.PI);
  var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * Math.PI);
  var ggLng = z * Math.cos(theta);
  var ggLat = z * Math.sin(theta);

  return {lng:ggLng, lat:ggLat};
}


/**
*火星到百度
*@param lng,lat
*
**/
function mars2bd(lng,lat){
  var x = lng;
  var y = lat;
  var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * Math.PI);
  var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * Math.PI);
  var bdLng = z * Math.cos(theta) + 0.0065;
  var bdLat = z * Math.sin(theta) + 0.006;

  return {bdLng:bdLng, bdLat:bdLat};
}


function putPoint2form(marsPoint){
  $("#device_lng").val(marsPoint.lng);
  $("#device_lat").val(marsPoint.lat);
}