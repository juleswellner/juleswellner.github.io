//import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="font-bold">
          Expert home restoration
        </div>
        <ul className="list-inside list-disc text-sm text-center sm:text-left">
        <li>
          Tile installation: (bathrooms, custom showers, backsplashes, floors)
        </li>
        <li>
          Carpentry
        </li>
        <li>
          Painting
        </li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
