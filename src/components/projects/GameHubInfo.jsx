import React, { useState, useEffect } from "react";
import HandPhone from "./HandPhone";
import FakePhoneApp from "./FakePhoneApp";

import { useNavigate } from "react-router-dom";

export default function GameHubInfo() {
    const navigate = useNavigate();
    return (
        <div className="relative w-full bg-white text-black flex flex-row justify-between  ">
            {/* Левая колонка с заголовками */}

            <div className="flex flex-col justify-center">
                <HandPhone width={700} height={600} type="laptop"></HandPhone>
            </div>
            <div className="max-w-md  px-8 flex flex-col justify-center">
                <h1 className="text-6xl font-bold mb-4 -mt-32 ">
                    Game marketplace
                </h1>
                <p className="text-lg mb-6 leading-relaxed">
                    Stay informed with real-time notifications about schedule
                    changes, important announcements, and upcoming deadlines.
                </p>

                <button
                    className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
                    onClick={() => navigate("/game-marketplace")}
                >
                    <span className="text-lg">explore</span>
                </button>
            </div>
        </div>
    );
}
