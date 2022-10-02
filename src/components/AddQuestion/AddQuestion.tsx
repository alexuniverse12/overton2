// export type QuestionProps = {
// title: string,
// questionText: string,
// date: string
//   }

import { useEffect, useState } from "react";
import useAppModel from "../../hooks/useMainReducer";
import { AppReducerActionTypeEnum } from "../../state/mainReducer";
import InputForm from "../InputForm/InputForm";
import { useForm } from "react-hook-form";
import "./AddQuestion.css"
import plus from "../../assets/Vector.svg";

//   const AddQuestion = ({title, questionText, date}: QuestionProps) => {
const AddQuestion = () => {
    const { appModel, dispatch } = useAppModel();
    const [isOpen, setOpen] = useState<boolean>(false);

    const onSubmit = (data: any) => console.log(data);

    // useEffect(() => {
    //     dispatch({type: AppReducerActionTypeEnum.SaveDraftedQuestion, draftedQuestionText: watch("questionText")})
    // }, [isOpen])

    // console.log(appModel)


    if (isOpen) {
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);
        return (
            <div className="openedScreenWrapper" onClick={function (e) { if (e.target === e.currentTarget) setOpen(false) }}>
                <InputForm inputFieldName="draftedQuestion" />
            </div>
        )
    } else {
        document.body.style.overflow = "unset";
        return (
            <div className="plusWrapper" onClick={() => setOpen(true)}>
                <img src={plus} alt="" />
            </div>
        );
    }
}

export default AddQuestion;