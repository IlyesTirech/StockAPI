import React from 'react';
import { Container } from 'react-bootstrap';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  AreaSeries,
  VerticalBarSeries,
  MarkSeries,
  LineMarkSeries,
} from 'react-vis';
import styled from 'styled-components';

const VisChart = ({ chart, detail }) => {
  const onMouseMove = () => {};
  return (
    <XYPlot
      // onMouseMove={}
      width={1500}
      height={400}
      margin={{ left: 100 }}
      color='black'
      xType='time'
    >
      <YAxis tickFormat={(v) => `${v.toString().slice(0, 2)}k`} title='GBP' />
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
  );
};

export default VisChart;
