import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

export function TopPage(): JSX.Element {

  return (
    <>
      <div className=" h-full flex flex-col items-center justify-center gap-y-14">
        <h1 className="text-6xl">Animal Quiz !</h1>
        <div className="">
          <Link to="/pages/quiz/start">
            <Button size="lg">Start!</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
