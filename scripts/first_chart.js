Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Kiwis', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Karl and Skye\'s house'
      }
    },
    series: [{
      name: 'Karl',
      data: [6, 1, 0, 4]
    }, {
      name: 'Skye',
      data: [6, 5, 7, 3]
    }]
  });
