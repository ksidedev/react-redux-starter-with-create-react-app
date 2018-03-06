/* eslint no-console: ["error", { allow: ["error"] }] */
import fetch from 'unfetch'
import { returnedPostData, setGetData } from './actions'

import { endpoints } from '../constants'
/* eslint-disable no-unused-vars */
let otherEndPointUrl = ''
let sharedPlanOptionsUrl = ''
/* eslint-enable no-unused-vars */

if (process.env.NODE_ENV === 'production') {
  sharedPlanOptionsUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments'
  otherEndPointUrl = 'https://reqres.in/api/users'
} else {
  sharedPlanOptionsUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments'
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

// Get data from JSON and pass to Redux

export function getGetData(dispatch, second) {
  return fetch(sharedPlanOptionsUrl)
    .then(r => r.json())
    .then(data => {
      if (data) {
        dispatch(setGetData(data))
        return Promise.resolve()
      }

      return Promise.reject()
    })
    .catch(error => {
      console.error(error)
      return null
    })
}
