import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@nextui-org/react";

const QuizPage = () => {
    const [quiz, setQuiz] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");
    const { quizId } = useParams();

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value);
    };

    useEffect(() => {
        (async () => {
            const response = await fetch("/api/quiz/generate");
            const quiz = await response.json();
            setQuiz(quiz);
        })()
    }, []);

    return (
        <div>
            <h1>{quizId}問目</h1>
            <div>
                <img src="" alt="" />
                <p>{quiz}</p>
            </div>
            <div>
                <input type="text" name="" id="" placeholder="答えを入力してください" onChange={handleAnswerChange} />
            </div>
            <Button>答え合わせ</Button>
        </div>
    )
};

export default QuizPage;