import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
const Coin = ({
  image,
  name,
  price,
  cap,
  symbol,
  priceChange,
  volume,
  currency,
}) => {
  const imgwidth = window.screen.width;

  return (
    <CardStyled>
      <Row style={{ height: '60px' }}>
        <Col id='colimg' xs={1}>
          <img src={image} alt={name} />
        </Col>

        <Col>
          <strong>{name}</strong>
        </Col>
        {window.screen.width < 770 ? (
          <div></div>
        ) : (
          <Col id='symbol'>{symbol.toUpperCase()}</Col>
        )}

        {currency === 'gbp' ? <Col>£{price}</Col> : <Col>${price}</Col>}

        <Col>
          {priceChange < 0 ? (
            <div style={{ color: 'red' }}>{priceChange.toFixed(2)}%</div>
          ) : (
            <div style={{ color: 'green' }}>{priceChange.toFixed(2)}%</div>
          )}
        </Col>
        {currency === 'gbp' ? (
          <Col>£{cap.toLocaleString()}</Col>
        ) : (
          <Col>${cap.toLocaleString()}</Col>
        )}
        {currency === 'gbp' ? (
          <Col>£{volume.toLocaleString()}</Col>
        ) : (
          <Col>${volume.toLocaleString()}</Col>
        )}
      </Row>
    </CardStyled>
  );
};
const CardStyled = styled.div`
  margin-bottom: 20px;
  margin-top: 30px;
  align-items: center;
  @media screen and (max-width: 774px) {
    margin-bottom: 0px;
  }
  strong {
    align-items: center;
  }
  img {
    width: 60px;

    @media screen and (max-width: 1000px) {
      width: 40px;
    }
    @media screen and (max-width: 774px) {
      display: none;
    }
  }
  #colimg {
    @media screen and (max-width: 774px) {
      display: none;
    }
  }
`;

export default Coin;
