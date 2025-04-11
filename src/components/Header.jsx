import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        // Если мобильное меню открыто, закрываем его
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);

        // Если на главной странице – скроллим, иначе переходим на главную с hash
        if (location.pathname === "/") {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate(`/#${id}`);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed w-full top-0 left-0 z-50 transition-transform duration-300 ${
                showHeader ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="bg-white/30 backdrop-blur-md border-b border-transparent px-4 py-4 flex items-center justify-between">
                {/* Логотип или название */}
                {/* <div className="text-xl font-bold">My Portfolio</div> */}

                {/* Десктопное меню */}
                <nav className="mx-auto flex items-center justify-center">
                    <ul className="flex space-x-10">
                        <li
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection("hero")}
                        >
                            Personal
                        </li>
                        <li
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection("experience")}
                        >
                            Experience
                        </li>
                        <li
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection("projects")}
                        >
                            Projects
                        </li>
                        <li
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </nav>

                {/* Кнопка мобильного меню */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-2xl"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Мобильное меню */}
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-white/90 backdrop-blur-md">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection("hero")}
                        >
                            Personal
                        </li>
                        <li
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection("experience")}
                        >
                            Experience
                        </li>
                        <li
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection("projects")}
                        >
                            Projects
                        </li>
                        <li
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
