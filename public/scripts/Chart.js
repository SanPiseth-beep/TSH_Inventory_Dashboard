// Stock vs inventory line chart 

  var inventoryDate = [7200000, 7500000, 8000000, 8100000, 7900000, 8300000, 8500000, 8200000, 8100000, 7800000, 8000000, 8100000, 8163441];
  var saleData= [7400000, 7800000, 8300000, 8400000, 8200000, 8600000, 8800000, 8500000, 8400000, 7900000, 8200000, 8400000, 8600000];

  var options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Sale vs Inventory',
    },
    xAxis: {
      categories: ['May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    },
    yAxis: {
      title: {
        text: 'Value in MYR',
      },
    },
    series: [
      {
        name: 'Sale',
        data: saleData,
        color: '#28a745',
      },
      {
        name: 'Inventory',
        data: inventoryDate,
        color: '#17a2b8',
      },
    ],
  };

  Highcharts.chart('chartContainer', options);


// <!-- Stock Movement pie chart (GRN) -->

  const grnChartData = [
    { name: '23020122', y: 11 },
    { name: '23020029', y: 8 },
    { name: '22100256', y: 7 },
    { name: '23030175', y: 7 },
    { name: '22040362', y: 6 },
    { name: '23030048', y: 5 },
    { name: '22071225', y: 5 },
    { name: '22040363', y: 5 },
    { name: '23030180', y: 5 },
    { name: '22110528', y: 5 },
    { name: '22100106', y: 4 },
    { name: '22110499', y: 4 },
    { name: '23010014', y: 4 },
    { name: '22050176', y: 3 },
    { name: '22120148#17', y: 3 },
    { name: '23010362#23', y: 3 },
    { name: '22100118', y: 3 },
    { name: '22020721', y: 3 },
    { name: '22120148', y: 2 },
    { name: '22120150', y: 2 },
    { name: 'Else', y: 986 },

  ];

  Highcharts.chart('workOrderCountGRN', {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Work Order vs Stock count (GRN)',
    },
    series: [
      {
        name: 'Parts count',
        data: grnChartData,
      },
    ],
  });


// <!-- Stock Movement pie chart (MIV) -->

  const mivChartData = [
    { name: '23030203', y: 95 },
    { name: '22120261', y: 84 },
    { name: '22040470', y: 75 },
    { name: '22071576', y: 62 },
    { name: '22071592', y: 61 },
    { name: '22071584', y: 61 },
    { name: '22120147', y: 48 },
    { name: '23010357', y: 41 },
    { name: '23030002', y: 31 },
    { name: '23030003', y: 30 },
    { name: '23040071', y: 29 },
    { name: '22071225', y: 28 },
    { name: '23040072', y: 27 },
    { name: '23030154', y: 27 },
    { name: '23040073', y: 26 },
    { name: '23030151', y: 24 },
    { name: '23010362', y: 23 },
    { name: '23030152', y: 22 },
    { name: '22071218', y: 19 },
    { name: '22120148', y: 17 },
    { name: 'Else', y: 2332 },

  ];

  Highcharts.chart('workOrderCountMIV', {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Work Order vs Stock count (MIV)',
    },
    series: [
      {
        name: 'Parts count',
        data: mivChartData,
      },
    ],
  });

// <!-- Non moving chart -->

 const nonMovingChartData = [
    { name: '1206220', y: 137230 },
    { name: 'CF240.02.03', y: 85254 },
    { name: 'QT200-COM-EXTCABLE', y: 40824 },
    { name: 'MR-25M', y: 40263 },
    { name: 'MR-20M', y: 26369 },
    { name: 'Else', y: 8733500, color: '#5cb85c' },

  ];

  Highcharts.chart('nonMovingChart', {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Non Moving',
    },
    series: [
      {
        name: 'Stock Count',
        data: nonMovingChartData,
      },
    ],
  });

// Total inventory by category

  const totalInventoryByCategory= [
    { name: 'Asti', y: 37160 },
    { name: 'Cohu', y: 26687 },
    { name: 'K&S', y: 702747 },
    { name: 'Lyra', y: 455 },
    { name: 'Makino', y: 6531132 },
    { name: 'Mazak', y: 622454 },
    { name: 'NO', y: 18682 },
    { name: 'Sysmac', y: 224123 },
    { name: 'Else', y: 8163441 },

  ];

  var options = {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Total Inventory by Customer'
  },
  series: [{
    name: 'Stock Count',
    data: totalInventoryByCategory,
    dataSorting: {
      enabled: true,
      sortKey: 'y',
      order: 'desc'
    }
  }]
  };

//   inventory by category 
  Highcharts.chart('inventoryByCategory', options);

    const totalInventoryByCustomer= [
    { name: 'FAB PART', y: 88005 },
    { name: 'FAB PART-BB OS', y: 11150 },
    { name: 'FG-COHU', y: 0 },
    { name: 'FG-KNS', y: 29481 },
    { name: 'FG-MKA', y: 4574 },
    { name: 'FG-MZK', y: 15 },
    { name: 'FG-STI', y: 3215 },
    { name: 'FG-SYSMAC', y: 94162 },
    { name: 'FG-SUB BOM (Sub Assembly)', y: 1623338 },
    { name: 'RAW MATERIAL', y: 0 },
    { name: 'SHEET METAL-BB', y: 138419 },
    { name: 'STD COMP-BB', y: 7539218, color: '#5cb85c' },
    { name: 'TREATMENT-BB', y: 22989 },
    { name: 'HARDWARE/ACCESSORIES', y: 39859 },
    { name: 'PACKING MATERIAL', y: 15113 },
    { name: 'PROD CONSUMABLE', y: 14903 },

  ];

  var options = {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Total Inventory by Category'
  },
  series: [{
    name: 'Stock Count',
    data: totalInventoryByCustomer,
    dataSorting: {
      enabled: true,
      sortKey: 'y',
      order: 'desc'
    }
  }]
  };

  Highcharts.chart('inventoryByCustomer', options);
