export interface IReactSubQuestion {
    id: string;
    key: string;
    question?: string;
    answer?: string;
    isQuestion: boolean;
    subQuestions?: IReactSubQuestion[]
}
