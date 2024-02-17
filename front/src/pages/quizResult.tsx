import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { QuizResultState } from "../states/quizResult";

const QuizResult = () => {

    const { quizId } = useParams();
    if (quizId === undefined) {
        throw new Error("quizId is undefined");
    }

    const { isCorrect } = useRecoilValue(QuizResultState(quizId));


    return (
        <div>
            <h1 className="w-fit mx-auto">採点結果</h1>
            <div>
                <div>
                    {isCorrect ? '🎉' : '😢'}
                </div>
                <p>{isCorrect ? '大正解！' : '残念'}</p>
            </div>
        </div>
    )

};

export default QuizResult;