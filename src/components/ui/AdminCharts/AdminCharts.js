"use client"

import React from 'react';
import Chart from 'react-google-charts';

const AdminCharts = () => {

    const chartData = [
        ["Collection", "Total"],
        ["Applicants", 100],
        ["Jobs", 150],
        ["Company", 123],
      ];
    
      const options = {
        chart: {
          title: "Dream Finder Bar and line Chart",
          subtitle:
            "Applicants,Jobs, Company",
        },
      };

    return (
        <div>
            <div className="flex justify-around items-center flex-col lg:flex-row">
        
        <div className="w-full md:w-1/2">
          <Chart
            chartType="Bar"
            data={chartData}
            options={options}
            width="100%"
            height="400px"
          ></Chart>
        </div>
        

       
       <div className="w-full md:w-1/2">
          <Chart
            chartType="LineChart"
            data={chartData}
            options={options}
            width="100%"
            height="400px"
          ></Chart>
        </div>
       
      </div>
      <div>
        {/* <h1 className="text-xl md:text-3xl text-primaryColor text-center my-6" >Dream Finder Pie Chart.</h1> */}
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          title: 'Dream Finder pie chart',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
        </div>
    );
};

export default AdminCharts;