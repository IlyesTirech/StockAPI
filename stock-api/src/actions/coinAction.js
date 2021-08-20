import axios from 'axios';
import { getAllCoinsURL } from '../api';

export const loadCoins = () => async (dispatch) => {
  const allCoinsData = await axios.get(getAllCoinsURL());
  dispatch({
    type: 'FETCH_COINS',
    payload: {
      allCoins: allCoinsData.data,
    },
  });
};
