// components/experience/data.jsx

// 1) Импортируем нужные вам картинки для карточек.
//    Поменяйте на реальные пути в вашем проекте.
import imgOne from "../../assets/laptop.png";
import imgTwo from "../../assets/cmd2.png";
import imgThree from "../../assets/cmd3.png";
import imgFour from "../../assets/giwl.png";

// 2) Содержимое "окон" (CLI UI)
export const codeContents = {
    1: (
        <div className="p-4 text-gray-200 bg-black rounded-b-md text-sm font-mono">
            <div>Career Details</div>
            <div>Position: Frontend Developer</div>
            <div>Duration: 2023-12-05 – 2024-02-27</div>
            <div>Project: Marketplace for gaming products</div>
            <div>
                Responsibilities: Developed complete website and designed UI/UX
            </div>
            <div>Technologies: React, Figma</div>
        </div>
    ),
    2: (
        <div className="p-4 text-gray-200 bg-black rounded-b-md text-sm font-mono">
            <div>Career Details #2</div>
            <div>Position: Another Dev</div>
            <div>Duration: 2024-03-01 – 2025-01-01</div>
            <div>Project: Some other cool project</div>
            <div>Responsibilities: Full stack dev tasks</div>
            <div>Technologies: Node, React, PostgreSQL</div>
        </div>
    ),
};

// 3) Список "плашек" (обычные карточки)
export const experiences = [
    {
        right: true,
        title: "right",
        year: "2022-2025",
        description: "",
        skills: ["right"],
        // Своя картинка
        image: imgOne,
    },
    {
        title: "College of Astana IT University LLP",
        year: "2022-2025",
        description: "",
        skills: [
            "Node",
            "PostgreSQL",
            "React",
            "Java",
            "Python",
            "Arduino",
            "Flutter",
            "Dart",
        ],
        // Своя картинка
        image: imgOne,
    },
    // Пример двух "code" блоков
    // { styleType: "code", number: "2" },
    // { styleType: "code", number: "1" },
    // Дальше обычные карточки, у каждой – свой image
    {
        title: "Разработка переводчика с жестового языка",
        year: "2023",
        description:
            "Создание системы распознавания жестового языка с использованием машинного обучения. Проект вышел в финал национального конкурса и привлёк внимание инвесторов.",
        skills: [
            "Python",
            "TensorFlow",
            "OpenCV",
            "Machine Learning",
            "React",
            "Flutter",
        ],
        image: imgTwo,
    },
    {
        title: "Публикация статьи в журнале колледжа",
        year: "2023",
        description:
            "Написание и публикация статьи о современных технологиях в IT и программировании в студенческом журнале колледжа.",
        skills: ["Technical Writing", "Research", "Editing"],
        image: imgThree,
    },
    {
        title: "Участие в олимпиаде по программированию",
        year: "2022-2024",
        description:
            "Участие в региональных и национальных олимпиадах по программированию, решение сложных алгоритмических задач.",
        skills: ["C++", "Algorithms", "Data Structures", "Problem Solving"],
        image: imgFour,
    },
    {
        title: "Разработка меню для кофейни",
        year: "2024",
        description:
            "Создание веб-приложения для управления меню кофейни, с интеграцией базы данных PostgreSQL и API.",
        skills: ["React", "PostgreSQL", "Spring Boot", "Java", "REST API"],
        // Можно импортировать ещё одну или использовать любую
        image: imgOne,
    },
];
