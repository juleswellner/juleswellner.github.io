//import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          Jules Wellner is a sculptor based in Syracuse who works primarily with ceramics.
        </div>
        <div>
          Contact for information about commissioned portraits or other work:
        </div>
        <div>
          Call or text: <span className="font-bold">315 308-1239</span>
        </div>
        <div>
          Email: <span className="font-bold">jules@wellners.net</span>
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
