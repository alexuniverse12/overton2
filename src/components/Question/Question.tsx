import "./Question.css"

export type QuestionProps = {
  title: string,
  questionText: string,
  date: string
}


const Question = ({ title, questionText, date }: QuestionProps) => {

  return (
    <div className='QuestionWrapper'>
      <h3 className="questionTitle">{title}</h3>
      <p className="questionText">{questionText}</p>
      <p className="questionDate">{date}</p>
    </div>

  );
}

export default Question;