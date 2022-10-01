export type AppModelType = {
    questions: QuestionType[],
    currDraftedQuestion: string,
    signState: any
} 

export type QuestionType = {
    questionText: string, 
    questionAnswers: string[]
} 