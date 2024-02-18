import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { QuizResultState } from "../states/quizResult";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useCorrectCounter } from "../hooks/useCorrectCounter";
import { useLifeCounter } from "../hooks/useLifeCounter";

const QuizResult = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { animalName, quizId } = useParams();
    const correctCounter = useCorrectCounter();
    const lifeCounter = useLifeCounter();
    const navigate = useNavigate();
    if (quizId === undefined) {
        throw new Error("quizId is undefined");
    }

    const { isCorrect } = useRecoilValue(QuizResultState(quizId));

    const redirectToFinalResultPage = () => {
        navigate(`/pages/quiz/${animalName}/result`, { replace: true});
    };


    return (
        <>
            <div className="flex flex-col gap-y-10 pt-5 items-center">
                <h1 className="w-fit mx-auto text-3xl border-b border-black">採点結果</h1>
                <div className="flex flex-col items-center gap-y-10">
                    <div>
                        {isCorrect ? '🎉' : '😢'}
                    </div>
                    <p className="text-5xl">{isCorrect ? '正解！' : '残念'}</p>
                </div>
                <div className="flex gap-x-8">
                    <Button onPress={onOpen}>ここで終わる</Button>
                    <Link to={`/pages/quiz/${animalName}/${Number(quizId) + 1}`} replace={true}><Button>次のクイズへ</Button></Link>
                </div>
            </div>
            <Modal isOpen={isOpen} size="md" onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">本当にやめますか？</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col gap-y-5">
                                    <p>現在の正解数: {correctCounter.counter}</p>
                                    <p>残りライフ: {lifeCounter.life}</p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    閉じる
                                </Button>
                                <Button color="primary" onPress={() => { onClose(); redirectToFinalResultPage() }}>
                                    やめる
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )

};

export default QuizResult;