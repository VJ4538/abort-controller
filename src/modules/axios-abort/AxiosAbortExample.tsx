import Description from '../../components/Description'
import FetchButton from '../../components/FetchButton'
import { APIRequestWithAbort, abortRequestHandler } from '../../helpers/abortAPIHandler'
import axios, { AxiosResponse } from 'axios'

const { title, contents } = {
  title: 'Axios API abort example',
  contents: [
    'Fetch api with 5 second delay, should abort the api call when new api is triggere',
    'When unmount any existing api call should be aborted',
  ],
}

const AxiosAbortExample: React.FC = () => {
  const apiRequest: APIRequestWithAbort<Promise<AxiosResponse<string, any>>> = (latestSignal) =>
    axios.get('https://hub.dummyapis.com/delay?seconds=5', {
      signal: latestSignal,
    })

  const { handleAPIRequest, handleAbort } = abortRequestHandler(apiRequest)
  return (
    <div>
      <Description title={title} contents={contents} />
      <FetchButton handleMockFetch={handleAPIRequest} handleAbort={handleAbort} />
    </div>
  )
}

export default AxiosAbortExample
