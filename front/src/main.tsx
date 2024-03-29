import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TopPage } from "./pages/top.tsx";
import { AnswerPage } from "./pages/answer.tsx";
import { Layout } from "./components/layout.tsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import StartPage from "./pages/start.tsx";
import QuizPage from "./pages/quiz.tsx";
import { RecoilRoot } from "recoil";
import QuizResult from "./pages/quizResult.tsx";
import QuizFinalResult from "./pages/quizFinalResult.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TopPage />,
      },
      {
        path: "/pages/quiz/start",
        element: <StartPage />
      },
      {
        path: "/pages/quiz/:animalName/:quizId",
        element: <QuizPage />
      },
      {
        path: "/pages/quiz/:animalName/:quizId/result",
        element: <QuizResult />
      },
      {
        path: "/pages/quiz/:animalName/result",
        element: <QuizFinalResult />
      },
      {
        path: "/pages/:pageTitle",
        element: <AnswerPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </NextUIProvider>
  </React.StrictMode>,
);
