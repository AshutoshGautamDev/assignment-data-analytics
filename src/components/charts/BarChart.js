import React, { useEffect, useState } from "react";
import { getRandomColor } from "../../utils/helper";
import Chart from "./helper";

const BarChart = ({ id, data, isHovered = false }) => {
  const chartRef = React.createRef();
  const [option, setOption] = useState(null);
  useEffect(() => {
    const canvasContext = chartRef.current.getContext("2d");
    const result = new Chart(canvasContext, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Bar chart",
            data: [],
            backgroundColor: [],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
        },
        layout: {
          padding: {
            left: 5,
            right: 5,
          },
        },
        borderWidth: 1,
      },
    });

    setOption(result);

    return () => {
      result.destroy();
    };
  }, []);

  useEffect(() => {
    if (option && data) {
      const percentageArray = data.map((x) => x.impressions_offered);
      const labelArray = data.map((x) => x.appSiteId);
      const total = percentageArray.reduce((prev, curr) => prev + curr, 0);

      let remain = 0;
      if (total < 100) {
        remain = 100 - total;
      }

      option.data.labels = [...labelArray];
      option.data.datasets[0].data = [...percentageArray, remain];
      option.data.datasets[0].backgroundColor = [
        ...data.map((x) => getRandomColor()),
      ];

      option.options.plugins = {
        tooltip: {
          callbacks: {
            label: (context) => {
              return `${context.raw}%`;
            },
          },
        },
      };

      option.update();
    }
  }, [data, option, isHovered]);

  return (
    <canvas
      id={id}
      ref={chartRef}
      style={{ maxWidth: "90%", marginLeft: "5%", border: "2px solid black" }}
    />
  );
};

export default BarChart;
