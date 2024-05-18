import React from 'react';
import Switch from 'react-switch';
import LightThemeIcon from '../images/light.svg';
import DarkThemeIcon from '../images/dark.svg';

const DarkModeToggle = () => {
    const toggleDarkMode = () => {
        const isDarkMode = document.body.style.backgroundColor === 'rgb(51, 51, 51)';
        document.body.style.backgroundColor = isDarkMode ? '#fff' : '#333';
        document.body.style.color = isDarkMode ? '#000' : '#fff';
        localStorage.setItem('darkMode', isDarkMode ? 'false' : 'true');
    };
    
    React.useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff'; // Change text color
        }
    }, []);

    return (
        <div className="dark-mode-toggle">
            <img src={LightThemeIcon} alt="Light Theme" /> {/* Use the light theme icon image */}
            <Switch
                onChange={toggleDarkMode}
                checked={document.body.style.backgroundColor === 'rgb(51, 51, 51)'}
                onColor="#333"
                offColor="#fff"
                checkedIcon={false}
                uncheckedIcon={false}
            />
            <img src={DarkThemeIcon} alt="Dark Theme" /> {/* Use the dark theme icon image */}
        </div>
    );
}

export default DarkModeToggle;
