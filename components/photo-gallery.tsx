// components/PhotoGallery.tsx
import React from 'react';

interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <div className="min-h-screen">
      {photos.map((photo, index) => (
        <img
          className="object-scale-down max-h-full m-auto object-cover mb-5 max-h-screen"
          key={index}
          src={photo}
          alt={`Gallery image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
