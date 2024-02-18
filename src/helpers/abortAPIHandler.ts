export type APIRequestWithAbort<T> = (signal: AbortSignal) => Promise<T>

export const abortRequestHandler = <T>(apiRequest: APIRequestWithAbort<T>) => {
  let abortController = new AbortController()

  const handleAPIRequest = async () => {
    abortController.abort('Duplicated api call')

    abortController = new AbortController()
    const latestSignal = abortController.signal

    try {
      console.log('Util Fetching data')
      const response = await apiRequest(latestSignal)

      console.log('Util Result', response)
    } catch (e) {
      console.error('Error:', e)
    }
  }

  const handleAbort = () => {
    abortController.abort()
  }

  return { handleAPIRequest, handleAbort }
}
