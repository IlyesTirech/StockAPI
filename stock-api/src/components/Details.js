import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
const Details = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDetail(match.params.id));
  }, [dispatch, match]);

  const { detail } = useSelector((state) => state.details);
  return (
    <div>
      <h1>{detail.name}</h1>
    </div>
  );
};

export default Details;
