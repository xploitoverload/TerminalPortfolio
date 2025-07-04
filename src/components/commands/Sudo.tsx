import { useContext, useEffect } from "react";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Sudo: React.FC = () => {
    const { history, rerender } = useContext(termContext);

    const currentCommand = history[0]?.trim().toLowerCase().split(" ") || [];

    useEffect(() => {
        if (rerender && currentCommand[0] === "sudo") {
            // Rickroll in new tab
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        }
    }, [rerender, currentCommand]);

    return (
        <Wrapper>
            <span>
                🔒 Access denied: Oh no you're not admin...
            </span>
        </Wrapper>
    );
};

export default Sudo;
