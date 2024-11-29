const DEPOSIT = "leftMoney/DEPOSIT";
const WITHDRAWAL = "letfMoney/WITHDRAWAL";

const initialState = 0;

// payload라는 이름으로 데이터를 받아주겠다.
export const deposit = (payload) => ({
  type: DEPOSIT,
  payload,
});
export const withdrawal = (payload) => ({
  type: WITHDRAWAL,
  payload,
});
const leftMoneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAWAL:
      return state - action.payload;
    default:
      return state;
  }
};

export default leftMoneyReducer;
