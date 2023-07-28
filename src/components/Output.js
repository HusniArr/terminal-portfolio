import About  from "./commands/About";
import Education from "./commands/Education";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import Projects from "./commands/Projects";
import Help from "./commands/Help";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { useContext } from "react";
import { termContext } from "./Terminal";

const Output = ({props}) => {
    const { arg } = useContext(termContext);

    const specialCmds = ["projects", "socials", "themes", "echo"];

    if(!specialCmds.includes(props.cmd) && arg.length > 0){
        return <UsageDiv data-testid="usage-output">Usage : { props.cmd }</UsageDiv>;
    }

    return (
        <OutputContainer data-testid={props.index === 0 ? "latest-output" : null}>
            {
                {
                    about: <About/>,
                    education: <Education/>,
                    help: <Help/>,
                    projects: <Projects/>,
                    welcome: <Welcome/>
                }[props.cmd]
            }
        </OutputContainer>
    );
}

export default Output;