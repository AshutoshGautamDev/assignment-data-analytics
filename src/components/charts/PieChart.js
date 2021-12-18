import React, { useEffect, useState } from "react";
import Chart from "./helper";
import '../../assets/style.css';

const PieChart = ({ id, data, isHovered = false }) => {
  const chartRef = React.createRef();
  const [option, setOption] = useState(null);
  useEffect(() => {
    const canvasContext = chartRef.current.getContext("2d");
    const result = new Chart(canvasContext, {
      type: "pie",
      data: {
        datasets: [
          {
            label: "Pie chart",
            data: [],
            backgroundColor: [],
            hoverOffset: 4,
          },
        ],
      },
      options: {
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

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    if (option && data) {
      const percentageArray = data.map((x) => x.CM001_percent);
      const labelArray = data.map((x) => x.advertiserId);
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
              return `${data[context.dataIndex].advertiserId} ${context.raw}%`;
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
      className="pie-chart"
      style={{ maxWidth: "40%", marginLeft: "30%" }}
    />
  );
};

export default PieChart;
