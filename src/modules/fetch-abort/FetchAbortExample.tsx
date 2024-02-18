import Description from '../../components/Description'
import FetchButton from '../../components/FetchButton'
import { APIRequestWithAbort, abortRequestHandler } from '../../helpers/abortAPIHandler'
import mockAPI from '../../mock-api/mockAPI'

const { title, contents } = {
  title: 'Fetch API abort example',
  contents: [
    'Fetch api with 5 second delay, should abort the api call when new api is triggere',
    'When unmount any existing api call should be aborted',
  ],
}

const FetchAbortExample: React.FC = () => {
  const apiRequest: APIRequestWithAbort<Response> = (latestSignal) =>
    mockAPI({
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

export default FetchAbortExample
