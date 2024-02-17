import { redirect } from "react-router-dom";
export const MAX_LIFE = 5;
export const MIN_LIFE = 0;

export class Life {
    private _life: number = MAX_LIFE;

    public getCurrentLife = (): number => {
        return this._life;
    }

    public decrementLife = (): void => {
        this._life--;
        if (this._life < MIN_LIFE) {
            redirect('/gameover');
        }
    }
};