export const initialState = {
  ChangeTextRedux: 'Hello, World!',
  FormPostRedux: '',
  theReturnedPostData: {},
  GetData: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'COMPONENT_TWO_REDUX':
      return Object.assign({}, state, {
        ChangeTextRedux: action.hello
      })
    case 'COMPONENT_THREE_REDUX':
      return Object.assign({}, state, {
        FormPostRedux: action.third
      })
    case 'RETURNED_POST_DATA':
      return Object.assign({}, state, {
        theReturnedPostData: action.options
      })
    case 'SET_DUMMY_PLAN_OPTIONS':
      return Object.assign({}, state, {
        GetData: action.options
      })
    default:
      return state
  }
}
