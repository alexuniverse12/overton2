
import "./Answer.css"

export type AnswerProps = {
    title: string,
    answerText: string,
    date: string
}


const Answer = ({ title, answerText, date }: AnswerProps) => {

    return (
        <div className='AnswerWrapper'>
            <h3 className="answerTitle">{title}</h3>
            <p className="answerText">{answerText}</p>

            <div className="answerFooter">
                <p className="answerDate">{date}</p>
                <button className="giveRewardBtn">Give reward</button>
            </div>
        </div>

    );
}

export default Answer;