interface Props {
  handleMockFetch: () => void
  handleAbort?: () => void
}

const FetchButton: React.FC<Props> = ({ handleMockFetch, handleAbort }) => (
  <div style={{ display: 'flex', gap: '12px' }}>
    <button onClick={handleMockFetch}>Fetch data</button>
    {handleAbort && <button onClick={handleAbort}> Abort request </button>}
  </div>
)

export default FetchButton
