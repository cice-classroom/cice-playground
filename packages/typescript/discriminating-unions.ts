type NetworkLoadingState = {
  state: 'loading'
}

type NetworkFailedState = {
  state: 'failed'
  code: number
}

type NetworkSuccessState = {
  state: 'success'
  response: string
}

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState
const networkState: NetworkState =
  Math.random() > 0.7
    ? Math.random() < 0.3
      ? { state: 'loading' }
      : { response: 'foo', state: 'success' }
    : { state: 'failed', code: 404 }

switch (networkState.state) {
  case 'failed':
    // OK
    networkState.code
    break
  case 'loading':
    // KO
    networkState.code
    break
  case 'success':
    // OK
    networkState.response
    break
}
