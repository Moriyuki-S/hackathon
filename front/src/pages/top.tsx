import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

export function TopPage(): JSX.Element {

  return (
    <>
      <div>
        <h1>Animal Quiz !</h1>
        <div>
          <Link to="/pages/quiz/start">
            <Button>Start!</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
