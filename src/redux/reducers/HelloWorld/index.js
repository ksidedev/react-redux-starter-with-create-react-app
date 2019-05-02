export const initialState = {
  helloWorldDefaultText: { text: 'Text One!', value: 'Text Two' },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HELLO_WORLD_DEFAULT_TEXT':
      return {
        ...state,
        helloWorldDefaultText: {
          text: action.text,
          value: state.helloWorldDefaultText.value,
        },
      };
    case 'HELLO_WORLD_DEFAULT_VALUE':
      return {
        ...state,
        helloWorldDefaultText: {
          text: state.helloWorldDefaultText.text,
          value: action.value,
        },
      };
    default:
      return state;
  }
};
