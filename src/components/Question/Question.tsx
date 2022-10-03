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


<<<<<<< HEAD
const Question = ({ title, questionText, date, contractAddress, reward}: QuestionProps) => {
=======
const Question = ({ title, questionText, date, contractAddress }: QuestionProps) => {
>>>>>>> b607124908ef17d99dc5b81f86c26501508854e7
  const navigate = useNavigate();
  const { appModel, dispatch } = useAppModel();

  return (
    <div className='QuestionWrapper'>
      <h3 className="questionTitle" onClick={() => {
<<<<<<< HEAD
        dispatch({type: AppReducerActionTypeEnum.HandleCurrQuestion, title: title, description: questionText, date: date, contractAddress: contractAddress, reward: reward})
=======
        dispatch({ type: AppReducerActionTypeEnum.HandleCurrQuestion, title: title, description: questionText, date: date, contractAddress: contractAddress })
>>>>>>> b607124908ef17d99dc5b81f86c26501508854e7
        navigate("/singleQuestion")

      }}>
        {title}
      </h3>
      <p className="questionText">{questionText}</p>

      <div className="questionFooter">
        <p className="questionDate">{date}</p>
        <div className="tonAmount">79 💎</div>
      </div>
    </div>

  );
}

export default Question;