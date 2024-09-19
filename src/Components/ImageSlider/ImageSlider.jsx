import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Detect dark mode preference
    useEffect(() => {
        const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Set the initial dark mode state
        setIsDarkMode(matchMediaDark.matches);

        // Listen for changes in the dark mode preference
        const handleChange = (e) => {
            setIsDarkMode(e.matches);
        };

        matchMediaDark.addEventListener('change', handleChange);

        // Clean up the event listener on component unmount
        return () => {
            matchMediaDark.removeEventListener('change', handleChange);
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={`image-slider ${isDarkMode ? 'dark-mode' : ''}`}>
            <button className={`prev2 ${slides.length === 1 ? 'di-none' : ''}`} onClick={prevSlide}>
                &#10094;
            </button>

            <button className={`next2 ${slides.length === 1 ? 'di-none' : ''}`} onClick={nextSlide}>
                &#10095;
            </button>

            <div className="slider-container">
                <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((e, index) => (
                        <div key={index} className="slider-item">
                            <img src={e} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
