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
        <div style={{ marginBottom: "3px" }}>
          <Type>Hi, my name is </Type>
          <HighlightSpan>KALPESH SOLANKI</HighlightSpan>
          <Type>! You can also call me Xploitoverload.</Type>
        </div>

        <div style={{ marginBottom: "5px" }}>
          <Type>I'm </Type>
          <HighlightAlt>a security researcher</HighlightAlt>
          <Type> and </Type>
          <HighlightAlt>hacker</HighlightAlt>
          <Type>.</Type>
        </div>

        <div style={{ marginBottom: "3px" }}>
          <Type>I love to build and hack stuff.</Type>
          <br></br>
        </div>

        <div style={{ marginBottom: "3px" }}>
          <Type>To see my projects please type "projects".</Type>
          <br></br>
        </div>

        <div style={{ marginBottom: "4px" }}>
          <Type>
            To learn more about me with a GUI portfolio, please type "gui".
          </Type>
        </div>
      </Sequence>
    </AboutWrapper>
  );
};

export default Whois;
