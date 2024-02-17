import {Outlet} from "react-router-dom";

export function Layout(): JSX.Element {
  return (
    <div>
      <header className="flex h-8 m-4 items-center">
        
      </header>
      <main className="bg-[#F9FBFE] h-[calc(100vh-8rem)] py-8 md:py-14 px-4 flex justify-center">
        <div className="w-full md:max-w-[760px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
