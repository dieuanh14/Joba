import { Container } from "@mui/material";
import React from "react";
import "./dashboardBody.scss";
import 'react-calendar/dist/Calendar.css';
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Calendar from "react-calendar";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
function DashboardBody() {
  const data = {
    labels: [
      "Monday",
      "Tueday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [3, 6, 9, 5, 6, 2, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {};
  return (
    <Container>
      <div className="main__body">
        <div className="chart__body">
          <div className="total">
            <span>Total: </span>
            <span>2.000.000 VND </span>
          </div>
          <div className="chart">
            <Bar data={data} options={options} />
          </div>
        </div>
        <div className="calendar__body">
    <Calendar/>
        </div>
      </div>
    </Container>
  );
}

export default DashboardBody;
