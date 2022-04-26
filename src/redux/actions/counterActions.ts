export const types = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
};

export const increment = () => {
  return {
    type: types.increment,
  };
};

export const decrement = () => {
  return {
    type: types.decrement,
  };
};
