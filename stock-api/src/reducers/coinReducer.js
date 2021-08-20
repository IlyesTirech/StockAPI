const initState = {
  allCoins: [],
};

const coinReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_COINS':
      return { ...state, allCoins: action.payload.allCoins };
    default:
      return { ...state };
  }
};

export default coinReducer;
