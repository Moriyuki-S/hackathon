import { atomFamily } from "recoil";

type QuizResult = {
    readonly quizid: string;
    isCorrect: boolean;
};

export const QuizResultState = atomFamily<QuizResult, string>({
    key: 'quizResult',
    default: quizId => {
        return {
            quizid: quizId,
            isCorrect: false
        };
    }
});