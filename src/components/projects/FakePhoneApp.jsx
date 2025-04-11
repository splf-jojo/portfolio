import React, { useState } from "react";

// Подставьте свои изображения (скриншоты)
import phoneHomeImage from "../../assets/homescreen2.jpg";
import appMainImage from "../../assets/appMain2.jpg";
import appNotificationsImage from "../../assets/appNotifications2.jpg";
import appIcon from "../../assets/appIcon.png"; // PNG-иконка приложения

export default function FakePhoneApp({ onScreenChange }) {
    const [screen, setScreen] = useState("phoneHome");

    // Функция для смены экрана (и отправки события наверх)
    const changeScreen = (newScreen) => {
        setScreen(newScreen);
        if (onScreenChange) {
            onScreenChange(newScreen);
        }
    };

    return (
        <>
            {screen === "phoneHome" && (
                <PhoneHome onOpenApp={() => changeScreen("appMain")} />
            )}

            {screen === "appMain" && (
                <AppMain
                    onOpenNotifications={() => changeScreen("appNotifications")}
                    onGoBackPhoneHome={() => changeScreen("phoneHome")}
                    onShowInfo={() => changeScreen("appInfo")}
                />
            )}

            {screen === "appNotifications" && (
                <AppNotifications onClose={() => changeScreen("appMain")} />
            )}

            {screen === "appInfo" && (
                <AppInfo onClose={() => changeScreen("appMain")} />
            )}
        </>
    );
}

/* ---------------------------
   1. Домашний экран телефона
   --------------------------- */
function PhoneHome({ onOpenApp }) {
    return (
        <div className="relative w-full h-full">
            {/* Фон — «домашний экран телефона» */}
            <img
                src={phoneHomeImage}
                alt="Phone Home Screen"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Анимация дребезжания */}
            <style>
                {`
                    @keyframes phone-home-shake {
                        0%, 100% { transform: translateX(0); }
                        25% { transform: translateX(-2%); }
                        50% { transform: translateX(2%); }
                        75% { transform: translateX(-2%); }
                    }
                `}
            </style>

            {/* Видимая кнопка с PNG-иконкой */}
            <button
                onClick={onOpenApp}
                style={{
                    position: "absolute",
                    top: "24.5%",
                    left: "4.6%",
                    width: "17.9%",
                    height: "8%",
                }}
                className="bg-transparent p-0 border-none"
                aria-label="Open App"
            >
                <img
                    src={appIcon}
                    alt="App Icon"
                    className="w-full h-full"
                    style={{
                        animation: "phone-home-shake 0.8s infinite",
                    }}
                />
            </button>
        </div>
    );
}

/* ---------------------------
   2. Главный экран приложения
   --------------------------- */
function AppMain({ onOpenNotifications, onGoBackPhoneHome }) {
    return (
        <div className="relative w-full h-full">
            {/* Фон-картинка (скриншот приложения) */}
            <img
                src={appMainImage}
                alt="App Main Screen"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Кнопка уведомлений (иконка колокольчика) */}
            <button
                onClick={onOpenNotifications}
                className="absolute bg-transparent"
                style={{
                    top: "5%",
                    right: "3%",
                    width: "8%",
                    height: "4%",
                }}
                aria-label="Open Notifications"
            />

            {/* Кнопка «назад» (гамбургер/меню) */}
            <button
                onClick={onGoBackPhoneHome}
                className="absolute bg-transparent"
                style={{
                    top: "5%",
                    left: "3%",
                    width: "8%",
                    height: "4%",
                }}
                aria-label="Back to phone home"
            />
        </div>
    );
}

/* ---------------------------
   3. Экран уведомлений
   --------------------------- */
function AppNotifications({ onClose }) {
    return (
        <div className="relative w-full h-full">
            {/* Фон-картинка (уведомления) */}
            <img
                src={appNotificationsImage}
                alt="App Notifications Screen"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Кнопка закрытия уведомлений */}
            <button
                onClick={onClose}
                className="absolute bg-transparent"
                style={{
                    top: "5%",
                    left: "3%",
                    width: "8%",
                    height: "4%",
                }}
                aria-label="Close Notifications"
            />
        </div>
    );
}

/* ---------------------------
   4. Экран информации
   --------------------------- */
function AppInfo({ onClose }) {
    return (
        <div className="relative w-full h-full bg-white flex flex-col items-center justify-center text-black">
            <h1 className="text-2xl font-bold">About This App</h1>
            <p className="text-center px-6">
                This is a mock application demonstrating screen transitions and
                UI elements.
            </p>
            <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-gray-300 rounded"
            >
                Close
            </button>
        </div>
    );
}
