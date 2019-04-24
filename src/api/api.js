import fetch from 'unfetch';
import { ENDPOINTS } from './apiConstants';

export function getData() {
  return fetch(ENDPOINTS.GET)
    .then(r => r.json())
    .then((data) => {
      if (data) {
        return Promise.resolve();
      }
      return Promise.reject();
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}


export function postData() {
  return fetch(ENDPOINTS.POST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  })
    .then(r => r.json())
    .then((data) => {
      if (data) {
        console.log(data);
      }
      return Promise.reject();
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function putData() {
  return fetch(ENDPOINTS.PUT, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  })
    .then(r => r.json())
    .then((data) => {
      if (data) {
        console.log(data);
      }
      return Promise.reject();
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}
