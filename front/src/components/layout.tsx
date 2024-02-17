import {Outlet} from "react-router-dom";
import { useLifeCounter } from "../hooks/useLifeCounter";

export function Layout(): JSX.Element {
  const { getCurrenntLife } = useLifeCounter();
  const lifeCount = getCurrenntLife();

  return (
    <div>
      <header className="flex h-8 m-4 items-center">
        <h1>タイトル</h1>
        <div className="flex">
          <p>残りライフ: </p>
          {
            (() => {
              for (let i = 0; i < lifeCount; i++) {
                return <p>💖</p>
              }
            })()
          }
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
