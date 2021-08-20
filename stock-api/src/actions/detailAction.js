import axios from 'axios';
import { getChartDataURL, getCoinDataURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(getCoinDataURL(id));
  const chartData = await axios.get(getChartDataURL(id));
  const loopData = (chartData) => {
    let data = [];
    for (let i = 0; i < chartData.length; i++) {
      data.push({ x: new Date(chartData[i][0]), y: chartData[i][1] });
    }
    return data;
  };
  dispatch({
    type: 'FETCH_DETAIL',
    payload: {
      detail: detailData.data,
      chart: loopData(chartData.data.prices),
    },
  });
};

export default loadDetail;
