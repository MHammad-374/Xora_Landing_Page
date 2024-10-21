import React, { useState } from 'react'
import Img from '../assets/detail-1.png'
function Faq() {
    const questions = [
        "How easy is it to setup Xora?",
        "What happens when I’m out of storage?",
        "How often do you add new content?",
        "Can I upgrade my plan?",
        "What your refund policy?",
        "Do you offer training for individuals and teams?",
        "Do you have corporate plans?",
        "I’m locked out of my account what do I do?"
    ]




    const [activeQuestion, setActiveQuestion] = useState(new Array(questions.length).fill(false));

    const toggleQuestion = (index) => {
        const updatedQuestions = [...activeQuestion];
        updatedQuestions[index] = !updatedQuestions[index];
        setActiveQuestion(updatedQuestions);
    }

    return (
        <section className='faq px-5 lg:px-24 xl:px-44'>
            <img className='faq_img' src={Img} alt="" />
            <div className="questions">
                {
                    questions.map((q, index) => {
                        return (
                            <div className={`question ${activeQuestion[index] ? "question_focus" : ""}`}>
                                <h4 className="h6 ques_tion">{q}</h4>
                                <div className="sign_symbol" onClick={() => toggleQuestion(index)}>{activeQuestion[index] ? "-" : "+"}</div>
                                <div className="ans">Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Faq
