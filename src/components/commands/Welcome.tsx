import React, { useState, useEffect } from 'react';
import TypingEffect from '../TypingEffect';
import {
    Cmd,
    HeroContainer,
    Link,
    PreImg,
    PreName,
    PreNameMobile,
    PreWrapper,
    Seperator,
} from "../styles/Welcome.styled";
import styled from 'styled-components';

// Create a red version of the components
const RedPreName = styled(PreName)`
  color: #ff5555;
`;

const RedPreNameMobile = styled(PreNameMobile)`
  color: #ff5555;
`;

const RedPreImg = styled(PreImg)`
  color: #ff5555;
`;

const RedText = styled.span`
  color: #ff5555;
`;

const Welcome: React.FC = () => {
    const [showWelcomeText, setShowWelcomeText] = useState(false);
    const [showAsciiArt, setShowAsciiArt] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const asciiArt = `            ██╗  ██╗██████╗ ██╗      ██████╗ ██╗████████╗          
            ╚██╗██╔╝██╔══██╗██║     ██╔═══██╗██║╚══██╔══╝          
             ╚███╔╝ ██████╔╝██║     ██║   ██║██║   ██║             
             ██╔██╗ ██╔═══╝ ██║     ██║   ██║██║   ██║             
            ██╔╝ ██╗██║     ███████╗╚██████╔╝██║   ██║             
            ╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝ ╚═╝   ╚═╝             
                                                                   
 ██████╗ ██╗   ██╗███████╗██████╗ ██╗      ██████╗  █████╗ ██████╗ 
██╔═══██╗██║   ██║██╔════╝██╔══██╗██║     ██╔═══██╗██╔══██╗██╔══██╗
██║   ██║██║   ██║█████╗  ██████╔╝██║     ██║   ██║███████║██║  ██║
██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗██║     ██║   ██║██╔══██║██║  ██║
╚██████╔╝ ╚████╔╝ ███████╗██║  ██║███████╗╚██████╔╝██║  ██║██████╔╝
 ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ `;

    const illustrationArt = `
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `;

    useEffect(() => {
        const timer1 = setTimeout(() => setShowAsciiArt(true), 500);
        const timer2 = setTimeout(() => setShowWelcomeText(true), 3500);
        const timer3 = setTimeout(() => setShowContent(true), 4000);
        
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <HeroContainer data-testid="welcome">
            <div className="info-section">
                <RedPreName>
                    {showAsciiArt ? (
                        <TypingEffect 
                            text={asciiArt} 
                            typingSpeed={1}
                            delay={0}
                        />
                    ) : null}
                </RedPreName>
                <PreWrapper>
                    <RedPreNameMobile>
                        {showAsciiArt ? (
                            <TypingEffect 
                                text={asciiArt} 
                                typingSpeed={1}
                                delay={0}
                            />
                        ) : null}
                    </RedPreNameMobile>
                </PreWrapper>
                
                {showWelcomeText && (
                    <>
                        <RedText>
                            <TypingEffect 
                                text="Welcome mate, nice to see you here." 
                                typingSpeed={20}
                                delay={100}
                            />
                        </RedText>
                        <Seperator>----</Seperator>
                        <RedText>
                            <TypingEffect 
                                text={`As you saw on the banner, I'm xploitoverload. I'm a security researcher, hacker, malware analyst/dev, CTF player, embedded engineer, electronics researcher...\n\nAh!! It's about time. I need to go save the world, so I'll leave you here. Feel free to play around.`} 
                                typingSpeed={1}
                                delay={200}
                            />
                        </RedText>
                        <Seperator>----</Seperator>
                        <RedText>
                            <TypingEffect 
                                text='For a list of available commands, type "'
                                typingSpeed={20}
                                delay={100}
                            />
                            <Cmd>help</Cmd>
                            <TypingEffect 
                                text='".'
                                typingSpeed={20}
                                delay={0}
                            />
                        </RedText>
                    </>
                )}
            </div>
            
            <div className="illu-section">
                {showContent && (
                    <RedPreImg>
                        {illustrationArt}
                    </RedPreImg>
                )}
            </div>
        </HeroContainer>
    );
};

export default Welcome;
