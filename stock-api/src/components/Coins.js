import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loadCoins } from '../actions/coinAction';
import Coin from './Coin';
import Search from './Search';
import Subheadings from './Subheadings';
const Coins = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(loadCoins());
  }, [dispatch]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const { allCoins } = useSelector((state) => state.coins);

  const filterCoins = allCoins.filter((coin) =>
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
