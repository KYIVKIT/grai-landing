
export default function Home() {
  return (
    <main className="w-full min-h-screen relative">

      <img src="/fon.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-40" />

      <div className="w-full flex justify-center pt-10">
        <img src="/logo.png" className="w-40" />
      </div>

      <div className="flex flex-col items-center mt-16">

        <img src="/volni.png" className="w-1/2" />

        <div className="flex gap-10 mt-10">
          <img src="/dela.png" className="w-40" />
          <img src="/artist.png" className="w-40" />
          <img src="/auditory.png" className="w-40" />
        </div>

        <div className="flex gap-8 mt-16">
          <img src="/knop.png" className="h-16 cursor-pointer" />
          <img src="/knop2.png" className="h-16 cursor-pointer" />
        </div>

      </div>

    </main>
  );
}
