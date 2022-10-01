export type AppModelType = {
    questions: QuestionType[],
    signState: any
} 

export type QuestionType = {
    questionText: string, 
    questionAnswers: string[]
} 