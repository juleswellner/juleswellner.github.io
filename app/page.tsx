import Image from "next/image";

export default function Home() {
  return (
    (<div className="relative h-screen w-screen bg-black flex flex-col items-center">
      {/* Full-Size Image Aligned to the Top */}
      <div className="relative w-full h-full min-w-full">
        <Image
          src="/jules-portrait.jpg"
          alt="Full-size hero background"
          quality={100}
          priority={true}
          className="absolute top-0 left-0"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
      </div>
    </div>)
  );
}
