export type AppModelType = {
    questions: QuestionType[],
    signState: any,
    currQuestion: any
} 

export type QuestionType = {
    questionText: string, 
    questionAnswers: string[]
} 