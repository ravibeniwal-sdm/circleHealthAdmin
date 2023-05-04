import { Line, Pie } from '@ant-design/charts';
import { PageContainer } from '@ant-design/pro-components';
import './style.less';

function Dashboard() {
  const lineData = [
    {
      Date: '2010-01',
      scales: 1998,
    },
    {
      Date: '2010-02',
      scales: 1850,
    },
    {
      Date: '2010-03',
      scales: 1720,
    },
    {
      Date: '2010-04',
      scales: 1818,
    },
    {
      Date: '2010-05',
      scales: 1920,
    },
    {
      Date: '2010-06',
      scales: 1802,
    },
    {
      Date: '2010-07',
      scales: 1945,
    },
    {
      Date: '2010-08',
      scales: 1856,
    },
    {
      Date: '2010-09',
      scales: 2107,
    },
    {
      Date: '2010-10',
      scales: 2140,
    },
    {
      Date: '2010-11',
      scales: 2311,
    },
    {
      Date: '2010-12',
      scales: 1972,
    },
    {
      Date: '2011-01',
      scales: 1760,
    },
    {
      Date: '2011-02',
      scales: 1824,
    },
    {
      Date: '2011-03',
      scales: 1801,
    },
    {
      Date: '2011-04',
      scales: 2001,
    },
    {
      Date: '2011-05',
      scales: 1640,
    },
    {
      Date: '2011-06',
      scales: 1502,
    },
    {
      Date: '2011-07',
      scales: 1621,
    },
    {
      Date: '2011-08',
      scales: 1480,
    },
    {
      Date: '2011-09',
      scales: 1549,
    },
    {
      Date: '2011-10',
      scales: 1390,
    },
    {
      Date: '2011-11',
      scales: 1325,
    },
    {
      Date: '2011-12',
      scales: 1250,
    },
    {
      Date: '2012-01',
      scales: 1394,
    },
    {
      Date: '2012-02',
      scales: 1406,
    },
    {
      Date: '2012-03',
      scales: 1578,
    },
    {
      Date: '2012-04',
      scales: 1465,
    },
    {
      Date: '2012-05',
      scales: 1689,
    },
    {
      Date: '2012-06',
      scales: 1755,
    },
    {
      Date: '2012-07',
      scales: 1495,
    },
    {
      Date: '2012-08',
      scales: 1508,
    },
    {
      Date: '2012-09',
      scales: 1433,
    },
    {
      Date: '2012-10',
      scales: 1344,
    },
    {
      Date: '2012-11',
      scales: 1201,
    },
    {
      Date: '2012-12',
      scales: 1065,
    },
    {
      Date: '2013-01',
      scales: 1255,
    },
    {
      Date: '2013-02',
      scales: 1429,
    },
    {
      Date: '2013-03',
      scales: 1398,
    },
    {
      Date: '2013-04',
      scales: 1678,
    },
    {
      Date: '2013-05',
      scales: 1524,
    },
    {
      Date: '2013-06',
      scales: 1688,
    },
    {
      Date: '2013-07',
      scales: 1500,
    },
    {
      Date: '2013-08',
      scales: 1670,
    },
    {
      Date: '2013-09',
      scales: 1734,
    },
    {
      Date: '2013-10',
      scales: 1699,
    },
    {
      Date: '2013-11',
      scales: 1508,
    },
    {
      Date: '2013-12',
      scales: 1680,
    },
    {
      Date: '2014-01',
      scales: 1750,
    },
    {
      Date: '2014-02',
      scales: 1602,
    },
    {
      Date: '2014-03',
      scales: 1834,
    },
    {
      Date: '2014-04',
      scales: 1722,
    },
    {
      Date: '2014-05',
      scales: 1430,
    },
    {
      Date: '2014-06',
      scales: 1280,
    },
    {
      Date: '2014-07',
      scales: 1367,
    },
    {
      Date: '2014-08',
      scales: 1155,
    },
    {
      Date: '2014-09',
      scales: 1289,
    },
    {
      Date: '2014-10',
      scales: 1104,
    },
    {
      Date: '2014-11',
      scales: 1246,
    },
    {
      Date: '2014-12',
      scales: 1098,
    },
    {
      Date: '2015-01',
      scales: 1189,
    },
    {
      Date: '2015-02',
      scales: 1276,
    },
    {
      Date: '2015-03',
      scales: 1033,
    },
    {
      Date: '2015-04',
      scales: 956,
    },
    {
      Date: '2015-05',
      scales: 845,
    },
    {
      Date: '2015-06',
      scales: 1089,
    },
    {
      Date: '2015-07',
      scales: 944,
    },
    {
      Date: '2015-08',
      scales: 1043,
    },
    {
      Date: '2015-09',
      scales: 893,
    },
    {
      Date: '2015-10',
      scales: 840,
    },
    {
      Date: '2015-11',
      scales: 934,
    },
    {
      Date: '2015-12',
      scales: 810,
    },
    {
      Date: '2016-01',
      scales: 782,
    },
    {
      Date: '2016-02',
      scales: 1089,
    },
    {
      Date: '2016-03',
      scales: 745,
    },
    {
      Date: '2016-04',
      scales: 680,
    },
    {
      Date: '2016-05',
      scales: 802,
    },
    {
      Date: '2016-06',
      scales: 697,
    },
    {
      Date: '2016-07',
      scales: 583,
    },
    {
      Date: '2016-08',
      scales: 456,
    },
    {
      Date: '2016-09',
      scales: 524,
    },
    {
      Date: '2016-10',
      scales: 398,
    },
    {
      Date: '2016-11',
      scales: 278,
    },
    {
      Date: '2016-12',
      scales: 195,
    },
    {
      Date: '2017-01',
      scales: 145,
    },
    {
      Date: '2017-02',
      scales: 207,
    },
  ];
  const pieData = [
    {
      type: 'React',
      value: 27,
    },
    {
      type: 'Angular',
      value: 25,
    },
    {
      type: 'Vue',
      value: 18,
    },
    {
      type: 'Vanilla',
      value: 15,
    },
    {
      type: 'Next',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];

  const lineConfig = {
    data: lineData,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    // tooltip: {
    //   formatter: (data) => {
    //     return {
    //       name: '',
    //       value: any,
    //     };
    //   },
    //   customContent: (name, data) =>
    //     `<div>${data?.map((item) => {
    //       return `<div class="tooltip-chart" >
    //           <span class="tooltip-item-name">${item?.name}</span>
    //           <span class="tooltip-item-value">${item?.value}</span>
    //         </div>`;
    //     })}</div>`,
    //   showMarkers: true,
    //   showContent: true,
    //   position: 'right',
    //   showCrosshairs: true,
    // },
  };

  const pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  // return <Line {...config} />;
  return (
    <PageContainer>
      <div className="dashboard-container">
        <div className="dashbaord-card-container">
          <div className="dashboard-card-item">
            <div className="card-header">Users</div>
            <div className='card-item'>500</div>
          </div>
          <div className="dashboard-card-item">
            <div className="card-header">Users</div>
            <div className='card-item'>500</div>
          </div>
          <div className="dashboard-card-item">

            <div className="card-header">Users</div>
            <div className='card-item'>500</div>
          </div>
          <div className="dashboard-card-item">
            <div className="card-header">Users</div>
            <div className='card-item'>500</div>
          </div>
        </div>
        <div className="dashboard-item chart-container">
          <Line className="line-chart chart-item" {...lineConfig} />
          <Pie
            className="pie-chart chart-item"
            style={{ width: '300px', height: '200px' }}
            {...pieConfig}
          />
        </div>
      </div>
    </PageContainer>
  );
}

export default Dashboard;
