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
            connectionState: null
        }
    }
}

export type AppReducerActionType = {
    type: AppReducerActionTypeEnum.AddWallet,
    payload: any
}  | {
    type: AppReducerActionTypeEnum.SetConnectionState,
    payload: RemoteConnectPersistance
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
    if (action.type === AppReducerActionTypeEnum.SetConnectionState) {
        return {
            ...state,
            signState: action.payload
        };
    }
    

    return state;
}

export const initialAppState = getInitialState();