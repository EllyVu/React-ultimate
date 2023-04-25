import _ from 'lodash'


const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (<></>)
    }
    return (
        <>
            {data.image ?
                <div className='question-image'>
                    <img src={`data:image/jpeg;base64,${data.image}`} />
                </div>
                :
                <div className='question-image'>

                </div>
            }

            <div className="question-content">
                <div className="questions">
                    Question {index + 1} : {data.questionDescription} ?

                </div>
                <div className="answer">
                    {data.answers && data.answers.length > 0 &&
                        data.answers.map((answer, index) => {
                            return (
                                <div key={`answer-${index}`}
                                    className="a-child">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        <label class="form-check-label">
                                            {answer.description}
                                        </label>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Question;