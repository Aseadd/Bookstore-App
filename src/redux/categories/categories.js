const CHECK_STATUS = 'CHECK-STATUS';

const checkStatus = (payload) => {
  return {
    type: CHECK - STATUS,
  };
};

const categories = (state = [], action) => {
  switch (action.type) {
    case CHECK - STATUS:
      return [...state, action.payload];
  }
};

exports = { checkStatus };
export default categories;
