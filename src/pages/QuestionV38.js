import React from 'react';
import '../styles/questionv38.scss'
import ExtraMentionProgressbar from '../components/QuestionV38/ExtramentionProgress';
import ellipse18 from '../assests/ellipse18.png'
import ellipse17 from '../assests/ellipse17.png'
import BackClose from '../components/SelectPrimary/BackClose'
import BackNext from '../components/SelectPrimary/BackNext';
import { useHistory } from "react-router";
import { addExtramentionRequest } from '../Redux/action/index';
import { useDispatch, useSelector } from 'react-redux';


function QuestionV38() {
    const router = useHistory()
    const dispatch =useDispatch();
    const QuestionnairesStatus = useSelector((state) => state.Questionnaires)
    const handleStartPage = () => {
        router.push('/breakefast')
    }
    const handleBackPage = () => {
        router.push('/orderfor')
    }
    // const handleChange = (e) => {
    //     localStorage.setItem("extraMention", e.currentTarget.value)
    // }
    const handleBack = () => {
        router.push('/')
    }


    const handleChange = (e) => {
        console.log(e.currentTarget.value,"oooooooooooooooooo");
        let extraMention = QuestionnairesStatus?.extraMention ? QuestionnairesStatus?.allergens : ""
        if (extraMention.indexOf(e.currentTarget.value) >= 0) {
            extraMention = [...extraMention]
            extraMention = extraMention.filter(value => value !== e.currentTarget.value)
        } else {
            extraMention = [...extraMention, ...[e.currentTarget.value]]
        }
        dispatch(addExtramentionRequest(e.currentTarget.value))
    }


    return (
        <>
            <div className="container-sp38">
                {/* <BackClose handleBack={handleBack} /> */}
                <p className="select-y38 text-center"> Is There Anything Else You Would Like To Mention ? </p>
                <input type="text" className="txt-ar-38"
                    placeholder="E.G ; Less Salt Or Allergic To Some Specific Food." value={QuestionnairesStatus?.extraMention} onChange={(e) => handleChange(e)} />
                {/* <BackNext buttonType="Next" handleStartPage={handleStartPage} handleBackPage={handleBackPage} /> */}
            </div>
            {/* <ExtraMentionProgressbar ellipse17={ellipse17} ellipse18={ellipse18} /> */}
        </>
    )
}
export default QuestionV38;