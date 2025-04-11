import React from "react";
import phoneMockup from "../../assets/phone2.png"; // путь к вашему макету телефона
import laptopMockup from "../../assets/laptop2.png"; // путь к вашему макету телефона

export default function HandPhone({
    children,
    width = 400,
    height = 800,
    contentClassName = "",
    type,
}) {
    return (
        <div
            className="relative "
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            {/* Контейнер для контента (экран), лежит «под» изображением телефона */}

            {/* Картинка телефона сверху, чтобы углы всегда были видны */}
            {type === "phone" && (
                <>
                    <div
                        className={`absolute inset-0 z-0 overflow-hidden ${contentClassName} mx-[7%] mr-[8.5%] mt-[1.25%] mb-[2%] rounded-3xl`}
                    >
                        {children}
                    </div>
                    <img
                        src={phoneMockup}
                        alt="Phone mockup"
                        className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
                    />
                </>
            )}

            {type === "laptop" && (
                <>
                    <img
                        src={laptopMockup}
                        alt="Phone mockup"
                        className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
                    />
                </>
            )}
        </div>
    );
}
