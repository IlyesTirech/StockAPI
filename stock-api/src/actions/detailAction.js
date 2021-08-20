import axios from 'axios';
import { getCoinDataURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(getCoinDataURL(id));

  dispatch({
    type: 'FETCH_DETAIL',
    payload: {
      detail: detailData.data,
    },
  });
};

export default loadDetail;
