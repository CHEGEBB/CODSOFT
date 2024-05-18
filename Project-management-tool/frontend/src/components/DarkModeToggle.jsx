import React from 'react';

const DarkModeToggle = () => {
    const toggleDarkMode = () => {
        const isDarkMode = document.body.style.backgroundColor === 'rgb(51, 51, 51)';
        document.body.style.backgroundColor = isDarkMode ? '#fff' : '#333';
        localStorage.setItem('darkMode', isDarkMode ? 'false' : 'true');
    };

    // Check local storage for dark mode preference
    React.useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.body.style.backgroundColor = '#333';
        }
    }, []);

    return (
        <div className="dark-mode-toggle">
            <input
                type="checkbox"
                id="darkModeToggle"
                onChange={toggleDarkMode}
                checked={document.body.style.backgroundColor === 'rgb(51, 51, 51)'}
            />
            <label htmlFor="darkModeToggle">Dark Mode</label>
        </div>
    );
}

export default DarkModeToggle;
