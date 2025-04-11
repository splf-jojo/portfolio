import React from "react";
import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiAngular,
    SiTailwindcss,
    SiNodedotjs,
    SiSpring,
    SiDotnet,
    SiDjango,
    SiGit,
    SiDocker,
    SiFigma,
    SiMongodb,
    SiPostgresql,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

// Пример секций с технологиями
const techSections = [
    {
        stepNumber: "01",
        title: "Front-End Stack",
        techs: ["TypeScript", "React", "Next.js", "Angular", "Tailwind CSS"],
    },
    {
        stepNumber: "02",
        title: "Back-End Stack",
        techs: ["Node.js", "Spring", "Asp.net", "Django"],
    },
    {
        stepNumber: "03",
        title: "Tools & Others",
        techs: ["Git", "Docker", "Figma", "bash"],
    },
    {
        stepNumber: "04",
        title: "Databases",
        techs: ["MongoDB", "PostgreSQL"],
    },
];

// Объект с настройками стилей для каждой технологии (для кнопки)
const techStyles = {
    TypeScript: { backgroundColor: "#fff", color: "#2f74c0" },
    React: {
        backgroundColor: "#fff",
        color: "#61DAFB",
    },
    "Next.js": { backgroundColor: "#fff", color: "#000" },
    Angular: { backgroundColor: "#fff", color: "#DD0031" },
    "Tailwind CSS": { backgroundColor: "#fff", color: "#38B2AC" },
    "Node.js": { backgroundColor: "#fff", color: "#87cf30" },
    Spring: { backgroundColor: "#fff", color: "#6DB33F" },
    "Asp.net": { backgroundColor: "#fff", color: "#512BD4" },
    Django: { backgroundColor: "#fff", color: "#092E20" },
    Git: { backgroundColor: "#fff", color: "#F05032" },
    Docker: { backgroundColor: "#fff", color: "#2496ED" },
    Figma: { backgroundColor: "#fff", color: "#F24E1E" },
    bash: { backgroundColor: "#fff", color: "#4EAA25" },
    MongoDB: { backgroundColor: "#fff", color: "#47A248" },
    // Для PostgreSQL оставляем кнопке стандартный вид, стили заливки будем применять только для иконки
    PostgreSQL: { backgroundColor: "#fff", color: "#336791" },
};

// Объект с иконками для каждой технологии
const techIcons = {
    TypeScript: <SiTypescript />,
    React: <SiReact />,
    "Next.js": <SiNextdotjs />,
    Angular: <SiAngular />,
    "Tailwind CSS": <SiTailwindcss />,
    "Node.js": <SiNodedotjs />,
    Spring: <SiSpring />,
    "Asp.net": <SiDotnet />,
    Django: <SiDjango />,
    Git: <SiGit />,
    Docker: <SiDocker />,
    Figma: <SiFigma />,
    bash: <FaTerminal />,
    MongoDB: <SiMongodb />,
    PostgreSQL: <SiPostgresql />,
};

export default function TechnologiesPage() {
    return (
        <div className="w-full bg-white text-gray-900 px-8 py-10 font-sans">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Левая часть с текстом */}
                <div className="flex-1">
                    <p className="text-7xl font-light leading-tight">
                        Simplify The
                        <br />
                        Process To
                        <br />
                        Show My
                        <br />
                        Tech Skills
                    </p>
                </div>

                {/* Правая часть: «аккордеоны» */}
                <div className="flex-1 space-y-5">
                    {techSections.map((section, idx) => (
                        <TechnologiesSection
                            key={idx}
                            section={section}
                            isLast={idx === techSections.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

/**
 * Компонент одной «секции» (номер + заголовок + плашки).
 */
function TechnologiesSection({ section, isLast }) {
    const { stepNumber, title, techs } = section;

    return (
        <div className={`${isLast ? "" : "border-b border-gray-300"} pb-4`}>
            {/* Верхняя строка (номер + заголовок) */}
            <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-4">
                    {/* Номер шага */}
                    <span className="text-gray-900 font-light text-lg">
                        {stepNumber}
                    </span>
                    {/* Заголовок */}
                    <h3 className="text-2xl font-medium">{title}</h3>
                </div>
            </div>

            {/* Плашки технологий (всегда раскрыты) */}
            <div className="mt-3 flex flex-wrap gap-3">
                {techs.map((tech, i) => {
                    const style = techStyles[tech] || {
                        backgroundColor: "gray",
                        color: "#000",
                    };
                    // Флаг для PostgreSQL, чтобы применить отдельное оформление для иконки
                    const isPostgres = tech === "PostgreSQL";

                    return (
                        <span
                            key={i}
                            style={style}
                            className="flex items-center gap-2 border text-base px-4 py-2 rounded-full hover:opacity-90 transition-colors cursor-default font-bold"
                        >
                            {techIcons[tech] && (
                                <span className="text-xl">
                                    {techIcons[tech]}
                                </span>
                            )}
                            {tech}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
