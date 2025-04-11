import React from "react";
import fallbackImg from "../../assets/specehack.png";

export default function ExperienceCard({
    exp,
    idx,
    handleMouseMove,
    positions,
    disableHover,
    cardColor, // если нужно задавать цвет карточки извне
}) {
    const isLeft = idx % 2 === 0;
    const hoverImage = exp.image || fallbackImg;
    const finalColor = cardColor || "bg-gray-100";

    // Если выключен ховер – показываем только карточку без всплывающего изображения
    if (disableHover) {
        return (
            <div
                className={`relative ${finalColor} text-gray-800 p-4 rounded-lg shadow-md`}
            >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-lg">{exp.year}</p>
                {exp.description && (
                    <p className="text-sm mt-2">{exp.description}</p>
                )}
                {exp.skills?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {exp.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-2 py-1 rounded bg-gray-200 text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // Обычный режим (с ховером)
    return (
        <div
            className={`
        relative 
        group 
        ${finalColor}
        text-gray-800 
        p-4 
        rounded-lg 
        shadow-md
      `}
            onMouseMove={(e) => handleMouseMove(idx, e)}
        >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-lg">{exp.year}</p>
            {exp.description && (
                <p className="text-sm mt-2">{exp.description}</p>
            )}
            {exp.skills?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-2 py-1 rounded bg-gray-200 text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            )}

            {/* Блок с изображением при наведении */}
            <div
                className={`
          pointer-events-none
          absolute 
          top-1/2
          ${isLeft ? "-right-1/2" : "-left-1/2"}
          group-hover:opacity-100
          opacity-0 
          transition-opacity 
          duration-300
        `}
                style={{
                    // Динамическое смещение в зависимости от позиции курсора
                    transform: positions[idx]
                        ? isLeft
                            ? `translate(
                  calc(100% - ${positions[idx].x * 0.05}px),
                  calc(-50% + ${(positions[idx].y - 150) * 0.05}px)
                )`
                            : `translate(
                  calc(-100% - ${positions[idx].x * 0.05}px),
                  calc(-50% + ${(positions[idx].y - 150) * 0.05}px)
                )`
                        : isLeft
                        ? "translate(0, -50%)"
                        : "translate(-100%, -50%)",
                }}
            >
                <img src={hoverImage} alt="Hover Icon" className="h-52" />
            </div>
        </div>
    );
}
