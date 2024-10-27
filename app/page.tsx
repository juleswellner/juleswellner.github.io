import Image from "next/legacy/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen bg-black flex flex-col items-center">

      {/* Full-Size Image Aligned to the Top */}
      <div className="relative w-full h-full min-w-full">
        <Image
          src="/jules-portrait.jpg"
          alt="Full-size hero background"
          layout="fill"
          objectFit="cover" // Ensures the entire image is visible without cropping
          quality={100}
          priority={true}
          className="absolute top-0 left-0"
        />
      </div>

      {/* Overlay Content (Optional) 
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold">Welcome to My Website</h1>
        <p className="text-lg mt-4">This is the home page with a full-size image.</p>
      </div>
      */}
    </div>

  );
}
