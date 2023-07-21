import { Cmd, HeroContainer, Link, PreImg, PreName, PreNameMobile, PreWrapper, Seperator } from "../styles/Welcome.styled";


const Welcome = () => {
    return (
        <HeroContainer data-testid="welcome">
            <div className="info-section">
                <PreName>
                    {
                    `
                    __________________________________________________          
                    /\              _____           ___  ____        /\
                   |  |  |__| |  | |____  |\  | |   |  \ |___ |   | |  |
                   /^^^\ |  | |__|  ____| | \_| |   |__/ |___ \___/ /^^^\
                   .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
                    `
                    }
                </PreName>
                <PreWrapper>
                    {
                    ` __________________________________________________          
                     /\              _____           ___  ____        /\
                    |  |  |__| |  | |____  |\  | |   |  \ |___ |   | |  |
                    /^^^\ |  | |__|  ____| | \_| |   |__/ |___ \___/ /^^^\
                    .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
                    `
                    }
                </PreWrapper>
                <div>Welcome to my terminal portfolio(1.0)</div>
                <Seperator>----</Seperator>
                <div>
                    This project's source code can be found in this projects{" "}
                    <Link href="https://github.com/husniarr/terminal-portfolio">
                        Github repo
                    </Link>
                    .
                </div>
                <Seperator >----</Seperator>
                <div>For a list of available commands, type `<Cmd>help</Cmd>`</div>
            </div>
            <div className="illu-section">
                <PreImg>
                    {
                        `
                        ,##,,eew,
                    ,###############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T   ##)
                     :b''@@b^}     ###)
                  ,^     \` 'b 3-   ###)
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
                        `
                    }
                </PreImg>
            </div>
        </HeroContainer>
    );
}

export default Welcome;