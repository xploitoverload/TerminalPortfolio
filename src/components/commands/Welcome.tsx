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

const Welcome: React.FC = () => {
    return (
        <HeroContainer data-testid="welcome">
            <div className="info-section">
                <PreName>
                    {`            ██╗  ██╗██████╗ ██╗      ██████╗ ██╗████████╗          
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
 ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ `}
                </PreName>
                <PreWrapper>
                    <PreNameMobile>
                        {`            ██╗  ██╗██████╗ ██╗      ██████╗ ██╗████████╗          
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
 ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ `}
                    </PreNameMobile>
                </PreWrapper>
                <div>Welcome mate, nice to see you here.</div>
                <Seperator>----</Seperator>
                <div>
                    As you saw on the banner, I'm xploitoverload. I'm a security
                    researcher, hacker, malware analyst/dev, CTF player, embedded engineer, electronics researcher...
                    <br />
                    <br />
                    Ah!! It's about time. I need to go save the world, so I'll
                    leave you here. Feel free to play around.
                </div>
                <Seperator>----</Seperator>
                <div>
                    For a list of available commands, type `<Cmd>help</Cmd>`.
                </div>
            </div>
            <div className="illu-section">
                <PreImg>
                    {`
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
         `}
                </PreImg>
            </div>
        </HeroContainer>
    );
};

export default Welcome;
