import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Help.styled";

const Education = () => {
    return (
        <Wrapper data-testid="education">
            <EduIntro>Riwayat Pendidikan</EduIntro>
            { eduBg.map(({title, desc}) => (
                <EduList key={title}>
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                </EduList>
            ))}
        </Wrapper>
    )
}

const eduBg = [
    {
        title: "Pelatihan Junior Web Developer",
        desc: "Balai Latihan Ketenagakerjaan (BLK) Bekasi"
    },
    {
        title: "Teknik Informatika",
        desc: "STMIK PASIM SUKABUMI, JAWA BARAT"
    }
];

export default Education;