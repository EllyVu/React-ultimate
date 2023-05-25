import _ from 'lodash'


const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (<></>)
    }

    const HandleHanleCheckbox = (event, aId, qId) => {
        // console.log('check :', event.target.checked);
        console.log('data props', aId, qId);
        props.HanleCheckbox(aId, qId)
    }
    return (
        <div className='question-body'>
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
                        data.answers.map((a, index) => {
                            return (
                                <div key={`answer-${index}`}
                                    className="a-child">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={a.isSelected}
                                            onChange={(event) => HandleHanleCheckbox(event, a.id, data.questionId)} />
                                        <label className="form-check-label">
                                            {a.description}
                                        </label>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Question;