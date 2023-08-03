import { Cmd, HeroContainer, Link, PreImg, PreName, PreNameMobile, PreWrapper, Seperator } from "../styles/Welcome.styled";


const Welcome = () => {
    return (
        <HeroContainer data-testid="welcome">
            <div className="info-section">
                <PreName>
                    {
                    `________________________________________________________________________________________________      
                    / /\ \   | |  | | | |   | | |  ____| | \   | | [*#*]  |  ___ \  |   ____|  \  \     /  /  / /\ \
                   | |__| |  | |__| | | |   | | | |____  |  \  | |  | |   | |   \ | |  |____    \  \   /  /  | |__| |
                  [        ] |  __  | | |   | | |___   | | |\ \| |  | |   | |   | | |   ____|    \  \_/  /  [        ]    
                   | /^^\ |  | |  | | | |___| |  ___|  | | | \ | |  | |   | |___| | |  |____      \  _  /    | /^^\ |
                   | |  | |  | |  | | |_____  | |______| | |  \__|  |_|   |_______| |_______|      \___/     | |  | |
                  .---,,---,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,---,,---.
                    `
                    }
                </PreName>
                <PreWrapper>
                  <PreNameMobile>
                    {
                    `____________________________________________________     
                    / /\ \   | |  | | | |   | | |  ____| | \   | | [*#*]  
                   | |__| |  | |__| | | |   | | | |____  |  \  | |  | |   
                  [        ] |  __  | | |   | | |___   | | |\ \| |  | |     
                   | /^^\ |  | |  | | | |___| |  ___|  | | | \ | |  | |   
                   | |  | |  | |  | | |_____  | |______| | |  \__|  |_|   
                   ______________________________________________________ 
                        |  ___ \  |   ____|  \  \     /  /  / /\ \
                        | |   \ | |  |____    \  \   /  /  | |__| |
                        | |   | | |   ____|    \  \_/  /  [        ]
                        | |___| | |  |____      \  _  /    | /^^\ | 
                        |_______| |_______|      \___/     | |  | | 
                  .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
                    `
                    }
                    
                  </PreNameMobile>
                </PreWrapper>
                <div>Welcome to my terminal portfolio</div>
                <Seperator>----</Seperator>
                <div>
                    You can see all projects in 
                    <Link href="https://github.com/husniarr">
                        My Github
                    </Link>
                    , Thank you very much for visiting in this site.
                </div>
                <Seperator >----</Seperator>
                <div>For a list of available commands, type `<Cmd>help</Cmd>`</div>
            </div>
            <div className="illu-section">
                <PreImg>
                    {
                        `
                      ,wE#R,,#ewR,
                    ,#####)(######C
                  a###############@##
                7######^^7W7^^@######
                 @#@b\`   V   '^/@#@
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ~~~^~~~g,@,*
                    p||\`~~'.(*)
                  (*) ^Wp  ,#T   (*)
                (*)  :b''@@b^}    (*)
                (*),^     \` 'b 3-   (*)
              .<\` 'p   ^v   #   b  \>.
            {      }                {    }
            C      3 * @    @  \`
           '            ^@##b     ($    '
        
           `}
                </PreImg>
            </div>
        </HeroContainer>
    );
}

export default Welcome;