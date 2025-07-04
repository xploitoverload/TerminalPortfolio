// src/components/commands/Whois.tsx
import React, { useState, useEffect } from 'react';
import TypingEffect from '../TypingEffect';
import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const Whois: React.FC = () => {
    const [paragraphStates, setParagraphStates] = useState([
        { visible: false, completed: false },
        { visible: false, completed: false },
        { visible: false, completed: false }
    ]);

    useEffect(() => {
        // Activate first paragraph on mount
        setParagraphStates(prev => [
            { ...prev[0], visible: true },
            prev[1],
            prev[2]
        ]);
    }, []);

    const handleTypingComplete = (index: number) => {
        setParagraphStates(prev => {
            const updated = [...prev];
            updated[index] = { ...updated[index], completed: true };
            
            // Activate next paragraph if exists
            if (index < updated.length - 1) {
                updated[index + 1] = { ...updated[index + 1], visible: true };
            }
            
            return updated;
        });
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
                    {paragraphStates[index].visible && !paragraphStates[index].completed ? (
                        <TypingEffect
                            text={config.text}
                            typingSpeed={config.speed}
                            delay={config.delay}
                            onTypingComplete={() => handleTypingComplete(index)}
                        />
                    ) : paragraphStates[index].completed ? (
                        config.formatted
                    ) : null}
                </p>
            ))}
        </AboutWrapper>
    );
};

export default Whois;
