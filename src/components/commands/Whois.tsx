// src/components/About.tsx (or wherever your About component is)
import React, { useState, useEffect } from 'react';
import TypingEffect from '../TypingEffect'; // Adjust path as needed
import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const Whois: React.FC = () => {
    const [showFirstParagraph, setShowFirstParagraph] = useState(false);
    const [showSecondParagraph, setShowSecondParagraph] = useState(false);
    const [showThirdParagraph, setShowThirdParagraph] = useState(false);

    useEffect(() => {
        // Start showing the first paragraph after a short delay or immediately
        setShowFirstParagraph(true);
    }, []); // Run once on mount

    return (
        <AboutWrapper data-testid="whois">
            <p>
                {showFirstParagraph && (
                    <TypingEffect
                        text="Hi, my name is KALPESH SOLANKI! You can also call me Xploitoverload."
                        typingSpeed={120} // Adjust speed as desired
                        onTypingComplete={() => setShowSecondParagraph(true)}
                    />
                )}
            </p>
            <p>
                {showSecondParagraph && (
                    <TypingEffect
                        text="I'm a security researcher and hacker."
                        typingSpeed={120}
                        delay={50} // Short delay after first paragraph finishes
                        onTypingComplete={() => setShowThirdParagraph(true)}
                    />
                )}
            </p>
            <p>
                {showThirdParagraph && (
                    <TypingEffect
                        text="I love to build and hack stuff. To see my projects please type projects. To learn more about me with a GUI portfolio, please type gui."
                        typingSpeed={120}
                        delay={50} // Short delay after second paragraph finishes
                    />
                )}
            </p>
        </AboutWrapper>
    );
};

export default Whois;