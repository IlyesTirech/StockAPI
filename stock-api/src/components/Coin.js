import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
const Coin = ({ image, name, price, cap, symbol, priceChange, volume }) => {
  return (
    <CardStyled>
      <Row style={{ height: '60px' }}>
        <Col xs={1}>
          <img src={image} alt={name} />
        </Col>

        <Col>
          <strong>{name}</strong>
        </Col>
        <Col>{symbol.toUpperCase()}</Col>
        <Col>£{price}</Col>
        <Col>
          {priceChange < 0 ? (
            <div style={{ color: 'red' }}>{priceChange.toFixed(2)}%</div>
          ) : (
            <div style={{ color: 'green' }}>{priceChange.toFixed(2)}%</div>
          )}
        </Col>
        <Col>£{cap.toLocaleString()}</Col>
        <Col>£{volume.toLocaleString()}</Col>
      </Row>
    </CardStyled>
  );
};
const CardStyled = styled.div`
  margin-bottom: 20px;
  margin-top: 30px;
  align-items: center;
  strong {
    align-items: center;
  }
  img {
    width: 60px;
  }
`;
const CardBodyStyled = styled.div`
  strong {
  }
`;
export default Coin;
