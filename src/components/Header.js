import React, {useState} from 'react'

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleDarkModeClick() {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    } 
    
    
    
    return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </div>
    )
}


export default Header;
