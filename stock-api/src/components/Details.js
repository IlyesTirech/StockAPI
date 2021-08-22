import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import VisChart from './VisChart';
import axios from 'axios';
import { FormControl, Select, MenuItem } from '@material-ui/core';
const Details = ({ match }) => {
  const [details, setDetails] = useState({});
  const [chart, setChart] = useState([]);
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState('gbp');

  const onCurrencyChangeHandler = (e) => {
    setCurrency(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${match.params.id}`)
      .then((res) => {
        const {
          data: { name, image, description, market_data },
        } = res;
        const {
          current_price,
          market_cap,
          total_supply,
          price_change_percentage_24h,
          price_change_percentage_7d,
          price_change_percentage_1y,
        } = market_data;
        if (currency === 'gbp') {
          setCurrency('gbp');
          setDetails({
            name,
            img: image.small,
            desc: description.en,
            cp_gbp: current_price.gbp,
            mc_gbp: market_cap.gbp,
            ts: total_supply,
            tfh: price_change_percentage_24h,
            sd: price_change_percentage_7d,
            oy: price_change_percentage_1y,
          });
        } else {
          setCurrency('usd');
          setDetails({
            name,
            img: image.small,
            desc: description.en,
            cp_usd: current_price.usd,
            mc_usd: market_cap.usd,
            ts: total_supply,
            tfh: price_change_percentage_24h,
            sd: price_change_percentage_7d,
            oy: price_change_percentage_1y,
          });
        }
      });
  }, [match, currency]);
  console.log(details);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${match.params.id}/market_chart?vs_currency=${currency}&days=1&interval=hourly`
      )
      .then((res) => {
        const loopData = (chart) => {
          let data = [];
          for (let i = 0; i < chart.length; i++) {
            data.push({ x: new Date(chart[i][0]), y: chart[i][1] });
          }

          return data;
        };
        setChart(loopData(res.data.prices));
      });
  }, [match, currency]);

  return (
    <DetailStyled>
      <Container>
        <FormControl className='dropdown'>
          <Select
            variant='outlined'
            value={currency}
            onChange={onCurrencyChangeHandler}
          >
            <MenuItem value='gbp'>gbp</MenuItem>
            <MenuItem value='usd'>usd</MenuItem>
          </Select>
        </FormControl>
        <TitleStyled>
          <img src={details.img} alt={details.name} />
          <h1>{details.name}</h1>
        </TitleStyled>

        <p>{details.desc}</p>
        <Row id='rows'>
          <Card id='cards'>
            {currency === 'gbp' ? (
              <Col>Current Price: £{details.cp_gbp}</Col>
            ) : (
              <Col>Current Price: ${details.cp_usd}</Col>
            )}
          </Card>
          <Card id='cards'>
            {currency === 'gbp' ? (
              <Col>Market Cap: £{details.mc_gbp}</Col>
            ) : (
              <Col>Market Cap: ${details.mc_usd}</Col>
            )}
          </Card>
        </Row>
        <Row id='rows'>
          <Card id='cards'>
            <Col>Total Supply: {details.ts}</Col>
          </Card>
          <Card id='cards'>
            <Col>24h % : {details.tfh}%</Col>
          </Card>
        </Row>
        <Row id='rows'>
          <Card id='cards'>
            <Col>7d % : {details.sd}%</Col>
          </Card>
          <Card id='cards'>
            <Col>1y %: {details.oy}%</Col>
          </Card>
        </Row>
      </Container>

      <VisChart chart={chart} details={details} currency={currency} />
    </DetailStyled>
  );
};

const TitleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  img {
    margin-right: 5px;
  }
`;

const DetailStyled = styled.div`
  #rows {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #cards {
    width: 40%;
    padding: 1rem;
    margin: 5px;
  }
  .dropdown {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
`;
export default Details;
