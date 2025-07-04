import { useContext, useEffect } from "react";
import {
    checkRedirect,
    getCurrentCmdArry,
    isArgInvalid,
} from "../../utils/funcs";
import {
    ProjectContainer,
    ProjectDesc,
    ProjectsIntro,
    ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
    const { arg, history, rerender } = useContext(termContext);

    /* ===== get current command ===== */
    const currentCommand = getCurrentCmdArry(history);

    /* ===== check current command is redirect ===== */
    useEffect(() => {
        if (checkRedirect(rerender, currentCommand, "projects")) {
            projects.forEach(({ id, url }) => {
                id === parseInt(arg[1]) && window.open(url, "_blank");
            });
        }
    }, [arg, rerender, currentCommand]);

    /* ===== check arg is valid ===== */
    const checkArg = () =>
        isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
            <Usage cmd="projects" />
        ) : null;

    return arg.length > 0 || arg.length > 2 ? (
        checkArg()
    ) : (
        <div data-testid="projects">
            <ProjectsIntro>
                “Talk is cheap. Show me the code”? I got you. <br />
                Here are some of my projects you shouldn't misss
            </ProjectsIntro>
            {projects.map(({ id, title, desc }) => (
                <ProjectContainer key={id}>
                    <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
                    <ProjectDesc>{desc}</ProjectDesc>
                </ProjectContainer>
            ))}
            <Usage cmd="projects" marginY />
        </div>
    );
};
const projects = [
    {
        id: 1,
        title: "",
        desc: "",
        url: "",
    },
    // {
    //     id: 2,
    //     title: "",
    //     desc: "",
    //     url: "",
    // },
    // {
    //     id: 3,
    //     title: "",
    //     desc: "",
    //     url: "",
    // },
    // {
    //     id: 4,
    //     title: "",
    //     desc: "",
    //     url: "",
    // },
];
// const projects = [
//     {
//         id: 1,
//         title: "Black-Hat-Zig",
//         desc: "Zig for malware development & red-teaming.",
//         url: "https://github.com/cx330blake/black-hat-zig",
//     },
//     {
//         id: 2,
//         title: "ZYRA",
//         desc: "ZYRA: Your Runtime Armor. An executable packer built in Zig programming language.",
//         url: "https://github.com/cx330blake/zyra",
//     },
//     {
//         id: 3,
//         title: "Spell-Whisperer",
//         desc: "A prompt injection challenge, from easy to hard.",
//         url: "https://spell-whisperer.cx330.tw",
//     },
//     {
//         id: 4,
//         title: "ZYPE",
//         desc: "ZYPE: Your Payload Encryptor. A shellcode encryptor & obfuscator for Zig.",
//         url: "https://github.com/cx330blake/zype",
//     },
// ];

export default Projects;
