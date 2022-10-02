//models
import { AppModelType, QuestionType } from '../Model';
import { RemoteConnectPersistance } from 'react-ton-x';

export enum AppStatesEnum {
    // Questions = "Questions",
    // Home = "Home",
    // End = "End",
    // Intro = "Intro",
    // Transition = "Transition"
}

export enum AppReducerActionTypeEnum {
    AddWallet = "AddWallet",
    SaveDraftedQuestion = "SaveDraftedQuestion",
    HandleCurrQuestion = "HandleCurrQuestion"
    // ShowIntro = "ShowIntro",
    // StartGame = "StartGame",
    // PickAnswer = "PickAnswer",
    // GoNextQuestion = "GoNextQuestion",
    // EndGame = "EndGame",
    // GoHome = "GoHome",
    // ChangeCurrShownColor = "ChangeCurrShownColor",
    // ShowTransition = "ShowTransition",
}


export const getInitialState = (): AppModelType => {
    return {
        questions: [],
        signState: {
            qrOpened: false
        },
        // currDraftedQuestion: "",
        currQuestion: null
        
    }
}

export type AppReducerActionType = {
    type: AppReducerActionTypeEnum.AddWallet,
} | {
    type: AppReducerActionTypeEnum.SaveDraftedQuestion,
    draftedQuestionText: string
} | {
    type: AppReducerActionTypeEnum.HandleCurrQuestion,
    title: string,
    description: string,
    date: string
} 
//     type: GameReducerActionTypeEnum.GoNextQuestion,
//     timeLeft: number
// } | {
//     type: GameReducerActionTypeEnum.ShowTransition,
// } |  {
//     type: GameReducerActionTypeEnum.EndGame,
// } | {
//     type: GameReducerActionTypeEnum.ChangeCurrShownColor,
//     payload: string
// } | {
//     type: GameReducerActionTypeEnum.GoHome,
// }

export const reducer = (state: AppModelType, action: AppReducerActionType): AppModelType => {
    if (action.type === AppReducerActionTypeEnum.AddWallet) {
        return {
            ...state,
            signState: {
                qrOpened: true
            }
        };
    }
    // if (action.type === AppReducerActionTypeEnum.SaveDraftedQuestion) {
    //     return {
    //         ...state,
    //         currDraftedQuestion: action.draftedQuestionText
    //     };
    // }
    if (action.type === AppReducerActionTypeEnum.HandleCurrQuestion) {
        console.log(state, "ABOBA")
        return {
            ...state,
            currQuestion: {
                title: action.title,
                desctiption: action.description,
                date: action.date
            }
        };
    }
    

    return state;
}

export const initialAppState = getInitialState();