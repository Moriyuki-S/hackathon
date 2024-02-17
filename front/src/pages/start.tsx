import { Select, Button, SelectItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { ThemeAnimal } from "../states/themeAnimal";

const StartPage = () => {

    const ANIMALS_DATA = [
        { id: 1, name: "猫"},
        { id: 2, name: "犬"},
        { id: 3, name: "熊"},
        { id: 4, name: "猿"},
        { id: 5, name: "狼"},
        { id: 6, name: "狐"},
        { id: 7, name: "狸"},
    ];

    const [animalNameInput, setAnimalNameInput] = useState<string>('');
    const setThemeAnimal = useSetRecoilState(ThemeAnimal);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedAnimal = ANIMALS_DATA.find(animal => animal.id === Number(e.target.value));
        setAnimalNameInput(selectedAnimal?.name || "");
    };

    const handleSetThemeAnimal = () => {
        setThemeAnimal(animalNameInput);
    };

    return (
        <div className="h-full flex flex-col items-center gap-y-10">
            <div className="pt-10">
                <h1 className="text-2xl">動物を選んでクイズをスタート！</h1>
            </div>
            <div className="w-full">
                <Select 
                label="動物を選んでください"
                onChange={e => handleSelectChange(e)}
                >
                    {ANIMALS_DATA.map((animal) => (
                        <SelectItem key={animal.id} value={animal.name}>
                            {animal.name}
                        </SelectItem>
                    ))}
                </Select>
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