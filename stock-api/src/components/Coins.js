import { FormControl, Select, MenuItem } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Coin from './Coin';
import Search from './Search';
import Subheadings from './Subheadings';
import Loader from './Loader';
const Coins = () => {
  const [search, setSearch] = useState('');
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState('gbp');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //To get all coins
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => setError(true));
    setLoading(false);
  }, [currency]);

  console.log(currency);

  const onSearchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onCurrencyChangeHandler = (e) => {
    setCurrency(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <CoinsStyled>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <h2>Error has been found!</h2>
        ) : (
          <div>
            <Search onChangeHandler={onSearchChangeHandler} />
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
            <Subheadings />

            {filterCoins.map((coin) => (
              <Row>
                <Col>
                  <Link to={{ pathname: `/details/${coin.id}` }}>
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      price={coin.current_price}
                      cap={coin.market_cap}
                      symbol={coin.symbol}
                      priceChange={coin.price_change_percentage_24h}
                      volume={coin.total_volume}
                      currency={currency}
                    />
                  </Link>
                  <LineStyled></LineStyled>
                </Col>
              </Row>
            ))}
          </div>
        )}
      </Container>
    </CoinsStyled>
  );
};

const CoinsStyled = styled.div`
  .dropdown {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 76rem;
  }
`;
const LineStyled = styled.div`
  border: 1px solid black;
`;
export default Coins;
