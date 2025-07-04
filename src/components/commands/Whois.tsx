import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import Type from "../Type";

const Whois: React.FC = () => {
  return (
    <AboutWrapper data-testid="Whois">
      <p>
        <Type>
          Hi, my name is{" "}
        </Type>
        <HighlightSpan>KALPESH SOLANKI</HighlightSpan>
        <Type>
          ! You can also call me Xploitoverload.
        </Type>
      </p>

      <p>
        <Type>I'm </Type>
        <HighlightAlt>a security researcher</HighlightAlt>
        <Type> and </Type>
        <HighlightAlt>hacker</HighlightAlt>
        <Type>.</Type>
      </p>

      <p>
        <Type>I love to build and hack stuff.</Type>
        <br />
        <Type>To see my projects please type "projects".</Type>
        <br />
        <Type>To learn more about me with a GUI portfolio, please type "gui".</Type>
      </p>
    </AboutWrapper>
  );
};

export default Whois;
