import React from 'react';
import ApexCharts from 'apexcharts';
import dynamic from 'next/dynamic';

const DynamicLineChart = dynamic(() => import('react-apexcharts'), { ssr: false });


export const DashMonthly = ({monthlyCounts}:any) => {
  const currentYear = new Date().getFullYear();
  // let prevValues = Object.values(monthlyCounts[currentYear-2]);
  // let currnetValues = Object.values(monthlyCounts[currentYear-1]);
  const chartData:any = {
      
      series: [
        {
          name: String(currentYear-2),
          data: Object.values(monthlyCounts[currentYear-2])
        },
        {
          name: String(currentYear-1),
          data: Object.values(monthlyCounts[currentYear-1])
        }
      ],
      options: {
        colors: ['#E6E8EC','#5A6ACF'],
        chart: {
          type: 'line',
          height: 350,
          width: '80%',
          zoom: {
            enabled: false
          }
        },
        xaxis: {
          categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug' , 'sep' , 'oct' , 'nov' , 'dec']
        }
      }
    };
  
    return <DynamicLineChart options={chartData.options} series={chartData.series} height={350} />;
  };