import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppModel from "../../hooks/useMainReducer";
import { AppReducerActionTypeEnum } from "../../state/mainReducer";
import "./Question.css"


export type QuestionProps = {
  title: string,
  questionText: string,
  date: string

}


const Question = ({ title, questionText, date }: QuestionProps) => {
  const navigate = useNavigate();
  const { appModel, dispatch } = useAppModel();

  return (
    <div className='QuestionWrapper'>
      <h3 className="questionTitle" onClick={() => {
        dispatch({type: AppReducerActionTypeEnum.HandleCurrQuestion, title: title, description: questionText, date: date})
        console.log(appModel, "WHY")
        navigate("/singleQuestion")
        
      }}>
        {title}
      </h3>
      <p className="questionText">{questionText}</p>
      <p className="questionDate">{date}</p>
    </div>

  );
}

export default Question;