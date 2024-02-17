import { Link } from "react-router-dom";

export function TopPage(): JSX.Element {

  return (
    <>
      <div>
        <h1>Animal Quiz !</h1>
        <div>
          <Link to="/pages/quiz/start">
            <button>Start!</button>
          </Link>
        </div>
      </div>
    </>
  );
}
