import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Coin from './Coin';
import Search from './Search';
import Subheadings from './Subheadings';
const Coins = () => {
  const [search, setSearch] = useState('');
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
      });
  }, []);
  console.log(coins);
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <Container>
        <Search onChangeHandler={onChangeHandler} />
        <Subheadings />
        {filterCoins.map((coin) => (
          <Row>
            <Col>
              <Link to={{ pathname: `/details/${coin.id}` }}>
                <Coin
                  name={coin.name}
                  image={coin.image}
                  price={coin.current_price}
                  cap={coin.market_cap}
                  symbol={coin.symbol}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                />
              </Link>
              <LineStyled></LineStyled>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};
const LineStyled = styled.div`
  border: 1px solid black;
`;
export default Coins;
