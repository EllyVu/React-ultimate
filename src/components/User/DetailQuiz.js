import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"
import { getDataQuiz } from '../../Services/apiServices'
import _ from "lodash"
import "./DetailQuiz.scss"

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();

    const quizId = params.id;

    useEffect(() => {
        FetchQuestion();
    }, [quizId])

    const FetchQuestion = async () => {
        let res = await getDataQuiz(quizId)
        console.log('check question', res);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image
                        }
                        answers.push(item.answers)
                    })
                    return { questionId: key, answers, questionDescription, image }
                }
                )
                .value()
        }
    }
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId} :  {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="question-body">
                    <img />
                </div>
                <div className="question-content">
                    <div className="questions">
                        Question 1:   How are u Doing ???
                    </div>
                    <div className="answer">
                        <div className="a-child">A. câu trả lời 1 </div>
                        <div className="b-child">B. câu trả lời 2</div>
                        <div className="c-child">C. câu trả lời 3</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-warning">Prev</button>
                    <button className="btn btn-info">Next</button>
                </div>
            </div>
            <div className="right-content">
                count down

            </div>
        </div>
    )
}

export default DetailQuiz;