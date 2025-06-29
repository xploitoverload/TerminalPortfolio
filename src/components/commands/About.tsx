import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">
            <p>
                Hi, my name is <HighlightSpan>KALPESH SOLANKI</HighlightSpan>! You can
                also call me Xploitoverload.
            </p>
            <p>
                I'm <HighlightAlt>a security researcher</HighlightAlt> and{" "}
                <HighlightAlt>hacker</HighlightAlt>.
            </p>
            <p>
                I love to build and hack stuff. <br />
                To see my projects please type "projects". <br />
                To learn more about me with a GUI portfolio, please type "gui".
            </p>
        </AboutWrapper>
    );
};

export default About;
