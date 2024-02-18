interface MockAPI {
  delay?: number
  signal?: AbortSignal
}

const mockAPI = ({ delay = 5, signal }: MockAPI) =>
  fetch(`https://hub.dummyapis.com/delay?seconds=${delay}`, {
    method: 'GET',
    signal,
  })

export default mockAPI
