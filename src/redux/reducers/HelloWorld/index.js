export const initialState = {
  helloWorldDefaultText: 'Hello, World!',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HELLO_WORLD_DEFAULT_TEXT':
      return Object.assign({}, state, {
        helloWorldDefaultText: action.text,
      });
    default:
      return state;
  }
};
