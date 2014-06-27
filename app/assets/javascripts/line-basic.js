$(function () {
  $('#line-basic').highcharts({
      title: {
          text: 'Analysts',
          x: -20 //center
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
          title: {
              text: 'Time (hours)'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
          valueSuffix: 'hours'
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: $.randomize([{
          name: 'John Doe',
          data: $.randomize([70, 69, 95, 145, 102, 115, 152, 165, 133, 143, 139, 96])
      }, {
          name: 'Jane Doe',
          data: $.randomize([20, 80, 57, 113, 170, 120, 148, 141, 101, 141, 86, 25])
      }, {
          name: 'John Smith',
          data: $.randomize([90, 60, 35, 84, 135, 170, 186, 179, 143, 90, 39, 10])
      }, {
          name: 'Analyst 4',
          data: $.randomize([39, 42, 57, 85, 119, 152, 170, 166, 142, 103, 66, 48])
      }])
  });
});
