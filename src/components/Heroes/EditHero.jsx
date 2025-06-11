import React, { useReducer } from 'react';
import { useHeroes } from '../../context/HeroContext';
import { useUI } from '../../context/UIContext';

const initialState = (hero) => ({
  name: hero.name || '',
  branch: hero.branch || '',
  rank: hero.rank || '',
  birthplace: hero.birthplace || '',
  description: hero.description || '',
  achievements: hero.achievements || '',
  birthdate: hero.birthdate || '',
  dates: hero.dates || '',
  awards: hero.awards ? hero.awards.join(', ') : '',
  image: hero.image || '',
});

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState(action.payload);
    default:
      return state;
  }
}

const EditHero = () => {
  const { selectedEditHero, closeEditHero } = useUI();
  const { updateHero, deleteHero } = useHeroes();
  const [state, dispatch] = useReducer(reducer, selectedEditHero, initialState);

  const handleChange = (field) => (e) => {
    dispatch({ type: 'SET_FIELD', field, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, branch, rank, birthplace, birthdate, dates, image } = state;
    if (!name.trim() || !branch.trim() || !rank.trim() || !birthplace.trim() || !birthdate.trim() || !dates.trim() || !image.trim()) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    const updatedHero = {
      ...selectedEditHero,
      ...state,
      awards: state.awards ? state.awards.split(',').map(a => a.trim()) : [],
    };

    try {
      const response = await fetch(`http://localhost:8000/heroes/${selectedEditHero.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedHero)
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Герой обновлён:', data);

      updateHero(updatedHero);
      closeEditHero();
    } catch (error) {
      console.error('Ошибка при обновлении героя:', error);
      alert('Не удалось обновить героя. Проверьте консоль.');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Вы уверены, что хотите удалить этого героя?')) return;

    try {
      const response = await fetch(`http://localhost:8000/heroes/${selectedEditHero.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Герой удалён:', data);

      deleteHero(selectedEditHero.id);
      closeEditHero();
    } catch (error) {
      console.error('Ошибка при удалении героя:', error);
      alert('Не удалось удалить героя. Проверьте консоль.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Редактировать героя</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text" placeholder="Имя героя *" value={state.name} onChange={handleChange('name')} className="border p-2 rounded" />
          <input type="text" placeholder="Род войск *" value={state.branch} onChange={handleChange('branch')} className="border p-2 rounded" />
          <input type="text" placeholder="Звание *" value={state.rank} onChange={handleChange('rank')} className="border p-2 rounded" />
          <input type="text" placeholder="Место рождения *" value={state.birthplace} onChange={handleChange('birthplace')} className="border p-2 rounded" />
          <input type="text" placeholder="Дата рождения *" value={state.birthdate} onChange={handleChange('birthdate')} className="border p-2 rounded" />
          <input type="text" placeholder="Годы жизни *" value={state.dates} onChange={handleChange('dates')} className="border p-2 rounded" />
          <input type="text" placeholder="Награды (через запятую)" value={state.awards} onChange={handleChange('awards')} className="border p-2 rounded" />
          <textarea placeholder="Описание" value={state.description} onChange={handleChange('description')} className="border p-2 rounded" />
          <textarea placeholder="Достижения" value={state.achievements} onChange={handleChange('achievements')} className="border p-2 rounded" />
          <input type="text" placeholder="URL изображения *" value={state.image} onChange={handleChange('image')} className="border p-2 rounded" />

          <div className="flex justify-between gap-2 mt-4">
            <button type="button" onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded">
              Удалить
            </button>
            <div className="flex gap-2">
              <button type="button" onClick={closeEditHero} className="px-4 py-2 bg-gray-300 rounded">
                Отмена
              </button>
              <button type="submit" className="px-4 py-2 bg-[#C62828] text-white rounded">
                Сохранить
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditHero;
