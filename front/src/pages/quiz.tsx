import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Photo } from "../../../@types/Photo";

const QuizPage = () => {
    const [quiz, setQuiz] = useState<string>("");
    const [photo, setPhoto] = useState<Photo>();
    const [answer, setAnswer] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { quizId, animalName } = useParams();

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value);
    };

    useEffect(() => {
        (async () => {
            const photoResponse = await fetch(`/api/images/search?animalName=${animalName}`);
            const photos = await photoResponse.json();
            setPhoto(photos[Number(quizId)]);
            const guizResonse = await fetch(`/api/quiz/generate`);
            const quizData = guizResonse.json();
            console.log(quizData);
        })();
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{quizId}問目</h1>
            <div>
                <img src={photo?.url_c} alt="クイズの画像" />
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