import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppModel from "../../hooks/useMainReducer";
import { AppReducerActionTypeEnum } from "../../state/mainReducer";
import "./Question.css"


export type QuestionProps = {
  title: string,
  questionText: string,
  date: string,
  contractAddress: string,
  reward: any

}


const Question = ({ title, questionText, date, contractAddress, reward}: QuestionProps) => {
  const navigate = useNavigate();
  const { appModel, dispatch } = useAppModel();

  return (
    <div className='QuestionWrapper'>
      <h3 className="questionTitle" onClick={() => {
        dispatch({type: AppReducerActionTypeEnum.HandleCurrQuestion, title: title, description: questionText, date: date, contractAddress: contractAddress, reward: reward})
        navigate(`/singleQuestion?title=${title}&questionText=${questionText}&date=${date}&contractAddress=${contractAddress}&reward=${reward}`)

      }}>
        {title}
      </h3>
      <p className="questionText">{questionText}</p>

      <div className="questionFooter">
        <p className="questionDate">{date}</p>
        <div className="tonAmount">{reward} 💎</div>
      </div>
    </div>

  );
}

export default Question;