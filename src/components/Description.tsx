interface Props {
  title: string
  contents: string[]
}

const Description: React.FC<Props> = ({ title, contents }) => (
  <div>
    <h1>{title}</h1>
    <ol>
      {contents.map((content, idx) => (
        <li key={idx}>{content}</li>
      ))}
    </ol>
  </div>
)

export default Description
