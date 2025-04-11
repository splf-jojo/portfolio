// ToggleButton.jsx
import React, { useState } from "react";
import { FaBriefcase, FaUniversity } from "react-icons/fa";
import "./ToggleButton.css"; // <-- импорт CSS c анимацией

function ToggleButton({ allLeft, setAllLeft }) {
    // Локальное состояние, чтобы понять, кликал ли пользователь
    const [hasClicked, setHasClicked] = useState(false);

    // Когда пользователь нажимает на "Employer"
    const handleClickEmployer = () => {
        setHasClicked(true);
        setAllLeft(false);
    };

    // Когда пользователь нажимает на "Admission Office"
    const handleClickAdmission = () => {
        setHasClicked(true);

        setAllLeft(true);
    };

    return (
        <div className="flex justify-center my-8">
            {/* Обёртка: чуть больше кнопок */}
            <div
                className={`
          inline-flex items-center bg-gray-200 rounded-full p-2 relative h-14 w-[450px]
        
        `}
            >
                {/* Анимированный бегунок (белый фон) */}
                <span
                    className={`
            absolute left-2 top-2 w-[calc(50%-8px)] h-[calc(100%-16px)] bg-white rounded-full shadow-md
            transform transition-transform duration-300
            ${allLeft && "translate-x-full"}
              ${!hasClicked ? "shake" : ""}
          `}
                />

                {/* Кнопка "Employer" */}
                <button
                    className={`
            relative z-10 flex items-center justify-center gap-2 w-1/2
            text-md font-medium text-gray-700 h-full rounded-full
            transition-colors duration-300 whitespace-nowrap
            ${allLeft ? "text-gray-900" : "text-gray-600 hover:text-gray-800"}
          `}
                    onClick={handleClickEmployer}
                >
                    <FaBriefcase size={20} />
                    Employer
                </button>

                {/* Кнопка "Admission Office" */}
                <button
                    className={`
            relative z-10 flex items-center justify-center gap-2 w-1/2
            text-md font-medium text-gray-700 h-full rounded-full
            transition-colors duration-300 whitespace-nowrap
            ${!allLeft ? "text-gray-900" : "text-gray-600 hover:text-gray-800"}
          `}
                    onClick={handleClickAdmission}
                >
                    <FaUniversity size={20} />
                    Admission Office
                </button>
            </div>
        </div>
    );
}

export default ToggleButton;
