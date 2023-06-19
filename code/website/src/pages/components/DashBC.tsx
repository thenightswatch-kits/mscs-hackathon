//@ts-nocheck
import React from 'react';
import dynamic from 'next/dynamic';
import 'apexcharts/dist/apexcharts.css';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface BarChartProps {
    [state: string]: number;
}

const BarChart: React.FC<BarChartProps> = ({ vdata }) => {
  const categories = Object.keys(vdata);
  const data = Object.values(vdata);
  const options = {
    colors: '#5A6ACF',
    chart: {
      id: 'basic-bar',
      
    },
    xaxis: {
      categories,
      labels: {
        show: false
      }
    },
  };

  const series = [
    {
      name: 'socitey(s)',
      data,
    },
  ];

  return <ApexChart options={options} series={series} type="bar" height={350} />;
};

export default BarChart;