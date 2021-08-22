import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
const Subheadings = () => {
  return (
    <SubHeadingStyled>
      <Row>
        <Col xs={1}></Col>
        <Col>Name</Col>
        <Col>Symbol</Col>
        <Col>Price</Col>
        <Col>24h %</Col>
        <Col>Market Cap</Col>
        <Col>Volume 24h</Col>
      </Row>
      <LineStyled></LineStyled>
    </SubHeadingStyled>
  );
};

const SubHeadingStyled = styled.div`
  margin-top: 20px;

  align-items: center;
`;

const LineStyled = styled.div`
  border: 1px solid black;
`;
export default Subheadings;
