import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import CoinChart from './CoinChart';
import VisChart from './VisChart';

const Details = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDetail(match.params.id));
  }, [dispatch, match]);

  const { detail, chart } = useSelector((state) => state.details);

  return (
    <div>
      <h1>{detail.name}</h1>
      {/* <CoinChart chart={chart} detail={detail} /> */}
      <VisChart chart={chart} detail={detail} />
    </div>
  );
};

export default Details;
