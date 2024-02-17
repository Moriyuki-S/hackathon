import { Outlet, useParams } from "react-router-dom";
import { useLifeCounter } from "../hooks/useLifeCounter";
import { useRecoilValue } from "recoil";
import { ThemeAnimal } from "../states/themeAnimal";

export function Layout(): JSX.Element {
  const { getCurrenntLife } = useLifeCounter();
  const { animalName } = useParams();
  const lifeCount = getCurrenntLife();

  return (
    <div>
      <header className="flex h-8 m-4 items-center justify-between">
        <h1>選択した動物: {animalName  !== undefined ? animalName: "なし"}</h1>
        <div className="flex">
          <p className="pr-2">ライフ : </p>
          <ul className="flex gap-x-1">
            {
              Array.from({ length: lifeCount }).map((_, index) => {
                return <li key={index}>❤️</li>;
              })
            }
          </ul>
        </div>
      </header>
      <main className="bg-[#F9FBFE] h-[calc(100vh-8rem)] py-8 md:py-14 px-4 flex justify-center">
        <div className="w-full md:max-w-[760px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
