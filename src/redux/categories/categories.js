const CHECK_STATUS = 'CHECK-STATUS';

const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'Under Construction',
});

const categories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, action.payload];
    default:
      return state;
  }
};

exports = { checkStatus };
export default categories;
