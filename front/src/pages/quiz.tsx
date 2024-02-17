import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { Button, Input, CircularProgress } from "@nextui-org/react";
import { Photo } from "../../../@types/Photo";
import { useCorrectCounter } from "../hooks/useCorrectCounter";
import { useLifeCounter } from "../hooks/useLifeCounter";

const QuizPage = () => {
    const [quiz, setQuiz] = useState<string>("");
    const [photoDescription, setPhotoDescription] = useState<string>('');
    const [photo, setPhoto] = useState<Photo>();
    const [answer, setAnswer] = useState<string>("");
    const [isQuizLoading, setIsQuizLoading] = useState<boolean>(true);
    const [isJudgeLoading, setIsJudgeLoading] = useState<boolean>(false);
    const { quizId, animalName } = useParams();
    const correctCounterMethods = useCorrectCounter();
    const lifeCountMethods = useLifeCounter();

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value);
    };

    useEffect(() => {
        (async () => {
            const photoResponse = await fetch(`/api/images/search?animalName=${animalName}`);
            const photos = await photoResponse.json();
            setPhoto(photos[Number(quizId)]);
            const photoDescriptionPromise = await fetch(`/api/quiz/generate`);
            setPhotoDescription(await photoDescriptionPromise.json());
            setIsQuizLoading(false);
        })();
    }, []);

    const judgeAnswer = async () => {
        setIsJudgeLoading(true);
        //const res = await fetch('/');
        //const isCorrect = await res.json() as boolean;
        setTimeout(() => {
            setIsJudgeLoading(false);
        }, 2000);
        /*
        if (isCorrect) {
            correctCounterMethods.increment();
        } else {
            lifeCountMethods.decrement();
        }
        */

        redirect(`/pages/quiz/${animalName}/${Number(quizId)}/result`);
    }

    if (isQuizLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                <CircularProgress label={"クイズを生成中"} />
            </div>
        );
    }

    return (
        <div className="relative">
            <div className={`${isJudgeLoading ? "flex" : "hidden"}`}>
                <div className="w-screen h-screen opacity-35 z-30 bg-slate-50 absolute"></div>
                <CircularProgress label={"答え合わせ中"} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40" />
            </div>
            <h1 className="w-fit mx-auto text-[36px] border-b border-black">{quizId}問目</h1>
            <div className="pt-8">
                <img src={photo?.url} alt="クイズの画像" className="aspect-auto" />
                <p className="w-fit mx-auto mt-8 text-xl">この動物は何でしょう？</p>
            </div>
            <div className="pt-8">
                <Input type="text" label="答えを入力してください" onChange={handleAnswerChange} />
            </div>
            <div className="w-fit mx-auto mt-8">
                <Button onClick={judgeAnswer}>答え合わせする</Button>
            </div>
        </div>
    )
};

export default QuizPage;