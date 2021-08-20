const initState = { detail: [] };

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_DETAIL':
      return {
        ...state,
        detail: action.payload.detail,
      };

    default:
      return { ...state };
  }
};

export default detailReducer;
