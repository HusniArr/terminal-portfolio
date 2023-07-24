import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled"

const TerminalInfo = () => {
  return (
    <Wrapper>
        <User>Guest</User>@<WebsiteName>terminal.husni.dev</WebsiteName>
    </Wrapper>
  )
}

export default TerminalInfo