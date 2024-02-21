"use client";

import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Chart from "react-google-charts";

const AdminCharts = () => {
  const { data = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await useAxiosSecure.get("/admin-stats");

      return res.data;
    },
  });

  const chartData = [
    ["Collection", "Total"],
    ["Applicants", data?.applicants],
    ["Companies", data?.companies],
    ["Applications", data?.applications],
    ["Jobs", data?.jobs],
    ["Bookmarks", data?.listOfBookmarks]
  ];

  // const chartData = [
  //     ["Collection", "Total"],
  //     ["Applicants", 100],
  //     ["Jobs", 150],
  //     ["Company", 123],
  //   ];

  const options = {
    chart: {
      title: "Dream Finder Bar and line Chart",
      subtitle: "Applicants,Jobs, Company",
    },
  };

  return (
    <div>
      <section className=" py-6 bg-whiteColor text-primaryColor">
        <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-3 xl:grid-cols-5">
          <div className="flex justify-center p-4 space-x-4 rounded-lg md:space-x-6 ">
            <div className="flex  flex-col justify-center align-middle border border-primaryColor px-4 py-2 rounded-2xl rounded-tr-none rounded-bl-none">
              <p className="text-3xl text-center font-semibold ">
                {data?.applicants}
              </p>
              <p className="capitalize">Applicants</p>
            </div>
          </div>
          <div className="flex justify-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col justify-center align-middle border border-primaryColor px-4 py-2 rounded-2xl rounded-tr-none rounded-bl-none">
              <p className="text-3xl text-center font-semibold ">
                {data?.companies}
              </p>
              <p className="capitalize">Companies</p>
            </div>
          </div>
          <div className="flex justify-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col justify-center align-middle border border-primaryColor px-4 py-2 rounded-2xl rounded-tr-none rounded-bl-none">
              <p className="text-3xl text-center font-semibold ">
                {data?.applications}
              </p>
              <p className="capitalize">Applications</p>
            </div>
          </div>
          <div className="flex justify-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col justify-center align-middle border border-primaryColor px-4 py-2 rounded-2xl rounded-tr-none rounded-bl-none">
              <p className="text-3xl text-center font-semibold ">
                {data?.jobs}
              </p>
              <p className="capitalize">Jobs</p>
            </div>
          </div>

          <div className="flex justify-center p-4 space-x-4 rounded-lg md:space-x-6 ">
            <div className="flex  flex-col justify-center align-middle border border-primaryColor px-4 py-2 rounded-2xl rounded-tr-none rounded-bl-none">
              <p className="text-3xl text-center font-semibold ">
                {data?.listOfBookmarks}
              </p>
              <p className="capitalize">Bookmarks</p>
            </div>
          </div>
        </div>
      </section>

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
          width={"100%"}
          height={"400px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            title: "Dream Finder pie chart",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </div>
  );
};

export default AdminCharts;
