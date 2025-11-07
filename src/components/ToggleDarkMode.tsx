import {useEffect, useState} from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ToggleDarkMode = () => {
    const initialTheme = localStorage.getItem("dark") === 'true';

    const [darkMode, setDarkMode] = useState<boolean>(initialTheme);

    const toggleMode = () => {
        const next = !darkMode;
        setDarkMode(next)
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("dark", JSON.stringify(next));
    }

    useEffect(() => {
        document.documentElement.classList.toggle("dark", initialTheme);
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode, initialTheme])

    return (
        <button
            id='toggle-mode-btn'
            onClick={toggleMode}
        >
            {darkMode ? <MdOutlineLightMode/> : <MdDarkMode />}
        </button>
    );
};

export default ToggleDarkMode;