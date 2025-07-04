import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";
import Type from "../Type";
import Sequence from "../Sequence";

const Whois: React.FC = () => {
    return (
        <AboutWrapper data-testid="Whois">
            {/* line‑by‑line automatic typewriter */}
            <p>
                <Sequence speed={25} gap={350}>
                    <Type>Hi, my name is </Type>
                    {/* highlight OUTSIDE the typewriter so tags stay intact */}
                    <HighlightSpan>KALPESH SOLANKI</HighlightSpan>
                    <Type>! You can also call me Xploitoverload.</Type>
            </p>
            <p>
                <Type>
                    I'm <HighlightAlt>a security researcher</HighlightAlt> and{" "}
                    <HighlightAlt>hacker</HighlightAlt>.
                </Type>
            </p>
            <p>
                <Type>I love to build and hack stuff.</Type>
                <Type>To see my projects please type "projects".</Type>
                <Type>
                    To learn more about me with a GUI portfolio, please type "gui".
                </Type>
            </p>
        </Sequence>
    </AboutWrapper >
  );
};

export default Whois;
