import React, { useState } from "react";
import { experiences } from "./data"; // Массив объектов с опытом
import IfAllLeftFalse from "./IfAllLeftFalse";
import IfAllLeftTrue from "./IfAllLeftTrue";
import ToggleButton from "./ToggleButton";

export default function ExperienceSection() {
    const [positions, setPositions] = useState({});
    const [openWindows, setOpenWindows] = useState({ 1: true, 2: true });

    // Состояние: все плашки слева (и без ховера) или по обе стороны (ёлочка)
    const [allLeft, setAllLeft] = useState(false);

    // Отслеживаем движение мыши для эффекта смещения картинки
    const handleMouseMove = (idx, e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPositions((prev) => ({ ...prev, [idx]: { x, y } }));
    };

    // Открыть/закрыть окно с кодом
    const toggleWindow = (idx) => {
        setOpenWindows((prev) => ({ ...prev, [idx]: !prev[idx] }));
    };

    // Закрыть окно
    const closeWindow = (idx) => {
        setOpenWindows((prev) => ({ ...prev, [idx]: false }));
    };

    return (
        <div>
            {/* Кнопка переключения режима */}

            <ToggleButton allLeft={allLeft} setAllLeft={setAllLeft} />

            {/* В зависимости от allLeft отрисовываем разные компоненты */}
            {!allLeft ? (
                <IfAllLeftFalse
                    experiences={experiences}
                    positions={positions}
                    handleMouseMove={handleMouseMove}
                    openWindows={openWindows}
                    toggleWindow={toggleWindow}
                    closeWindow={closeWindow}
                />
            ) : (
                <IfAllLeftTrue
                    experiences={experiences}
                    positions={positions}
                    handleMouseMove={handleMouseMove}
                    openWindows={openWindows}
                    toggleWindow={toggleWindow}
                    closeWindow={closeWindow}
                />
            )}
        </div>
    );
}
