import { useState } from "react";

const LanguageSelector = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-2">
      {showDropdown && (
        <div className="bg-white rounded-lg shadow-xl p-2 space-y-2">
          <button className="language-selector flex items-center space-x-2 p-2 rounded hover:bg-purple-50 w-full">
            <img
              src="https://flagcdn.com/w20/es.png"
              alt="Español"
              className="w-5 h-5"
            />
            <span>Español</span>
          </button>
          <button className="language-selector flex items-center space-x-2 p-2 rounded hover:bg-purple-50 w-full">
            <img
              src="https://flagcdn.com/w20/gb.png"
              alt="English"
              className="w-5 h-5"
            />
            <span>English</span>
          </button>
          <button className="language-selector flex items-center space-x-2 p-2 rounded hover:bg-purple-50 w-full">
            <img
              src="https://flagcdn.com/w20/fr.png"
              alt="Français"
              className="w-5 h-5"
            />
            <span>Français</span>
          </button>
          <button className="language-selector flex items-center space-x-2 p-2 rounded hover:bg-purple-50 w-full">
            <img
              src="https://flagcdn.com/w20/pt.png"
              alt="Português"
              className="w-5 h-5"
            />
            <span>Português</span>
          </button>
        </div>
      )}

      <button
        onClick={toggleDropdown}
        className="gradient-bg text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <i className="fas fa-globe text-xl" />
      </button>
    </div>
  );
};

export default LanguageSelector;
