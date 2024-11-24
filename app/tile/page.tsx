import Image from "next/image";

export default function Tile() {
  return (
    <>
      <div className="relative h-screen w-screen flex flex-col items-center">
        {/* Full-Size Image Aligned to the Top */}
        <div className="relative w-full h-full min-w-full">
          <Image
            src="/IMG_8314.jpg"
            alt="Full-size hero background"
            quality={100}
            priority={true}
            className="absolute top-0 left-0 object-right"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 grid grid-rows-[60px_1fr_60px] items-end justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <div className="flex flex-col gap-3 row-start-2 items-center sm:items-start text-white bg-gray-900/50 p-10 px-30">
            <div className="font-bold">
              Quality tile installation
            </div>
            <div>
              <ul className="list-inside list-disc text-sm pl-0 sm:text-left">
                <li>Bathrooms</li>
                <li>Custom showers</li>
                <li>Backsplashes</li>
                <li>Floors</li>
                <li>Carpentry</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
