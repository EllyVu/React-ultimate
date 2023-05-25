import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom"
import { getDataQuiz, postSubmitQuiz } from '../../Services/apiServices'
import _ from "lodash"
import "./DetailQuiz.scss"
import Question from "./Question";
import ModalResult from "./ModalResult";

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();

    const quizId = params.id;
    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);
    const [isShowModalResult, setShowModalResult] = useState(false);
    const [dataModalResult, setDataModalResult] = useState({})
    useEffect(() => {
        FetchQuestion();
    }, [quizId])

    const FetchQuestion = async () => {
        let res = await getDataQuiz(quizId)
        // console.log('check question', res);
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
                        item.answers.isSelected = false;
                        answers.push(item.answers)
                    })
                    return { questionId: key, answers, questionDescription, image }
                }
                )
                .value()
            setDataQuiz(data)
            console.log(data);
        }
    }
    const handlePrev = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1)
    }
    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1)
            setIndex(index + 1)
    }

    const HanleCheckbox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(item => +item.questionId === +questionId)
        if (question && question.answers) {

            let b = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
            question.answers = b;
            // console.log(b);
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionId)
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone)
        }

    }

    const handleFinishQuiz = async () => {
        console.log('check data before submit: ', dataQuiz);
        let payload = {
            quizId: +quizId,
            answers: [],
        };
        let answers = [];
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.forEach(questions => {

                let questionId = questions.questionId;
                let userAnswerId = [];
                questions.answers.forEach(a => {
                    if (a.isSelected === true) {
                        userAnswerId.push(a.id)
                    }
                })
                answers.push({
                    questionId: +questionId,
                    userAnswerId: userAnswerId
                })
            })
            payload.answers = answers;

            //submitapi
            let res = await postSubmitQuiz(payload);
            console.log('check res : ', res);
            if (res && res.EC === 0) {
                setDataModalResult({
                    countCorrect: res.DT.countCorrect,
                    countTotal: res.DT.countTotal,
                    quizData: res.DT.quizData
                })
                setShowModalResult(true)
            } else {
                alert('something wrong...')
            }
        }
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId} :  {location?.state?.quizTitle}
                </div>
                <hr />
                <Question
                    index={index}
                    data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
                    HanleCheckbox={HanleCheckbox}
                />

                <div className="footer">
                    <button
                        className="btn btn-warning"
                        onClick={() => handlePrev()}
                    >Prev</button>
                    <button
                        className="btn btn-info"
                        onClick={() => handleNext()}
                    >Next</button>
                    <button
                        className="btn btn-dark"
                        onClick={() => handleFinishQuiz()}
                    >Finish</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
            <ModalResult
                show={isShowModalResult}
                setShow={setShowModalResult}
                dataModalResult={dataModalResult}
            />
        </div>
    )
}

export default DetailQuiz;