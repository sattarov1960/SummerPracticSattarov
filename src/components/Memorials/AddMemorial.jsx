import React, { useState } from 'react';

const AddMemorial = ({ onAdd, onCancel }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMemorial = {
      id: Date.now().toString(),
      name,
      location,
      year,
      description,
      image
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/memorials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMemorial)
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }

      onAdd(newMemorial);
    } catch (error) {
      console.error('Ошибка при добавлении мемориала:', error);
      alert('Не удалось добавить мемориал');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Добавить мемориал</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Название"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Местоположение"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Год"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="URL изображения"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border p-2 rounded"
          />

          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">Отмена</button>
            <button type="submit" className="px-4 py-2 bg-[#C62828] text-white rounded">Добавить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMemorial;
