import React, { useState, useEffect } from "react";
import HandPhone from "./HandPhone";
import FakePhoneApp from "./FakePhoneApp";

const screenTexts = {
    phoneHome:
        "   On the home screen, you have quick access to a widget that provides an overview of your schedule and important updates.",
    appMain:
        "This app allows students to view their schedules, track upcoming classes, and manage their academic activities efficiently.",
    appNotifications:
        "Stay informed with real-time notifications about schedule changes, important announcements, and upcoming deadlines.",
    appInfo: "This mock app demonstrates UI interactions and animations.",
};

export default function ScheduleInfo() {
    const [currentScreen, setCurrentScreen] = useState("phoneHome");
    const [typedText, setTypedText] = useState("");
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Перепечатывание текста с исправлением бага
    // Перепечатывание текста без пропущенных букв
    useEffect(() => {
        let isCancelled = false;
        const targetText = screenTexts[currentScreen] || "";
        setTypedText(""); // Сброс перед началом печати
        let i = 0;
        console.log(i);
        const typeNextChar = () => {
            if (isCancelled) return;
            if (i < targetText.length) {
                setTypedText((prev) => prev + targetText[i - 1]);
                i++;
                setTimeout(typeNextChar, 4);
            }
        };
        console.log(targetText[i - 1]);

        typeNextChar();

        return () => {
            isCancelled = true;
        };
    }, [currentScreen]);

    // Обновляем позицию кастомного курсора
    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updateCursor);
        return () => window.removeEventListener("mousemove", updateCursor);
    }, []);

    return (
        <div className="mx-auto max-w-screen-lg  w-full">
            <div className="relative w-full bg-white text-black flex items-center justify-center py-16">
                {/* Кастомный курсор (серый круг) */}
                {isHovering && (
                    <div
                        className="pointer-events-none fixed w-8 h-8 bg-gray-300 opacity-50 rounded-full z-40"
                        style={{
                            left: `${cursorPos.x - 16}px`,
                            top: `${cursorPos.y - 16}px`,
                            transition: "transform 0.1s ease-out",
                        }}
                    />
                )}

                {/* Левая колонка с заголовками */}
                <div className="max-w-md px-8">
                    <h1 className="text-6xl font-bold mb-4">Schedule</h1>
                    <p className="text-lg mb-6 leading-relaxed">{typedText}</p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition-colors">
                        <span className="text-lg">explore</span>
                    </button>
                </div>

                {/* Справа - телефон */}
                <div
                    className="ml-auto mr-8 cursor-none" // Убираем стандартный курсор
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <HandPhone width={300} height={600} type="phone">
                        <FakePhoneApp
                            onScreenChange={(newScreen) =>
                                setCurrentScreen(newScreen)
                            }
                        />
                    </HandPhone>
                </div>
            </div>{" "}
        </div>
    );
}
