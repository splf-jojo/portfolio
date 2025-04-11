import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import ScheduleInfo from "./components/projects/ScheduleInfo";
import GameHubInfo from "./components/projects/GameHubInfo";
import ContactSection from "./components/ContactSection";
import TechnologiesSection from "./components/TechnologiesSection";
import GameMarketplaceArticle from "./components/GameMarketplaceArticle";

function App() {
    return (
        <Router>
            <div className="relative min-h-screen bg-white">
                {/* Шапка */}
                <Header />

                {/* Маршруты */}
                <Routes>
                    {/* Главная страница */}
                    <Route
                        path="/"
                        element={
                            <main className="flex flex-col justify-center font-sans">
                                <div
                                    id="hero"
                                    className="mx-auto max-w-screen-xl w-full px-8 mb-12"
                                >
                                    <HeroSection />
                                </div>
                                <div id="skills" className="bg-white my-32">
                                    <div className="mx-auto max-w-screen-xl w-full">
                                        <TechnologiesSection />
                                    </div>
                                </div>
                                <div
                                    id="experience"
                                    className="mx-auto max-w-screen-xl w-full"
                                >
                                    <ExperienceSection />
                                </div>
                                <div
                                    id="projects"
                                    className="mx-auto max-w-screen-xl mt-42 w-full"
                                >
                                    <GameHubInfo />
                                    <ScheduleInfo />
                                </div>
                                <div
                                    id="contact"
                                    className="mx-auto max-w-screen-xl w-full"
                                >
                                    <ContactSection />
                                </div>
                            </main>
                        }
                    />

                    {/* Страница статьи о Game Marketplace */}
                    <Route
                        path="/game-marketplace"
                        element={<GameMarketplaceArticle />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
