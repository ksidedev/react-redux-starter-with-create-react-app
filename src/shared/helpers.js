import fetch from 'unfetch'

import { endpoints } from '../constants'
/* eslint-disable no-unused-vars */
let otherEndPointUrl = ''
let sharedPlanOptionsUrl = ''
/* eslint-enable no-unused-vars */


export function getCreateAircraftData(dispatch, payload) {
  console.log('payload: ', payload)
  return fetch(endpoints.postedDataEndpoint, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        spiderSN: payload.AircraftSerialNum,
        tripId: payload.AircraftStartPointData.tripId,
        latitude: payload.AircraftStartPointData.latitude,
        longitude: payload.AircraftStartPointData.longitude,
        pointType: payload.SelectedSendPoint
    })
  })
    .then(r => r.json())
    .then(data => {
      if (data) {
        //dispatch(AircraftData(data))
        return Promise.resolve()
      }

      return Promise.reject()
    })
    .catch(error => {
      console.error(error)
      return null
    })
}
