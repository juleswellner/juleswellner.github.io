// components/PhotoGallery.tsx
import React from 'react';

interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <div className="">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-auto object-cover mb-4"
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
