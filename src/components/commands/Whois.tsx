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
            <Sequence speed={25} gap={350}>
                {/* line 1 */}
                <p>
                    <Type>Hi, my name is </Type>
                    <HighlightSpan>KALPESH SOLANKI</HighlightSpan>
                    <Type>! You can also call me Xploitoverload.</Type>
                </p>

                {/* line 2 */}
                <p>
                    <Type>I'm </Type>
                    <HighlightAlt>a security researcher</HighlightAlt>
                    <Type> and </Type>
                    <HighlightAlt>hacker</HighlightAlt>
                    <Type>.</Type>
                </p>


                {/* line 3 */}
                <p>
                    <Type>I love to build and hack stuff.<br></br></Type>


                    {/* line 4 */}

                    <Type>To see my projects please type "projects".<br></br></Type>


                    {/* line 5 */}

                    <Type>
                        To learn more about me with a GUI portfolio, please type "gui".
                    </Type>
                </p>
            </Sequence>
        </AboutWrapper>
    );
};

export default Whois;
