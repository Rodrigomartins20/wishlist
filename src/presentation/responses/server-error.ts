const ServerError = (error: Error) => ({
  statusCode: 500,
  body: {
    message: 'oops, there was an error in our side',
    error: error.message
  }
})

export default ServerError