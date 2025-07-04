// src/components/About.tsx (or wherever you placed it)
import React, { useState, useEffect } from 'react';
import TypingEffect from '../TypingEffect'; // !! Verify this path is correct !!
import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const Whois: React.FC = () => {
    // State to control visibility and completion of each paragraph's typing effect
    const [showFirstParagraph, setShowFirstParagraph] = useState(false);
    const [firstParagraphTyped, setFirstParagraphTyped] = useState(false);

    const [showSecondParagraph, setShowSecondParagraph] = useState(false);
    const [secondParagraphTyped, setSecondParagraphTyped] = useState(false);

    const [showThirdParagraph, setShowThirdParagraph] = useState(false);
    const [thirdParagraphTyped, setThirdParagraphTyped] = useState(false);

    // Effect to kick off the first paragraph's typing when the component mounts
    useEffect(() => {
        console.log("About component mounted, setting showFirstParagraph to true."); // DEBUG
        setShowFirstParagraph(true);
    }, []); // Runs only once on component mount


    // You might add useEffects here to log state changes if needed, e.g.:
    // useEffect(() => { console.log('firstParagraphTyped:', firstParagraphTyped); }, [firstParagraphTyped]);
    // useEffect(() => { console.log('showSecondParagraph:', showSecondParagraph); }, [showSecondParagraph]);
    // ... and so on for other states.

    return (
        <AboutWrapper data-testid="whois">
            {/* First Paragraph */}
            <p>
                {!firstParagraphTyped ? ( // If not yet typed, show the typing effect
                    showFirstParagraph && (
                        <TypingEffect
                            text="Hi, my name is KALPESH SOLANKI! You can also call me Xploitoverload."
                            typingSpeed={1} // Maximum speed
                            onTypingComplete={() => {
                                console.log("First paragraph typing complete. Setting firstParagraphTyped to true and showSecondParagraph to true."); // DEBUG
                                setFirstParagraphTyped(true); // Mark as typed
                                setShowSecondParagraph(true); // Trigger next paragraph
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
                    showSecondParagraph && (
                        <TypingEffect
                            text="I'm a security researcher and hacker."
                            typingSpeed={1} // Maximum speed
                            delay={200} // Short pause before starting
                            onTypingComplete={() => {
                                console.log("Second paragraph typing complete. Setting secondParagraphTyped to true and showThirdParagraph to true."); // DEBUG
                                setSecondParagraphTyped(true); // Mark as typed
                                setShowThirdParagraph(true); // Trigger next paragraph
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
                    showThirdParagraph && (
                        <TypingEffect
                            // Text for typing effect (plain string, \n will be literal characters)
                            text={"I love to build and hack stuff.\nTo see my projects please type \"projects\".\nTo learn more about me with a GUI portfolio, please type \"gui\"."}
                            typingSpeed={1} // Maximum speed
                            delay={200} // Short pause before starting
                            onTypingComplete={() => {
                                console.log("Third paragraph typing complete. Setting thirdParagraphTyped to true."); // DEBUG
                                setThirdParagraphTyped(true); // Mark as typed
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