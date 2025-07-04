//import Image from "next/image";
import PhotoGallery from '../components/photo-gallery'

const photos: string[] = [
  '/DSC09367.JPG',
  '/DSC09368.JPG',
  '/DSC09392.JPG',
  '/DSC09382.JPG',
  '/DSC09424.JPG',
  '/DSC09416.JPG',
  '/IMG_8012.jpg',
  '/IMG_8032.jpg',
  '/IMG_0222.jpg',
  '/IMG_0226.jpg',
  '/IMG_0229.jpg',
  '/IMG_0236.jpg',
  '/IMG_0020.jpg',
  '/jackalope.jpg',
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
