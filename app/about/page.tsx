import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-screen flex flex-col items-center">
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

        {/* Overlay */}
        <div className="absolute inset-0 grid grid-rows-[20px_1fr_20px] items-end justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <div className="flex flex-col gap-3 row-start-2 items-center sm:items-start text-white bg-gray-900/25 p-10">
            <div>
              Jules Wellner is a traditional sculptor based in Syracuse, New York.
              <br />He works primarily with ceramics and is a student of
              <Link href="https://philippefaraut.com/" className="underline">Philippe Faraut</Link>.
            </div>
            <div>
              For information about commissioned portraits or other work:
            </div>
            <div>
              Call or text: <span className="font-bold">315 308-1239</span>
              <br />
              Email: <span className="font-bold">jules@wellners.net</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
