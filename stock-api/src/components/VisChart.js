import React, { useState } from 'react';
import { XYPlot, XAxis, YAxis, LineSeries } from 'react-vis';
import styled from 'styled-components';

const VisChart = ({ chart, currency }) => {
  const [title, setTitle] = useState('gbp');
  const TitleChange = () => {
    if (currency === 'gbp') {
      setTitle('gbp');
    } else if (currency === 'usd') {
      setTitle('usd');
    }
  };
  console.log(title);
  return (
    <ChartStyled>
      <XYPlot
        width={1500}
        height={500}
        margin={{ left: 480 }}
        color='black'
        xType='time'
      >
        <YAxis tickFormat={(v) => `${v.toString()}`} title={title} />
        <XAxis title='Time' />

        <LineSeries
          data={chart}
          curve={'curveMonotoneX'}
          style={{
            strokeLinejoin: 'round',
            strokeWidth: '0.5px',
          }}
        />
      </XYPlot>
    </ChartStyled>
  );
};
const ChartStyled = styled.div`
  margin-top: 20px;
`;
export default VisChart;
