import React from "react";
import specehack from "../assets/specehack.png"; // путь к вашему макету телефона

import laptopMockup from "../assets/cmd3.png"; // путь к вашему макету телефона
import cmd from "../assets/cmd.png"; // путь к вашему макету телефона
import cmd2 from "../assets/cmd2.png"; // путь к вашему макету телефона

export default function GameMarketplaceArticle() {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-8 py-10 font-sans text-gray-900 mt-16">
            {/* Заголовок и вступление */}
            <header className="mb-12">
                <h1 className="text-5xl font-bold">
                    Game Marketplace: Инновационный проект для геймеров
                </h1>
                <p className="mt-4 text-xl">
                    Узнайте, как наш проект меняет рынок цифровых игр, объединяя
                    удобство покупок и современные технологии.
                </p>
            </header>

            {/* Основное содержимое статьи */}
            <article className="space-y-16">
                {/* Секция: Концепция проекта */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4">
                        Концепция проекта
                    </h2>
                    <p className="mb-4">
                        Наш Game Marketplace – это уникальная платформа, где
                        пользователи могут находить и приобретать игры различных
                        жанров, наслаждаясь интуитивно понятным интерфейсом и
                        современным дизайном.
                    </p>
                    <img
                        src={laptopMockup}
                        alt="Концепция проекта"
                        className="w-full h-auto rounded-lg shadow"
                    />
                </section>

                {/* Секция: Функциональность и дизайн */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4">
                        Функциональность и дизайн
                    </h2>
                    <p className="mb-4">
                        Интерфейс нашего проекта разработан с использованием
                        React и Tailwind CSS, что позволяет обеспечить
                        адаптивность и высокую скорость работы на любых
                        устройствах.
                    </p>
                    <img
                        src={specehack}
                        alt="Функциональность и дизайн"
                        className="w-full h-auto rounded-lg shadow"
                    />
                </section>

                {/* Секция: Технические особенности */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4">
                        Технические особенности
                    </h2>
                    <p className="mb-4">
                        В основе проекта лежит современный стек технологий,
                        включающий React для создания динамичных интерфейсов,
                        Node.js для серверной логики и интеграцию с различными
                        API для получения актуальной информации о играх.
                    </p>
                    <img
                        src={cmd}
                        alt="Технические особенности"
                        className="w-full h-auto rounded-lg shadow"
                    />
                </section>

                {/* Секция: Будущее проекта */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4">
                        Будущее проекта
                    </h2>
                    <p className="mb-4">
                        Мы постоянно работаем над расширением функциональности и
                        улучшением пользовательского опыта. В ближайших планах –
                        добавление персонализированных рекомендаций и интеграция
                        с сообществами геймеров.
                    </p>
                    <img
                        src={cmd2}
                        alt="Будущее проекта"
                        className="w-full h-auto rounded-lg shadow"
                    />
                </section>
            </article>
        </div>
    );
}
