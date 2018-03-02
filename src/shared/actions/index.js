export const HELLO_WORLD = 'HELLO_WORLD'
export const RESET = 'RESET'

// export const helloWorld = () => {
//   return {
//     type: HELLO_WORLD
//   }
// }

export const reset = () => {
  return {
    type: RESET
  }
}

export const ChangeTextRedux = hello => ({
  type: 'COMPONENT_TWO_REDUX',
  hello
})

export const FormPostRedux = third => ({
  type: 'COMPONENT_THREE_REDUX',
  third
})

export const returnedPostData = options => ({
  type: 'RETURNED_POST_DATA',
  options
})
