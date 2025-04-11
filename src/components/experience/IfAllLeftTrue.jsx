import React from "react";
import ExperienceCard from "./ExperienceCard";

export default function IfAllLeftTrue({
    experiences,
    positions,
    handleMouseMove,
    openWindows,
    toggleWindow,
    closeWindow,
}) {
    // Левый список (right === false):
    const leftExps = experiences.filter((exp) => exp.right !== true);

    // Правый список (right === true):
    const rightExps = experiences.filter((exp) => exp.right === true);

    return (
        <div className="relative w-full py-32 ">
            <div
                className="absolute top-48 left-1/3 w-1 bg-gray-300 -translate-x-1/2"
                style={{ height: "calc(100% - 220px)" }}
            >
                <svg
                    width="400"
                    height="250"
                    className="absolute "
                    style={{ top: "-195px", right: "-300px" }}
                >
                    <path
                        d="M 302 200 C 300 100 100 100 88 40"
                        stroke="#D1D5DB"
                        strokeWidth="4"
                        fill="none"
                        transform="translate(400, 0) scale(-1, 1)"
                    />
                </svg>
            </div>
            <div
                className="absolute top-48 left-2/3 w-1 bg-black -translate-x-1/2"
                style={{ height: "calc(100% - 220px)" }}
            >
                <svg
                    width="400"
                    height="250"
                    className="absolute"
                    style={{ top: "-195px", left: "-300px" }}
                >
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor="#D1D5DB" />{" "}
                            {/* bg-gray-300 */}
                            <stop offset="100%" stopColor="#000" />{" "}
                            {/* bg-red-300 */}
                        </linearGradient>
                    </defs>

                    <path
                        d="M 302 200 C 300 100 100 100 88 40"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        fill="none"
                    />
                </svg>
            </div>

            <div className="absolute w-10 h-10 bg-zinc-400 rounded-full bottom-0 left-2/3  -translate-x-1/2" />
            <div className="absolute w-10 h-10 bg-gray-700 rounded-full top-0 left-1/2 -translate-x-1/2" />
            <div className="absolute w-10 h-10 bg-gray-700 rounded-full bottom-0 left-1/3 -translate-x-1/2" />

            {/* Обёртка c двумя колонками */}
            <div className="flex w-full justify-between">
                {/* Левая колонка (exp.right === false) */}
                <div className="flex flex-col w-1/3 items-end pr-8 mt-8 ">
                    {leftExps.map((exp, idx) => (
                        <div
                            key={idx}
                            className="relative mb-12 w-full max-w-lg"
                        >
                            {/* Точка привязки к линии (можно скорректировать позиционирование) */}
                            {/* <div className="absolute w-7 h-7 bg-white rounded-full -translate-y-1/2 -translate-x-1/2  -right-13 top-1/2 " /> */}
                            <div className="absolute w-7 h-7 bg-white     rounded-full -right-15 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                            <div className="absolute w-5 h-5 bg-gray-700  rounded-full -right-13 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                            <ExperienceCard
                                exp={exp}
                                idx={idx}
                                positions={positions}
                                handleMouseMove={handleMouseMove}
                                openWindows={openWindows}
                                toggleWindow={toggleWindow}
                                closeWindow={closeWindow}
                                disableHover={true}
                            />
                        </div>
                    ))}
                </div>

                {/* Правая колонка (exp.right === true) */}
                <div className="flex flex-col w-1/3 items-start pl-8  mt-8 ">
                    {rightExps.map((exp, idx) => (
                        <div
                            key={idx}
                            className="relative mb-12 w-full max-w-lg"
                        >
                            {/* Точка привязки к линии (можно скорректировать позиционирование) */}
                            <div className="absolute w-7 h-7 bg-white    rounded-full -left-8   top-1/2 -translate-y-1/2 -translate-x-1/2" />
                            <div className="absolute w-5 h-5 bg-zinc-400 rounded-full -left-8   top-1/2 -translate-y-1/2 -translate-x-1/2" />
                            <ExperienceCard
                                exp={exp}
                                idx={idx}
                                positions={positions}
                                handleMouseMove={handleMouseMove}
                                openWindows={openWindows}
                                toggleWindow={toggleWindow}
                                closeWindow={closeWindow}
                                disableHover={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
