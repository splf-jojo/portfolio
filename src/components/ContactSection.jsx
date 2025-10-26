import React, { useRef, useEffect, useState } from "react";
import Matter from "matter-js";
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
    const containerRef = useRef(null);
    const [engine] = useState(() => Matter.Engine.create());
    const [buttons, setButtons] = useState([]);

    const socialMedia = [
        {
            label: "GitHub",
            link: "https://github.com/splf-jojo",
            bgColor: "bg-gray-700",
            textColor: "text-white",
            icon: <FaGithub />,
            short: "Github",
        },
        {
            label: "Telegram",
            link: "https://t.me/Speelfe1",
            bgColor: "bg-blue-500",
            textColor: "text-white",
            icon: <FaTelegramPlane />,
            short: "Telegram",
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/aman-ashirmatov-bbb6702aa/",
            bgColor: "bg-blue-800",
            textColor: "text-white",
            icon: <FaLinkedinIn />,
            short: "LinkedIn",
        },
    ];

    useEffect(() => {
        if (!containerRef.current) return;

        const { width, height } = containerRef.current.getBoundingClientRect();
        const world = engine.world;
        world.gravity.y = 1;

        const wallThickness = 50;

        const leftWall = Matter.Bodies.rectangle(
            -wallThickness / 2,
            height / 2,
            wallThickness,
            height,
            { isStatic: true }
        );
        const rightWall = Matter.Bodies.rectangle(
            width + wallThickness / 2,
            height / 2,
            wallThickness,
            height,
            { isStatic: true }
        );
        const floor = Matter.Bodies.rectangle(
            width / 2,
            height + wallThickness / 2,
            width,
            wallThickness,
            { isStatic: true }
        );

        Matter.World.add(world, [leftWall, rightWall, floor]);

        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);

        const tick = () => {
            // Обновляем состояние, чтобы перерисовать позиции
            setButtons((prev) => [...prev]);
            requestAnimationFrame(tick);
        };
        tick();

        // Роняем по очереди кнопки
        socialMedia.forEach((item, i) => {
            const delay = i * 500 + Math.random() * 500;
            setTimeout(() => spawnButton(item, width), delay);
        });

        return () => {
            Matter.World.clear(world, false);
            Matter.Engine.clear(engine);
            Matter.Runner.stop(runner);
        };
    }, []);

    const spawnButton = (item, sceneWidth) => {
        const x = Math.random() * sceneWidth;
        const y = -80;
        const body = Matter.Bodies.rectangle(x, y, 180, 60, {
            restitution: 0.5,
            friction: 0.2,
            label: item.label,
            plugin: {
                link: item.link,
                bg: item.bgColor,
                color: item.textColor,
                icon: item.icon,
                short: item.short,
            },
        });
        Matter.World.add(engine.world, body);
        setButtons((prev) => [...prev, body]);
    };

    return (
        <div className="w-full">
            <div
                ref={containerRef}
                className="relative w-full h-[50vh] overflow-hidden border-b-1 border-neutral-500"
            >
                {/* Надпись фоном */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1 className="font-sans font-light text-[12rem] leading-none text-gray-400 opacity-50">
                        CONTACT ME
                    </h1>
                </div>

                {buttons.map((body, idx) => {
                    const { x, y, angle } = body.position;
                    const { link, bg, color, icon, short } = body.plugin;

                    return (
                        <a
                            key={idx}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            // Класс для базового белого фона, чёрного текста, скруглений и т.д.
                            // "group" нужно для hover-эффектов на вложенных элементах
                            className={`
                block w-[180px] h-[60px] 
                bg-white text-black 
                font-semibold rounded-4xl
                flex items-center justify-center
                pointer-events-auto select-none
                text-xl
                relative overflow-hidden
                group
                border border-gray-200
              `}
                            style={{
                                position: "absolute",
                                left: x - 90,
                                top: y - 30,
                                transform: `rotate(${angle}rad)`,
                            }}
                        >
                            {/* Анимированная "заливка" – слева направо */}
                            <span
                                className={`
                  absolute top-0 left-0
                  h-full w-0 
                  transition-all duration-300
                  group-hover:w-full
                  ${bg}
                `}
                                style={{ zIndex: 1 }}
                            />

                            {/* Основной текст и иконка – поверх заливки */}
                            <span
                                className="
                  relative z-10
                  flex items-center justify-center
                  w-full h-full
                  transition-colors duration-300
                  group-hover:text-white
                "
                            >
                                <span className="mr-2 text-2xl">{icon}</span>
                                {short}
                            </span>
                        </a>
                    );
                })}
            </div>
            <div className="text-neutral-500 py-8 text-left text-xl">
Born in Kazakhstan
            </div>
        </div>
    );
}
