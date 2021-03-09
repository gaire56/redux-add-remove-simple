import { ADD_TO_CART } from '../Constant';

const initialState = {
  cardData: [],
};

export default function cardItems(initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cardData: action.data,
      };
      break;
    default:
      return state;
  }
}
