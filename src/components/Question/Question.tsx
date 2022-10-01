import "./Question.css"

export type QuestionProps = {
  title: string,
  questionText: string,
  date: string
}


const Question = ({title, questionText, date}: QuestionProps) => {

  return (
    <div className='QuestionWrapper'>
      <h3>{title}</h3>
      <p>{questionText}</p>  
      <p>{date}</p>  
    </div>
    
  );
}

export default Question;