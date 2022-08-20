import { useEffect, useState } from "react";
import { SliderData } from "./SliderData";

const Carousel = () => {
    let [current, setCurrent] = useState(0);
    useEffect(() => {
        let timer = setTimeout(() => goToNext(), 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [current]);
    const goToNext = () => {
        if (current === SliderData.length - 1) {
            setCurrent(0);
            return;
        }
        setCurrent((prev) => prev + 1);
    };
    const goToPrev = () => {
        if (current === 0) {
            setCurrent(SliderData.length - 1);
            return;
        }
        setCurrent((prev) => prev - 1);
    };
    return (
        <section className="carousel">
            <button className="prev" onClick={goToPrev}>
                {"<"}
            </button>
            <button className="next" onClick={goToNext}>
                {">"}
            </button>
            {SliderData.map((ele, index) => (
                <div
                    key={index}
                    className={index === current ? "slide active" : "slide"}
                >
                    {current === index && (
                        <img src={ele.image} alt="image1" className="image" />
                    )}
                </div>
            ))}
        </section>
    );
};

export default Carousel;
