//import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2  sm:items-start">
        <div className="font-bold">
          Expert tile installation
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
      </main>
    </div>
  );
}
