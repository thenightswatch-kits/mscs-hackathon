//@ts-nocheck
import React from 'react';
import dynamic from 'next/dynamic';
import 'apexcharts/dist/apexcharts.css';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface DonutChartProps {
    [year: string]: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ countByYear }) => {
    const labels = Object.keys(countByYear);
    const data = Object.values(countByYear);
    const series = data;

  const options = {
    chart: {
      type: 'donut',
    },
    dataLabels: {
        enabled: false,
        hideWhenNoData: true,
    },
    labels,
    plotOptions: {
        donut: {
            labels: {
                show: false,
            }
        }
      },
      legend: {
        position: 'bottom',
      },
      colors: ['#37375C', '#4D4DAE', '#5A6ACF', '#8593ED', '#282843', '#C7CEFF', '#8282ED'],
  };

  return <ApexChart options={options} series={series} type="donut" width={'120%'}/>;
};

export default DonutChart;