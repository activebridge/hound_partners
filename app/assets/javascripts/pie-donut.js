$(function () {
    var colors = Highcharts.getOptions().colors,
        categories = ['Alex Legler', 'Sean Amoss', 'Jory Pratt', 'Ian Stakenvicius', 'Steve Dibb'],
        name = 'Browser brands',
        data = [{
                y: 55.11,
                color: colors[0],
                drilldown: {
                    name: 'Alex Legler works',
                    categories: ['Scratch and Sniff', 'Deep Dive', 'Memo'],
                    data: [10.85, 7.35, 35.87],
                    color: colors[0]
                }
            }, {
                y: 21.63,
                color: colors[1],
                drilldown: {
                    name: 'Sean Amoss works',
                    categories: ['Scratch and Sniff', 'Deep Dive', 'Memo'],
                    data: [1.58, 13.95, 5.63],
                    color: colors[1]
                }
            }, {
                y: 11.94,
                color: colors[2],
                drilldown: {
                    name: 'Jory Pratt works',
                    categories: ['Scratch and Sniff', 'Deep Dive', 'Memo'],
                    data: [0.97, 9.91, 0.86],
                    color: colors[2]
                }
            }, {
                y: 7.15,
                color: colors[3],
                drilldown: {
                    name: 'Ian Stakenvicius works',
                    categories: ['Scratch and Sniff', 'Deep Dive', 'Memo'],
                    data: [4.55, 1.65, 0.74],
                    color: colors[3]
                }
            }, {
                y: 2.14,
                color: colors[4],
                drilldown: {
                    name: 'Steve Dibb works',
                    categories: ['Scratch and Sniff', 'Deep Dive', 'Memo'],
                    data: [ 0.12, 0.37, 1.65],
                    color: colors[4]
                }
            }];
         data = $.randomize(data);


    // Build the data arrays
    var browserData = [];
    var versionsData = [];
    for (var i = 0; i < data.length; i++) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        for (var j = 0; j < data[i].drilldown.data.length; j++) {
            var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    $('#pie-donut').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
           text: 'Phase & Analysts. April, 2014'
        },
        yAxis: {
            title: {
                text: 'Total percent'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
          valueSuffix: '%'
        },
        series: [{
            name: 'Browsers',
            data: browserData,
            size: '60%',
            dataLabels: {
                formatter: function() {
                    return this.y > 5 ? this.point.name : null;
                },
                color: 'white',
                distance: -30
            }
        }, {
            name: 'Versions',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function() {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
                }
            }
        }]
    });
});
