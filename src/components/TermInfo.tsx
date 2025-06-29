import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
    return (
        <Wrapper>
            <User>anonymous</User>@<WebsiteName>xploitoverload.me</WebsiteName>:~$
        </Wrapper>
    );
};

export default TermInfo;
