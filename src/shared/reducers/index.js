export const initialState = {
  AircraftSerialNum: {serialNumber: ''},
  SelectedSendPoint: {name: "Select Point Type"},
  submitPoint: false,
  AircraftStartPointData:{}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AIRCRAFT_SERIAL_NUM':
      return Object.assign({}, state, {
        AircraftSerialNum: action.serialnum
      })

    case 'AIRCRAFT_START_POINT_DATA':
      return Object.assign({}, state, {
        AircraftStartPointData: action.start
      })

    case 'SELECTED_SEND_POINT':
      return Object.assign({}, state, {
        SelectedSendPoint: action.send
      })
    case 'SUBMIT_POINT':
      return Object.assign({}, state, {
        SubmitPoint: action.point
      })
    default:
      return state
  }
}
