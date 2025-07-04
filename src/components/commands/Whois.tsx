// src/components/commands/Whois.tsx
import React, { useState, useEffect } from 'react';
import TypingEffect from '../TypingEffect';
import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const Whois: React.FC = () => {
    const [showFirstParagraph, setShowFirstParagraph] = useState(false);
    const [firstParagraphTyped, setFirstParagraphTyped] = useState(false);

    const [showSecondParagraph, setShowSecondParagraph = useState(false);
    const [secondParagraphTyped, setSecondParagraphTyped] = useState(false);

    const [showThirdParagraph, setShowThirdParagraph] = useState(false);
    const [thirdParagraphTyped, setThirdParagraphTyped] = useState(false);

    useEffect(() => {
        console.log("Whois: Component mounted. Setting showFirstParagraph to true."); // <--- LOG
        setShowFirstParagraph(true);
    }, []);

    // Add useEffects to track state changes
    useEffect(() => {
        console.log("Whois State: firstParagraphTyped =", firstParagraphTyped, "showSecondParagraph =", showSecondParagraph); // <--- LOG
    }, [firstParagraphTyped, showSecondParagraph]);

    useEffect(() => {
        console.log("Whois State: secondParagraphTyped =", secondParagraphTyped, "showThirdParagraph =", showThirdParagraph); // <--- LOG
    }, [secondParagraphTyped, showThirdParagraph]);

    useEffect(() => {
        console.log("Whois State: thirdParagraphTyped =", thirdParagraphTyped); // <--- LOG
    }, [thirdParagraphTyped]);


    return (
        <AboutWrapper data-testid="whois">
            {/* First Paragraph */}
            <p>
                {!firstParagraphTyped ? (
                    showFirstParagraph && (
                        <TypingEffect
                            text="Hi, my name is KALPESH SOLANKI! You can also call me Xploitoverload."
                            typingSpeed={1}
                            onTypingComplete={() => {
                                console.log("Whois Callback: First paragraph typing complete. Attempting to update state."); // <--- LOG
                                setFirstParagraphTyped(true);
                                setShowSecondParagraph(true);
                                console.log("Whois Callback: State update calls made for first paragraph."); // <--- LOG
                            }}
                        />
                    )
                ) : (
                    <>
                        Hi, my name is <HighlightSpan>KALPESH SOLANKI</HighlightSpan>! You can
                        also call me Xploitoverload.
                    </>
                )}
            </p>

            {/* Second Paragraph */}
            <p>
                {!secondParagraphTyped ? (
                    showSecondParagraph && ( // This must be true for TypingEffect to render
                        <TypingEffect
                            text="I'm a security researcher and hacker."
                            typingSpeed={1}
                            delay={200}
                            onTypingComplete={() => {
                                console.log("Whois Callback: Second paragraph typing complete. Attempting to update state."); // <--- LOG
                                setSecondParagraphTyped(true);
                                setShowThirdParagraph(true);
                                console.log("Whois Callback: State update calls made for second paragraph."); // <--- LOG
                            }}
                        />
                    )
                ) : (
                    <>
                        I'm <HighlightAlt>a security researcher</HighlightAlt> and{" "}
                        <HighlightAlt>hacker</HighlightAlt>.
                    </>
                )}
            </p>

            {/* Third Paragraph */}
            <p>
                {!thirdParagraphTyped ? (
                    showThirdParagraph && ( // This must be true for TypingEffect to render
                        <TypingEffect
                            text={"I love to build and hack stuff.\nTo see my projects please type \"projects\".\nTo learn more about me with a GUI portfolio, please type \"gui\"."}
                            typingSpeed={1}
                            delay={200}
                            onTypingComplete={() => {
                                console.log("Whois Callback: Third paragraph typing complete. Attempting to update state."); // <--- LOG
                                setThirdParagraphTyped(true);
                                console.log("Whois Callback: State update calls made for third paragraph."); // <--- LOG
                            }}
                        />
                    )
                ) : (
                    <>
                        I love to build and hack stuff. <br />
                        To see my projects please type "projects". <br />
                        To learn more about me with a GUI portfolio, please type "gui".
                    </>
                )}
            </p>
        </AboutWrapper>
    );
};

export default Whois;
