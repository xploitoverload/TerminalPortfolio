// src/components/commands/Whois.tsx
import React, { useState, useEffect } from 'react';
import TypingEffect from '../TypingEffect'; // Path: from commands/ to components/
import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled"; // Path: from commands/ to styles/

const Whois: React.FC = () => {
    // State to control visibility of each paragraph's typing effect
    const [showFirstParagraph, setShowFirstParagraph] = useState(false);
    const [showSecondParagraph, setShowSecondParagraph] = useState(false);
    const [showThirdParagraph, setShowThirdParagraph] = useState(false);

    // NEW STATE: This becomes true only when ALL typing is complete
    const [allTypingComplete, setAllTypingComplete] = useState(false);

    // Effect to kick off the first paragraph's typing when the component mounts
    useEffect(() => {
        // console.log("Whois: Component mounted. Setting showFirstParagraph to true.");
        setShowFirstParagraph(true);
    }, []);

    // Render the full, formatted content once all typing is complete
    if (allTypingComplete) {
        return (
            <AboutWrapper data-testid="whois">
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
    }

    // If typing is not yet complete, render the typing effects sequentially
    return (
        <AboutWrapper data-testid="whois">
            {/* First Paragraph */}
            <p>
                {showFirstParagraph && (
                    <TypingEffect
                        text="Hi, my name is KALPESH SOLANKI! You can also call me Xploitoverload."
                        typingSpeed={1} // Maximum speed
                        onTypingComplete={() => {
                            // console.log("Whois Callback: First paragraph typing complete. Showing second.");
                            setShowSecondParagraph(true);
                        }}
                    />
                )}
            </p>

            {/* Second Paragraph */}
            <p>
                {showSecondParagraph && (
                    <TypingEffect
                        text="I'm a security researcher and hacker."
                        typingSpeed={1}
                        delay={200} // Short pause before starting
                        onTypingComplete={() => {
                            // console.log("Whois Callback: Second paragraph typing complete. Showing third.");
                            setShowThirdParagraph(true);
                        }}
                    />
                )}
            </p>

            {/* Third Paragraph - This one includes newlines */}
            <p>
                {showThirdParagraph && (
                    <TypingEffect
                        text={"I love to build and hack stuff.\nTo see my projects please type \"projects\".\nTo learn more about me with a GUI portfolio, please type \"gui\"."}
                        typingSpeed={1}
                        delay={200} // Short pause before starting
                        onTypingComplete={() => {
                            // console.log("Whois Callback: Third paragraph typing complete. Setting allTypingComplete to true.");
                            setAllTypingComplete(true); // <--- THIS IS THE KEY CHANGE
                        }}
                    />
                )}
            </p>
        </AboutWrapper>
    );
};

export default Whois;
