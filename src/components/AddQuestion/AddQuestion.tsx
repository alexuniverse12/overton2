// export type QuestionProps = {
    // title: string,
    // questionText: string,
    // date: string
//   }

import { useState } from "react";
import "./AddQuestion.css"
  
//   const AddQuestion = ({title, questionText, date}: QuestionProps) => {
  const AddQuestion = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    if(isOpen){
        return(
            <div className="openedScreenWrapper">
                <div className="formWrapper">
                    <div className="closeWrapper" onClick={() => setOpen(false)}>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="plusWrapper" onClick={() => setOpen(true)}>
                +
            </div>
        );
    }
  }
  
  export default AddQuestion;