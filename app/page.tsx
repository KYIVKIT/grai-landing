export default function Home() {
  return (
    <main className="w-full min-h-screen relative">

      {/* Фон */}
      <img
        src="/fon.png"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />

      {/* СТЕКЛЯННЫЙ TOP-BAR */}
      <div className="fixed top-0 left-0 w-full h-20 bg-white/5 backdrop-blur-xl flex items-center px-8 z-50">
        <img src="/logo.png" className="h-10 w-auto" />
      </div>

      {/* Контент ниже бара */}
      <div className="flex flex-col items-center mt-32">

        {/* Верхние три большие иконки */}
        <div className="flex gap-14 mt-10">

          {/* 1 — Create Waves */}
          <div className="flex flex-col items-center">
            <img src="/dela.png" className="w-60" />
            <p className="text-white text-xl mt-4">Create Waves</p>
          </div>

          {/* 2 — Manage Tasks */}
          <div className="flex flex-col items-center">
            <img src="/artist.png" className="w-60" />
            <p className="text-white text-xl mt-4">Manage Tasks</p>
          </div>

          {/* 3 — Gain Insights */}
          <div className="flex flex-col items-center">
            <img src="/volni.png" className="w-60" />
            <p className="text-white text-xl mt-4">Gain Insights</p>
          </div>

        </div>

        {/* Нижние мини-иконки */}
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

        {/* Кнопки */}
        <div className="flex gap-8 mt-20">
          <img src="/knop.png" className="h-16 cursor-pointer" />
          <img src="/knop2.png" className="h-16 cursor-pointer" />
        </div>

      </div>
    </main>
  );
}
