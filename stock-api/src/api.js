const BASE_URL = 'https://api.coingecko.com/api/v3/coins/';

const ALL_COINS =
  'markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false';

export const getAllCoinsURL = () => `${BASE_URL}${ALL_COINS}`;
export const getCoinDataURL = (id) => `${BASE_URL}${id}`;
export const getChartDataURL = (id) =>
  `${BASE_URL}${id}/market_chart?vs_currency=gbp&days=1&interval=hourly`;
