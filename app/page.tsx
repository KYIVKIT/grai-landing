export default function Home() {
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden">

      {/* ФОН */}
      <img
        src="/fon.png"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />

      {/* TOP-BAR */}
      <div className="fixed top-0 left-0 w-full h-20 bg-white/10 backdrop-blur-2xl flex justify-between items-center px-10 z-50">
        {/* ЛОГО */}
        <img src="/logo.png" className="h-30 w-auto" />

        {/* НЕОНОВАЯ КНОПКА */}
        <img src="/knop.png" className="h-14 cursor-pointer" />
      </div>

      {/* КОНТЕНТ НИЖЕ БАРА */}
      <div className="flex flex-col items-center mt-40">

        {/* ВЕРХНИЕ ТРИ ИКОНКИ */}
        <div className="flex gap-14 mt-10">

          {/* Create Waves */}
          <div className="flex flex-col items-center">
            <img src="/dela.png" className="w-44" />
            <p className="text-white text-xl mt-4">Create Waves</p>
          </div>

          {/* Manage Tasks */}
          <div className="flex flex-col items-center">
            <img src="/artist.png" className="w-44" />
            <p className="text-white text-xl mt-4">Manage Tasks</p>
          </div>

          {/* Gain Insights */}
          <div className="flex flex-col items-center">
            <img src="/volni.png" className="w-44" />
            <p className="text-white text-xl mt-4">Gain Insights</p>
          </div>

        </div>

        {/* === ТРИ КВАДРАТА (AUDITORY / KING / REITING) === */}
        <div className="relative w-full flex justify-center items-start gap-[52px] mt-24">

          {/* Левый — AUDITORY */}
          <div className="relative w-[320px] h-[320px]">
            <img
              src="/auditory.png"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Центр — KING */}
          <div className="relative w-[320px] h-[320px]">
            <img
              src="/king.png"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Правый — REITING */}
          <div className="relative w-[320px] h-[320px]">
            <img
              src="/reiting.png"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* ИКОНКИ ПОВЕРХ КВАДРАТОВ */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-16">

            {/* Start a Wave */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#7A3FFF] flex justify-center items-center bg-black/20 backdrop-blur-md">
                <img src="/minivolna.png" className="w-5 h-5" />
              </div>
              <p className="text-white text-lg">Start a Wave</p>
            </div>

            {/* Track Progress */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#7A3FFF] flex justify-center items-center bg-black/20 backdrop-blur-md">
                <img src="/minigrafik.png" className="w-5 h-5" />
              </div>
              <p className="text-white text-lg">Track Progress</p>
            </div>

            {/* Reap Rewards */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#7A3FFF] flex justify-center items-center bg-black/20 backdrop-blur-md">
                <img src="/minigalka.png" className="w-5 h-5" />
              </div>
              <p className="text-white text-lg">Reap Rewards</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
