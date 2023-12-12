import { reactQuestions } from "../data";
import Question from "./Question";

const Questions = () => {
    return (
        <div >
            {reactQuestions.map((question) =>
            (
                <Question reactQuestions={question} key={question.id}/>
            ))

            }
        </div>
    )
}
export default Questions;