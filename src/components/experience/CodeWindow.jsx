// components/experience/CodeWindow.jsx
import React from "react";
import { codeContents } from "./data";

export default function CodeWindow({ idx, openWindows, closeWindow, number }) {
    if (!openWindows[idx]) return null;

    return (
        <div
            className={`
        absolute 
        ${idx % 2 === 0 ? "left-0" : "right-0"} 
        top-1/2 transform -translate-y-1/2 w-[400px] 
        animate-windowsOpen bg-gray-100 rounded-md 
        overflow-hidden
      `}
            style={{
                boxShadow: `
          0 8px 16px rgba(0, 0, 0, 0.25),
          0 28px 32px rgba(0, 0, 0, 0.2),
          0 32px 72px rgba(0, 0, 0, 0.35)
        `,
            }}
        >
            {/* Шапка окна */}
            <div className="h-8 flex items-center px-2">
                <button
                    onClick={() => closeWindow(idx)}
                    className="mr-2 w-5 h-5 bg-red-500 flex items-center justify-center 
                     rounded-sm text-white text-xs"
                    title="Close"
                >
                    x
                </button>
                <span className="text-gray-700 text-sm font-semibold">
                    Gamhub - cmd window
                </span>
            </div>

            {/* Кодовое содержимое */}
            {codeContents[number]}
        </div>
    );
}
