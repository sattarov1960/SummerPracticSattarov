import React from 'react';

const gallery = [
  {
    src: 'https://avatars.mds.yandex.net/i?id=2acb87759c6d1b89f94e257e5c206f6c22affeaa-2368479-images-thumbs&n=13',
    caption: 'Хатынь, Беларусь, 1943'
  },
  {
    src: 'https://avatars.mds.yandex.net/i?id=ae6ed269ff5ddb0a85bc4c0f519c81c95a033e76-8491894-images-thumbs&n=13',
    caption: 'Бабий Яр, Киев, 1941'
  },
  {
    src: 'https://avatars.mds.yandex.net/i?id=e765fefa9a8114af85d5ff72978d4c2ea653e073-5014030-images-thumbs&n=13',
    caption: 'Саласпилс, Латвия, 1942'
  },
  {
    src: 'https://avatars.mds.yandex.net/i?id=a7914623317d09a3cdefe512b489d8c578ecf2af-8186070-images-thumbs&n=13',
    caption: 'Дробицкий Яр, Харьков, 1941'
  },
  {
    src: 'https://i.ytimg.com/vi/BvRON6nGNt4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUyhSMA8=&amp;rs=AOn4CLDK5bZJjNDF9YLy6YXPbpdWQsYqRw',
    caption: 'Ола, Беларусь, 1944'
  },
  {
    src: 'https://avatars.mds.yandex.net/i?id=ae2864a940c989e05c2115a389267dabc5659a1c-10257390-images-thumbs&n=13',
    caption: 'Освенцим, Польша, 1940–1945'
  },
  {
    src: 'https://avatars.mds.yandex.net/i?id=6ae09e3b4ab78783247ed49e5828043d3941d0e7-12441729-images-thumbs&n=13',
    caption: 'Ейск, Краснодарский край, 1942'
  },
  {
    src: 'https://avatars.mds.yandex.net/i?id=9caf08581e8e1100dbad5d1893b18e44b774d170-5272099-images-thumbs&n=13',
    caption: 'Катынь, Смоленская область, 1940'
  },
  {
    src: 'https://avatars.mds.yandex.net/i?id=3142bb173649e017eecf53e9809ebe128ab9bf86-5859957-images-thumbs&n=13',
    caption: 'Минск, гетто и Тростенец, 1941'
  }
];


const GallerySection = () => (
  <section className="py-12 bg-[#181818]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-6">Документальные фото</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item, idx) => (
          <div key={idx} className="rounded overflow-hidden">
            <img src={item.src} alt={item.caption} className="w-full h-60 object-cover grayscale" />
            <p className="text-sm text-gray-400 mt-2">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
