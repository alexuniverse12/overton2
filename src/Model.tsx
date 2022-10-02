export type AppModelType = {
    questions: QuestionType[],
    currDraftedQuestion: string,
    signState: any,
    currSingleQuestion: any
} 

export type QuestionType = {
    questionText: string, 
    questionAnswers: string[]
} 