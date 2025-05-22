import React from 'react';

const gallery = [
    {
      src: 'https://avatars.mds.yandex.net/i?id=9bc2ff3c3ba8e4b7303ecdf40133c0590326cde8-3692918-images-thumbs&n=13',
      caption: 'Женщины у станков'
    },
    {
      src: 'https://avatars.mds.yandex.net/i?id=dbf7951380287c1e53453fdf780db80bac1bfbdd-3849670-images-thumbs&n=13',
      caption: 'Дети в цехах'
    },
    {
      src: 'https://avatars.mds.yandex.net/i?id=3db974d81a5164326f8be0dd70c2ec507abaa5f9-7451990-images-thumbs&n=13',
      caption: 'Медсёстры в госпитале'
    },
    {
      src: 'https://avatars.mds.yandex.net/i?id=c65c1b01a649c28ef168c8ce5b83aeadf8997e7c-5430057-images-thumbs&n=13',
      caption: 'Колхозницы в поле'
    },
    {
      src: 'https://avatars.mds.yandex.net/i?id=8ea511674eb1dfdbc0a10f37f749858fb29eb163-5337839-images-thumbs&n=13',
      caption: 'Работницы на хлебозаводе'
    }
  ];
  

const HomeFrontGallery = () => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Фотохроника тыла</h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {gallery.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg overflow-hidden">
            <img src={item.src} alt={item.caption} className="w-full h-56 object-cover" />
            <p className="text-sm text-gray-600 p-3">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFrontGallery;
