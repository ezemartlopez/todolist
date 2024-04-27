import { useEffect, useState } from 'react';

function getModeLocalStorage() {
  const storedMode = localStorage.getItem('mode');
  // Handle potential absence of the key
  if (storedMode === null) {
    return true; // O el modo predeterminado que prefieras si no hay ningún valor almacenado
  } else {
    // Parsear el valor almacenado a un booleano
    return JSON.parse(storedMode);
  }
}


function UseMode() {
  const initialMode = getModeLocalStorage(); // Get initial mode on component mount
  const [mode, setMode] = useState(initialMode); // Initialize state with fetched value

  const toggleMode = () => {
    setMode(!mode); // Update state concisely, avoiding unnecessary renders
    localStorage.setItem('mode', !mode); // Persist state to localStorage after update
  };

  useEffect(() => {
    // Persist state to localStorage only on mode changes
    localStorage.setItem('mode', mode);
  }, [mode]); // Dependency array ensures effect runs only on mode updates

  return { mode, toggleMode };
}

export default UseMode;