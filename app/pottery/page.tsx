import PhotoGallery from '../../components/photo-gallery'

const photos: string[] = [
  './IMG_8306.jpg',
  './IMG_8309.jpg',
  './IMG_8310.jpg',
];

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-4 justify-center">
        <PhotoGallery photos={photos} />
      </div>
    </div>
  );
}
