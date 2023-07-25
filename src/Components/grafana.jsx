    import React, {Component} from 'react';
    import moment from 'moment';
    import ReactApexChart from 'react-apexcharts'
    import '../CSS/grafana.css'
import Realcal from './realcal';
    

    class ApexChart extends Component {

        state = {
            data : [
                    { company: 'Duranc', TwoWheeler: 44, FourWheeler: 53 },
                    { company: 'TCS', TwoWheeler: 55, FourWheeler: 32 },
                    { company: 'Wipro', TwoWheeler: 41, FourWheeler: 33 },
                    { company: 'Capgemini', TwoWheeler: 37, FourWheeler: 52 },
                    { company: 'Google', TwoWheeler: 22, FourWheeler: 13 },
                    { company: 'Infosys', TwoWheeler: 43, FourWheeler: 43 },
                    { company: 'Microsoft', TwoWheeler: 21, FourWheeler: 32 },
                  ],
            
            series: [{
            name: '2W',
            data: [44, 55, 41, 37, 22, 43, 21]
            }, 
            {
            name: '4W',
            data: [53, 32, 33, 52, 13, 43, 32]
            },
            // {
            // name: 'Wipro',
            // data: [12, 17, 11, 9, 15, 11, 20]
            // },
            // {
            // name: 'Infosys',
            // data: [9, 7, 5, 8, 6, 9, 4]
            // },
            // {
            // name: 'Capgemini',
            // data: [25, 12, 19, 32, 25, 24, 10]
            // }
            ],

            options: {
            chart: {
                type: 'bar',
                height: 350,
                width: 200,
                stacked: true,
                toolbar: false 
            },
            plotOptions: {
                bar: {
                horizontal: true,
                dataLabels: {
                    total: {
                    enabled: true,
                    offsetX: 0,
                    style: {
                        fontSize: '13px',
                        fontWeight: 900
                    }
                    }
                }
                },
            },
            // stroke: {
            //     width: 1,
            //     colors: ['#fff']
            // },
            title: {
                align:'center',
                style:{
                    fontSize:'20px',
                    top: '20px !important',
                    position:'absolute !important'
                },
                text: 'Duranc CC Footage of Vehicles'
            },
            xaxis: {
                categories: ['Duranc', '2023-07-17', '2023-07-18', '2023-07-19', '2023-07-20', '2023-07-21', '2023-07-22'],
                labels: {
                    formatter: function (val) {
                        // return moment(val).format('DD-MM-YYYY');
                        return val
                    }
                }
            },
            yaxis: {
                title: {
                text: 'July 2023'
                },
            },
            xaxis: {
                categories: ['Duranc', 'TCS', 'Wipro', 'Capgemini', 'Google', 'Infosys', 'Microsoft'],
                title: {
                text: 'No.of Vehicles visited based on location corresponding to Date'
                },
            },
            tooltip: {
                y: {
                formatter: function (val) {
                    return val + ""
                }
                }
            },
            fill: {
                opacity: 1
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
            }
            },
        };

        render() {
            const sortedData = this.state.data;
        return (
    <div id="chart" style={{display:'flex'}}>
    <ReactApexChart className="apexcharts-legend.apexcharts-align-center.apx-legend-position-top" options={this.state.options} series={this.state.series} type="bar" width={800} height={350} />
    {/* <Realcal /> */}
    <table className="container table table-striped table-hover" style={{ marginLeft: '1rem', marginRight: '35px', marginTop: '10px' }}>
      <thead>
        <tr className="table-danger">
          <th >Company </th>
          <th >2W </th>
          <th >4W </th>
          <th >Total Count </th>
          {/* <th >Time </th> */}
          {/* <th >Gateway </th> */}
          {/* <th>Up/Down time</th> */}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            <td>{item.company}</td>
            <td>{item.TwoWheeler}</td>
            <td>{item.FourWheeler}</td>
            <td>{item.TwoWheeler + item.FourWheeler}</td>
            {/* <td>{new Date(item.time).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td> */}
            {/* <td>{item.gateway}</td> */}
            
            {/* <td>
              <Timer
                days={0}
                hours={0}
                minutes={0}
                seconds={0}
                
              />
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
        );
        }
    }

    export default ApexChart



// import React, { Component } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import '../CSS/grafana.css';
// import Realcal from './realcal';

// class ApexChart extends Component {
//   state = {
//     data: [
//       { label: 'Cars', inCount: 45, outCount: 30 },
//       { label: 'Bikes', inCount: 128, outCount: 75 },
//       { label: 'Trucks', inCount: 65, outCount: 40 },
//     ],
//     series: [
//       {
//         name: '2W',
//         data: [44, 55, 41, 37, 22, 43, 21],
//       },
//       {
//         name: '4W',
//         data: [53, 32, 33, 52, 13, 43, 32],
//       },
//     ],
//     options: {
//       options: {
//             chart: {
//                 type: 'bar',
//                 height: 350,
//                 width: 200,
//                 stacked: true,
//                 toolbar: false 
//             },
//             plotOptions: {
//                 bar: {
//                 horizontal: true,
//                 dataLabels: {
//                     total: {
//                     enabled: true,
//                     offsetX: 0,
//                     style: {
//                         fontSize: '13px',
//                         fontWeight: 900
//                     }
//                     }
//                 }
//                 },
//             },
//             // stroke: {
//             //     width: 1,
//             //     colors: ['#fff']
//             // },
//             title: {
//                 align:'center',
//                 style:{
//                     fontSize:'20px',
//                     top: '20px !important',
//                     position:'absolute !important'
//                 },
//                 text: 'Duranc CC Footage of Vehicles'
//             },
//             xaxis: {
//                 categories: ['Duranc', '2023-07-17', '2023-07-18', '2023-07-19', '2023-07-20', '2023-07-21', '2023-07-22'],
//                 labels: {
//                     formatter: function (val) {
//                         // return moment(val).format('DD-MM-YYYY');
//                         return val
//                     }
//                 }
//             },
//             yaxis: {
//                 title: {
//                 text: 'July 2023'
//                 },
//             },
//             xaxis: {
//                 categories: ['Duranc', 'TCS', 'Wipro', 'Capgemini', 'Google', 'Infosys', 'Microsoft'],
//                 title: {
//                 text: 'No.of Vehicles visited based on location corresponding to Date'
//                 },
//             },
//             tooltip: {
//                 y: {
//                 formatter: function (val) {
//                     return val + ""
//                 }
//                 }
//             },
//             fill: {
//                 opacity: 1
//             },
//             legend: {
//                 position: 'top',
//                 horizontalAlign: 'center',
//             }
//             },
//     },
//   };

//   render() {
//     const { data, series } = this.state;

//     // Get unique labels from series names
//     const labels = series.map((item) => item.name);

//     // Generate tabular form data
//     const tableData = data.map((item, index) => {
//       return {
//         company: item.label,
//         twoWCount: series[0].data[index],
//         fourWCount: series[1].data[index],
//       };
//     });

//     return (
//       <div id="chart" style={{ display: 'flex' }}>
//         <ReactApexChart
//           className="apexcharts-legend.apexcharts-align-center.apx-legend-position-top"
//           options={this.state.options}
//           series={this.state.series}
//           type="bar"
//           width={800}
//           height={350}
//         />
//         {/* <Realcal /> */}
//         <table className="container table table-striped table-hover" style={{ marginLeft: '13rem', marginTop: '10px' }}>
//           <thead>
//             <tr className="table-danger">
//               <th>Company</th>
//               <th>2W</th>
//               <th>4W</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.company}</td>
//                 <td>{item.twoWCount}</td>
//                 <td>{item.fourWCount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default ApexChart;


