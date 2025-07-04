// src/components/commands/Whois.tsx
import React, { useState, useEffect } from 'react';
import TypingEffect from '../TypingEffect';
import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const Whois: React.FC = () => {
    const [visibleParagraphs, setVisibleParagraphs] = useState([false, false, false]);
    const [completedParagraphs, setCompletedParagraphs] = useState([false, false, false]);

    useEffect(() => {
        setVisibleParagraphs([true, false, false]);
    }, []);

    const handleTypingComplete = (index: number) => {
        setCompletedParagraphs(prev => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });

        if (index < 2) {
            setVisibleParagraphs(prev => {
                const updated = [...prev];
                updated[index + 1] = true;
                return updated;
            });
        }
    };

    const paragraphConfigs = [
        {
            text: "Hi, my name is KALPESH SOLANKI! You can also call me Xploitoverload.",
            formatted: (
                <>Hi, my name is <HighlightSpan>KALPESH SOLANKI</HighlightSpan>! You can also call me Xploitoverload.</>
            ),
            speed: 1,
            delay: 0
        },
        {
            text: "I'm a security researcher and hacker.",
            formatted: (
                <>I'm <HighlightAlt>a security researcher</HighlightAlt> and <HighlightAlt>hacker</HighlightAlt>.</>
            ),
            speed: 1,
            delay: 200
        },
        {
            text: "I love to build and hack stuff.\nTo see my projects please type \"projects\".\nTo learn more about me with a GUI portfolio, please type \"gui\".",
            formatted: (
                <>I love to build and hack stuff. <br />To see my projects please type "projects". <br />To learn more about me with a GUI portfolio, please type "gui".</>
            ),
            speed: 1,
            delay: 200
        }
    ];

    return (
        <AboutWrapper data-testid="whois">
            {paragraphConfigs.map((config, index) => (
                <p key={index}>
                    {!completedParagraphs[index] ? (
                        visibleParagraphs[index] && (
                            <TypingEffect
                                text={config.text}
                                typingSpeed={config.speed}
                                delay={config.delay}
                                onTypingComplete={() => handleTypingComplete(index)}
                            />
                        )
                    ) : (
                        config.formatted
                    )}
                </p>
            ))}
        </AboutWrapper>
    );
};

export default Whois;
