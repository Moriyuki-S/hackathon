import { Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const StartPage = () => {

    const [animalName, setAnimalName] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnimalName(e.target.value);
    };


    return (
        <div>
            <div>
                <Input type="text" label="動物名を入力してください" onChange={handleInputChange} />
            </div>
            <div>
                <Link to="/quiz/1">
                    <Button>始める</Button>
                </Link>
            </div>
        </div>
    );
}

export default StartPage;