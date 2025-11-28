export default function Home() {
  return (
    <main className="w-full min-h-screen relative">

      {/* Фон */}
      <img
        src="/fon.png"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />

      {/* Лого */}
      <div className="w-full flex justify-center pt-10">
        <img src="/logo.png" className="w-40" />
      </div>

      {/* ВОЛНЫ + ВЕРХНИЕ ТРИ ИКОНКИ */}
      <div className="flex flex-col items-center mt-16">

        {/* Волны */}
        <img src="/volni.png" className="w-1/2" />

        {/* Верхние три большие иконки */}
        <div className="flex gap-14 mt-10">
          <div className="flex flex-col items-center">
            <img src="/dela.png" className="w-60" />
            <p className="text-white text-xl mt-4">Create Waves</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/artist.png" className="w-60" />
            <p className="text-white text-xl mt-4">Manage Tasks</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/auditory.png" className="w-60" />
            <p className="text-white text-xl mt-4">Gain Insights</p>
          </div>
        </div>

        {/* НИЖНИЙ РЯД — МИНИ-ИКОНКИ */}
        <div className="flex gap-16 mt-20">

          {/* Start a Wave */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#7A3FFF] flex justify-center items-center">
              <img src="/minivolna.png" className="w-5 h-5" />
            </div>
            <p className="text-white text-lg">Start a Wave</p>
          </div>

          {/* Track Progress */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#7A3FFF] flex justify-center items-center">
              <img src="/minigrafik.png" className="w-5 h-5" />
            </div>
            <p className="text-white text-lg">Track Progress</p>
          </div>

          {/* Reap Rewards */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#7A3FFF] flex justify-center items-center">
              <img src="/minigalka.png" className="w-5 h-5" />
            </div>
            <p className="text-white text-lg">Reap Rewards</p>
          </div>

        </div>

        {/* КНОПКИ */}
        <div className="flex gap-8 mt-20">
          <img src="/knop.png" className="h-16 cursor-pointer" />
          <img src="/knop2.png" className="h-16 cursor-pointer" />
        </div>

      </div>

    </main>
  );
}
