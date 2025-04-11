import React from "react";
import ExperienceCard from "./ExperienceCard";

/**
 * Режим "ёлочки": плашки чередуются слева/справа
 */
export default function IfAllLeftFalse({
    experiences,
    positions,
    handleMouseMove,
    openWindows,
    toggleWindow,
    closeWindow,
}) {
    return (
        <div className="relative flex flex-col items-center w-full py-32">
            {/* Линия по центру экрана */}
            <div
                className="
          absolute
          top-0
          w-1
          h-full
          bg-gray-300
          left-1/2
          -translate-x-1/2
        "
            />
            {/* Кружок сверху (на линии) */}
            <div
                className="
          absolute
          w-10
          h-10
          bg-gray-700
          rounded-full
          left-1/2
          -translate-x-1/2
          top-0
        "
            />
            {/* Кружок снизу (на линии) */}
            <div
                className="
          absolute
          w-10
          h-10
          bg-gray-700
          rounded-full
          left-1/2
          -translate-x-1/2
          bottom-0
        "
            />

            {/* Перебираем данные и чередуем слева/справа */}
            {experiences.map((exp, idx) => {
                const isLeft = idx % 2 === 0; // Для чётных слева, для нечётных справа
                return (
                    <div
                        key={idx}
                        className={`
              relative z-0 flex items-center w-full my-12
              ${isLeft ? "justify-start" : "justify-end"}
            `}
                    >
                        {/* Точка на линии */}
                        <div
                            className={`
                absolute
                w-5
                h-5
                bg-gray-700
                rounded-full
                border-4
                border-white
                left-1/2
                -translate-x-1/2
              `}
                        />

                        {/* Карточка слева или справа */}
                        <div
                            className={`
                relative min-h-32
                ${isLeft ? "mr-12" : "ml-12"}
                w-[calc(50%-3rem)]  /* tailwind-арифметика */
              `}
                        >
                            <ExperienceCard
                                exp={exp}
                                idx={idx}
                                positions={positions}
                                handleMouseMove={handleMouseMove}
                                // Остальные пропсы, если нужны
                                openWindows={openWindows}
                                toggleWindow={toggleWindow}
                                closeWindow={closeWindow}
                                // disableHover = false, потому что здесь ёлочка
                                disableHover={false}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
