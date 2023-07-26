import { AboutWrapper, HighlightAlt, HighlightSpan} from "../styles/About.styled";

const About = () => {
    return (
        <AboutWrapper data-testid="about">
            <p>
                Hello , perkenalkan nama saya <HighlightSpan>Husni</HighlightSpan>.
            </p>
            <p>
                Saya sebagai <HighlightAlt>Web Developer</HighlightAlt> tinggal di Yogyakarta.
            </p>
            <p>
                Saya tertarik di dunia programing semenjak duduk di bangku kuliah. Belajar programing memang sulit kita harus memulai dari dasar dulu. Sehingga program tersebut bisa dijalankan dengan baik
            </p>
        </AboutWrapper>
    );
};

export default About;