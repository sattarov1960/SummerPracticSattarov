import React, { createContext, useReducer, useContext, useEffect } from 'react';

const HeroContext = createContext();

function heroReducer(state, action) {
  switch (action.type) {
    case 'SET_HEROES':
      return action.payload;
    case 'ADD_HERO':
      return [...state, action.payload];
    case 'UPDATE_HERO':
      return state.map((h) => (h.id === action.payload.id ? action.payload : h));
    case 'DELETE_HERO':
      return state.filter((h) => h.id !== action.payload);
    default:
      return state;
  }
}

export const HeroProvider = ({ children }) => {
  const [heroes, dispatch] = useReducer(heroReducer, []);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await fetch('http://localhost:8000/heroes');
        const data = await response.json();
        dispatch({ type: 'SET_HEROES', payload: data });
      } catch (error) {
        console.error('Ошибка загрузки героев:', error);
      }
    };
    fetchHeroes();
  }, []);

  const addHero = (hero) => {
    dispatch({ type: 'ADD_HERO', payload: hero });
  };

  const updateHero = (hero) => {
    dispatch({ type: 'UPDATE_HERO', payload: hero });
  };

  const deleteHero = (id) => {
    dispatch({ type: 'DELETE_HERO', payload: id });
  };

  return (
    <HeroContext.Provider value={{ heroes, addHero, updateHero, deleteHero }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHeroes = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error('useHeroes должен использоваться внутри HeroProvider');
  }
  return context;
};
