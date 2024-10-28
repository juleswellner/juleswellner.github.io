//import Image from "next/image";
import PhotoGallery from '../components/photo-gallery'

const photos: string[] = [
  '/IMG_8012.jpg',
  '/IMG_8025.jpg',
  '/IMG_8032.jpg',
  '/IMG_0222.jpg',
  '/IMG_0226.jpg',
  '/IMG_0229.jpg',
  '/IMG_0236.jpg',
  '/IMG_80862.jpg',
  '/IMG_8090.jpg',
  '/IMG_0020.jpg',
  '/IMG_00256.jpg',
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
