import React from "react";
import myPhoto from "../assets/me2.jpg";
// import myPhoto from "../assets/me.jpg";

// import myPhoto from "../assets/giwl.png";

function HeroSection() {
    return (
        <section className="relative flex flex-col md:flex-row items-end justify-between pt-20 mb-12 min-h-[90vh]  ">
            {/* Левая часть с заголовком */}
            <div className="w-full flex items-end  ">
                <h1 className=" text-[190px] font-sans font-light leading-[170px]  text-black  ">
                    Aman <br /> Ashirmatov
                </h1>
            </div>

            {/* Правая часть с изображением и подписью */}
            <div className="h-[80vh] flex flex-col-reverse items-end justify-between  w-full">
                {/* Текст внизу */}
                <p className="text-lg md:text-xl text-right leading-tight text-gray-800 font-sans font-semibold mt-4">
                    Hi, I&apos;m Duwy, A UI/UX <br />
                    Designer Creating <br />
                    Intuitive Digital <br />
                    Experiences.
                </p>

                {/* Фото сверху */}
                <div className="w-full max-w-sm mb-4 ">
                    <img
                        src={myPhoto}
                        alt="Моё фото"
                        className="absolute right-0 rounded-xl object-cover w-[412px] h-[550px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
