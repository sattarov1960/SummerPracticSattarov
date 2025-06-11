import React, { createContext, useContext, useReducer } from 'react';

const UIContext = createContext();

const initialState = {
  isAddingHero: false,
  isEditHero: false,
  selectedHero: null,
  selectedEditHero: null,
};

function uiReducer(state, action) {
  switch (action.type) {
    case 'OPEN_ADD_HERO':
      console.log('OPEN_ADD_HERO');
      return { ...state, isAddingHero: true };
    case 'CLOSE_ADD_HERO':
        console.log('CLOSE_ADD_HERO');
      return { ...state, isAddingHero: false };

    case 'OPEN_EDIT_HERO':
        console.log('OPEN_EDIT_HERO');
      return { ...state, isEditHero: true, selectedEditHero: action.payload };
    case 'CLOSE_EDIT_HERO':
        console.log('CLOSE_EDIT_HERO');
      return { ...state, isEditHero: false, selectedEditHero: null };

    case 'OPEN_HERO_MODAL':
        console.log('OPEN_HERO_MODAL');
      return { ...state, selectedHero: action.payload };
    case 'CLOSE_HERO_MODAL':
        console.log('CLOSE_HERO_MODAL');
      return { ...state, selectedHero: null };

    default:
      return state;
  }
}

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openAddHero = () => dispatch({ type: 'OPEN_ADD_HERO' });
  const closeAddHero = () => dispatch({ type: 'CLOSE_ADD_HERO' });

  const openEditHero = (hero) => dispatch({ type: 'OPEN_EDIT_HERO', payload: hero });
  const closeEditHero = () => dispatch({ type: 'CLOSE_EDIT_HERO' });

  const openHeroModal = (hero) => dispatch({ type: 'OPEN_HERO_MODAL', payload: hero });
  const closeHeroModal = () => dispatch({ type: 'CLOSE_HERO_MODAL' });

  return (
    <UIContext.Provider
      value={{
        ...state,
        openAddHero,
        closeAddHero,
        openEditHero,
        closeEditHero,
        openHeroModal,
        closeHeroModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI должен использоваться внутри UIProvider');
  }
  return context;
};
