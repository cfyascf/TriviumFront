export interface IQuestionData {
    title: string,
    formId: string
}

export interface IOption {
    description: string,
    isRight: boolean
}

export interface IQuestion {
    question: IQuestionData,
    options: IOption[]
}