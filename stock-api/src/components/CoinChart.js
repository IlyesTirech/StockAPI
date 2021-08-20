import React from 'react';
import { Line } from 'react-chartjs-2';

const CoinChart = ({ chart, detail }) => {
  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              label: `${detail.name} price`,
              data: chart,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                type: 'time',
                distribution: 'linear',
              },
            ],
          },
        }}
      />
      {/* <Line
        data={{
          datasets: [
            {
              label: `${detail.name} price`,
              data: {
                chart,
              },

              borderColor: 'rgba(174,305,194,0.4)',
              pointRadius: 0,
              borderWidth: 1,
            },
          ],
        }}
        height={20}
        width={20}
        option={{
          maintainAspectRatio: false,
          lineHeightAnnotation: {
            always: true,
            hover: false,
            lineWeight: 1,
          },
          animation: {
            duration: 2000,
          },
          responsive: true,
          scales: {
            // xAxes: [
            //   {
            //     type: 'time',
            //     distribution: 'linear',
            //   },
            // ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      /> */}
    </div>
  );
};

export default CoinChart;
