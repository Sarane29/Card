import { useState, useEffect } from 'react';
import foto from './assets/foto.jpeg'; // ✅ Importa la imagen aquí

export default function Card() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true';
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div
      className={`max-w-sm mx-auto p-6 shadow-md rounded-lg mt-5 transition duration-300 ${darkMode ? 'bg-purple-200' : 'bg-purple-50'}`}
    >
      <img
        src={foto}
        alt="avatar"
        className="rounded-full w-32 h-32 mx-auto"
      />
      <h2
        className={`mt-4 text-2xl font-semibold text-center ${darkMode ? 'text-black' : 'text-gray-800'}`}
      >
        Shrek y Burro
      </h2>
      <p
        className={`mt-2 text-center ${darkMode ? 'text-black' : 'text-gray-600'}`}
      >
        Solteras, sin filtro y con hambre de chiquititos<br />
        Llámanos al 3204046036
      </p>
      <button
        onClick={toggleTheme}
        className={`mt-4 px-4 py-2 rounded shadow-md transition duration-300 ${
          darkMode ? 'bg-blue-200 text-black' : 'bg-gray-200 text-gray-800'
        }`}
      >
        Mala Mía
      </button>
    </div>
  );
}

