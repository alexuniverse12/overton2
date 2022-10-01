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
    SetConnectionState = "SetConnectionState"
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
        }
    }
}

export type AppReducerActionType = {
    type: AppReducerActionTypeEnum.AddWallet,
}  
// | {
//     type: GameReducerActionTypeEnum.PickAnswer,
//     chosenAnswerIndex: number
// } | {
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
        console.log(state)
        return {
            ...state,
            signState: {
                qrOpened: true
            }
        };
    }
    

    return state;
}

export const initialAppState = getInitialState();