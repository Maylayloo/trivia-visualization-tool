import ToggleDarkMode from "./ToggleDarkMode.tsx";
import {MdDashboard} from "react-icons/md";

const Header = () => {
    return (
        <header>
            <div className='flex items-center gap-2'>
                <div className='text-4xl'>
                    <MdDashboard/>
                </div>
                <div id='header-text-container'>
                    <h1>Trivia Dashboard</h1>
                    <p>Mini visualization tool using data from the Open Trivia DB API</p>
                </div>
            </div>

            <ToggleDarkMode/>
        </header>
    );
};

export default Header;