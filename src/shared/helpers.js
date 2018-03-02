/* eslint no-console: ["error", { allow: ["error"] }] */
import fetch from 'unfetch'
import { returnedPostData } from '../actions'

import { endpoints } from '../constants'
/* eslint-disable no-unused-vars */
let otherEndPointUrl = ''
/* eslint-enable no-unused-vars */

if (process.env.NODE_ENV === 'production') {
  otherEndPointUrl = 'https://reqres.in/api/users'
} else {
  otherEndPointUrl = 'https://reqres.in/api/users'
}

/* ************ */
/* Post Request */
/* ************ */

export function getOtherFakeData(dispatch, payload) {
  return fetch(endpoints.postedDataEndpoint, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      values: {
        name: payload.name,
        movies: payload.movies
      }
    })
  })
    .then(r => r.json())
    .then(data => {
      if (data) {
        dispatch(returnedPostData(data))
        return Promise.resolve()
      }

      return Promise.reject()
    })
    .catch(error => {
      console.error(error)
      return null
    })
}


