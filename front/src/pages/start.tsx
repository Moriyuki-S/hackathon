import { Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { ThemeAnimal } from "../states/themeAnimal";

const StartPage = () => {

    const [animalNameInput, setAnimalNameInput] = useState<string>('');
    const setThemeAnimal = useSetRecoilState(ThemeAnimal);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnimalNameInput(e.target.value);
    };

    const handleSetThemeAnimal = () => {
        setThemeAnimal(animalNameInput);
    };

    return (
        <div>
            <div>
                <Input type="text" label="動物名を入力してください" onChange={handleInputChange} />
            </div>
            <div>
                <Link to={`/pages/quiz/${animalNameInput}/1`}>
                    <Button onClick={handleSetThemeAnimal}>始める</Button>
                </Link>
            </div>
        </div>
    );
}

export default StartPage;