import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Button } from "@nextui-org/react";
import { useCorrectCounter } from "../hooks/useCorrectCounter";
import { useLifeCounter } from "../hooks/useLifeCounter";
import { MAX_LIFE } from "../models/Life";
import { Link, useParams } from "react-router-dom";

const QuizFinalResultPage = () => {
    
    const correctCounter = useCorrectCounter();
    const lifeCounter = useLifeCounter();
    const { animalName } = useParams();


    return (
        <div className="pt-14 flex flex-col items-center">
            <h1 className="text-4xl border-b border-black">最終成績</h1>
            <div className="w-full mt-10">
                <p className="w-fit mx-auto">お疲れさまでした！</p>
                <div className="w-full mt-10">
                    <Table>
                        <TableHeader>
                            <TableColumn className="text-center">動物 : {animalName}</TableColumn>
                            <TableColumn className="text-center">問題数 [問]</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key={1}>
                                <TableCell className="text-center" >正解数</TableCell>
                                <TableCell className="text-center">{correctCounter.counter}</TableCell>
                            </TableRow>
                            <TableRow key={2}>
                                <TableCell className="text-center">不正解数</TableCell>
                                <TableCell className="text-center">{MAX_LIFE - lifeCounter.life}</TableCell>
                            </TableRow>
                            <TableRow key={3}>
                                <TableCell className="text-center">連続正解数</TableCell>
                                <TableCell className="text-center">0</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="w-fit mx-auto mt-10">
                    <Link to="/" replace={true}><Button>ホームに戻る</Button></Link>
                </div>
            </div>
        </div>
    )
};

export default QuizFinalResultPage;