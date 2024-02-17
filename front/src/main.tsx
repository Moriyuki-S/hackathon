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
        path: "/pages/quiz/:quizId",
        element: <QuizPage />
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
