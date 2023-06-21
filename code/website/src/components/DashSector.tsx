// import dynamic from 'next/dynamic';
// import React, { useEffect, useRef } from 'react';


// const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

// const CustomAngleCircleChart: React.FC = () => {
//   const chartRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       const options = {
//         series: [76, 67, 61, 90],
//         chart: {
//         height: 390,
//         type: 'radialBar',
//       },
//       plotOptions: {
//         radialBar: {
//           offsetY: 0,
//           startAngle: 0,
//           endAngle: 270,
//           hollow: {
//             margin: 5,
//             size: '30%',
//             background: 'transparent',
//             image: undefined,
//           },
//           dataLabels: {
//             name: {
//               show: false,
//             },
//             value: {
//               show: false,
//             }
//           }
//         }
//       },
//       colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
//       labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
//       legend: {
//         show: true,
//         floating: true,
//         fontSize: '16px',
//         position: 'left',
//         offsetX: 0,
//         offsetY: 40,
//         labels: {
//           useSeriesColors: true,
//         },
//         markers: {
//           size: 0
//         },
//         formatter: function(seriesName:String, opts:any) {
//           return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
//         },
//         itemMargin: {
//           vertical: 3
//         }
//       },
//       responsive: [{
//         breakpoint: 480,
//         options: {
//           legend: {
//               show: false
//           }
//         }
//       }]
//       }

//       const chart = new ApexCharts(chartRef.current, options);
//       chart.render();
//     }
//   }, []);

//   return <div ref={chartRef} />;
// };

// export default CustomAngleCircleChart;
//@ts-nocheck
import React from 'react';
import dynamic from 'next/dynamic';
import 'apexcharts/dist/apexcharts.css';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface CustomAngleCircleChartProps {
  [year: string]: number;
}

const CustomAngleCircleChart = ({ counts, sectors }) => {
  const options = {
    series: counts,
    chart: {

      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 15,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    labels: sectors,
    colors: ['#37375C', '#4D4DAE', '#5A6ACF', '#8593ED', '#8282ED'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 0,
      offsetY: 0,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 10
      },
      formatter: function (seriesName: String, opts: any) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          fontSize: '8px',
          show: true,
          position: 'top',
        }
      }
    }]
  }

  return <ApexChart options={options} series={options.series} type="radialBar" />;
};

export default CustomAngleCircleChart;