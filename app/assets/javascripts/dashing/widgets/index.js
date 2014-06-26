//= require highcharts
//= require data
//= require drilldown
//= require line-basic
//= require column-drilldown
//= require pie-donut
//= require_tree .

$.randomize = function(arr) {
  for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
};
