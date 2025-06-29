import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
    return (
        <Wrapper data-testid="education">
            <EduIntro>Here is my education background!</EduIntro>
            {eduBg.map(({ title, desc }) => (
                <EduList key={title}>
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                </EduList>
            ))}
        </Wrapper>
    );
};

const eduBg = [
    {
        title: "B.E in Electronics and Communication Engineering",
        desc: "Government Engineering College Rajkot | 2025 - Graduated",
    },
    // {
    //   title: "HND in Computing & System Development",
    //   desc: "Info Myanmar University | 2016 - 2018",
    // },
    // {
    //   title: "IELTS 6.5",
    //   desc: "British Council Myanmar | 2017",
    // },
];

export default Education;
