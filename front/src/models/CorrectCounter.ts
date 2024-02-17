export class CorrectCounter {
    private _count: number = 0;

    public getCurrenntCount = (): number => {
        return this._count;
    };

    public incrementCount = (): void => {
        this._count++;
    }

    public resetCount = (): void => {
        this._count = 0;
    }
};