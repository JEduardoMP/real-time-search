'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Photo } from '../data/photos';
import { APP_MESSAGES } from '../userFacingMessages';

interface PhotoRespose {
  results: Photo[];
}
export default function Gallery() {
  const { TITLE } = APP_MESSAGES.GALLERY;
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data: PhotoRespose) => {
        setPhotos(data.results);
      });
  }, []);

  console.log(photos);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>{TITLE}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {photos?.map((photo) => (
          <div key={photo.id} className='relative aspect-w-16 aspect-h-9'>
            <Image
              src={photo.image}
              alt={photo.name}
              width={1200}
              height={800}
              objectFit='cover'
              className='rounded-lg'
              loading='lazy'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2'>
              {photo.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
