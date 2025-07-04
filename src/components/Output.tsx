import Whois from "./commands/Whois";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import Secret from "./commands/Secret";
import Sudo from "./commands/Sudo";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";
import Flag from "./commands/Flag";
import AutoType from "./AutoType";

type Props = {
    index: number;
    cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
    const { arg } = useContext(termContext);

    const specialCmds = ["projects", "socials", "themes", "echo"];

    // return 'Usage: <cmd>' if command arg is not valid
    // eg: about tt
    if (!specialCmds.includes(cmd) && arg.length > 0)
        return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

    return (
        <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
            {
                {
                    whois: <AutoType><Whois /></AutoType>,
                    secret:<Secret />,
                    clear: <Clear />,
                    echo: <Echo />,
                    education: <Education />,
                    email: <Email />,
                    gui: <Gui />,
                    help: <Help />,
                    history: <History />,
                    projects: <Projects />,
                    pwd: <GeneralOutput>/home/anonymous</GeneralOutput>,
                    socials: <Socials />,
                    themes: <Themes />,
                    welcome: <Welcome />,
                    whoami: <GeneralOutput>anonymous.visitor</GeneralOutput>,
                    sudo:<Sudo/>,
                    flag: <Flag />,
                }[cmd]
            }
        </OutputContainer>
    );
};

export default Output;
