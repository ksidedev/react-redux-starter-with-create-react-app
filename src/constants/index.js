const endpoints = {
  postedDataEndpoint: ''
}

if (process.env.NODE_ENV === 'production') {
  endpoints.postedDataEndpoint = 'https://reqres.in/api/register'
} else if (process.env.NODE_ENV === 'test') {
  // mock endpoints for testing
  endpoints.postedDataEndpoint = 'https://reqres.in/api/register'
} else {
  endpoints.postedDataEndpoint = 'https://reqres.in/api/register'
}

export { endpoints }

export const cityExceptions = {
  something: 'here'
}
