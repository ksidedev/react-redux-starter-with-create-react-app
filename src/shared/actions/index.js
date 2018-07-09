export const AircraftSerialNum = serialnum => ({
  type: 'AIRCRAFT_SERIAL_NUM',
  serialnum
})

export const AircraftStartPointData = start => ({
  type: 'AIRCRAFT_START_POINT_DATA',
  start
})

export const SelectedSendPoint = send => ({
  type: 'SELECTED_SEND_POINT',
  send
})

export const SubmitPoint = point => ({
  type: 'SUBMIT_POINT',
  point
})
