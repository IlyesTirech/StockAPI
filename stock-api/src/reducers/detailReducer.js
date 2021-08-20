const initState = { detail: [], chart: [] };

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_DETAIL':
      return {
        ...state,
        detail: action.payload.detail,
        chart: action.payload.chart,
      };

    default:
      return { ...state };
  }
};

export default detailReducer;
