// src/components/commands/Whois.tsx
import React, { useState, useEffect } from 'react';
import TypingEffect from '../TypingEffect'; // Path: from commands/ to components/
import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled"; // Path: from commands/ to styles/

const Whois: React.FC = () => {
    const [showFirstParagraph, setShowFirstParagraph] = useState(false);
    const [firstParagraphTyped, setFirstParagraphTyped] = useState(false);

    const [showSecondParagraph, setShowSecondParagraph] = useState(false); // Corrected typo here previously
    const [secondParagraphTyped, setSecondParagraphTyped] = useState(false);

    const [showThirdParagraph, setShowThirdParagraph] = useState(false); // Corrected typo here previously
    const [thirdParagraphTyped, setThirdParagraphTyped] = useState(false);

    useEffect(() => {
        // console.log("Whois: Component mounted. Setting showFirstParagraph to true."); // DEBUG LOG
        setShowFirstParagraph(true);
    }, []);

    // Optional: Add useEffects to track state changes for debugging
    // useEffect(() => {
    //     console.log("Whois State: firstParagraphTyped =", firstParagraphTyped, "showSecondParagraph =", showSecondParagraph);
    // }, [firstParagraphTyped, showSecondParagraph]);
    // useEffect(() => {
    //     console.log("Whois State: secondParagraphTyped =", secondParagraphTyped, "showThirdParagraph =", showThirdParagraph);
    // }, [secondParagraphTyped, showThirdParagraph]);
    // useEffect(() => {
    //     console.log("Whois State: thirdParagraphTyped =", thirdParagraphTyped);
    // }, [thirdParagraphTyped]);


    return (
        <AboutWrapper data-testid="whois">
            {/* First Paragraph */}
            <p>
                {!firstParagraphTyped ? ( // If not yet typed, show the typing effect
                    showFirstParagraph && (
                        <TypingEffect
                            text="Hi, my name is KALPESH SOLANKI! You can also call me Xploitoverload."
                            typingSpeed={1} // Maximum speed for rapid reveal
                            onTypingComplete={() => {
                                // console.log("Whois Callback: First paragraph typing complete. Attempting to update state."); // DEBUG LOG
                                setFirstParagraphTyped(true);
                                setShowSecondParagraph(true);
                                // console.log("Whois Callback: State update calls made for first paragraph."); // DEBUG LOG
                            }}
                        />
                    )
                ) : ( // Once typed, display the fully formatted JSX
                    <>
                        Hi, my name is <HighlightSpan>KALPESH SOLANKI</HighlightSpan>! You can
                        also call me Xploitoverload.
                    </>
                )}
            </p>

            {/* Second Paragraph */}
            <p>
                {!secondParagraphTyped ? ( // If not yet typed, show the typing effect
                    showSecondParagraph && ( // This must be true for TypingEffect to render
                        <TypingEffect
                            text="I'm a security researcher and hacker."
                            typingSpeed={1} // Maximum speed
                            delay={200} // Short pause before starting the next paragraph
                            onTypingComplete={() => {
                                // console.log("Whois Callback: Second paragraph typing complete. Attempting to update state."); // DEBUG LOG
                                setSecondParagraphTyped(true);
                                setShowThirdParagraph(true);
                                // console.log("Whois Callback: State update calls made for second paragraph."); // DEBUG LOG
                            }}
                        />
                    )
                ) : ( // Once typed, display the fully formatted JSX
                    <>
                        I'm <HighlightAlt>a security researcher</HighlightAlt> and{" "}
                        <HighlightAlt>hacker</HighlightAlt>.
                    </>
                )}
            </p>

            {/* Third Paragraph - This one includes newlines */}
            <p>
                {!thirdParagraphTyped ? ( // If not yet typed, show the typing effect
                    showThirdParagraph && ( // This must be true for TypingEffect to render
                        <TypingEffect
                            text={"I love to build and hack stuff.\nTo see my projects please type \"projects\".\nTo learn more about me with a GUI portfolio, please type \"gui\"."}
                            typingSpeed={1} // Maximum speed
                            delay={200} // Short pause before starting
                            onTypingComplete={() => {
                                // console.log("Whois Callback: Third paragraph typing complete. Attempting to update state."); // DEBUG LOG
                                setThirdParagraphTyped(true);
                                // console.log("Whois Callback: State update calls made for third paragraph."); // DEBUG LOG
                            }}
                        />
                    )
                ) : ( // Once typed, display the fully formatted JSX with <br />
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
