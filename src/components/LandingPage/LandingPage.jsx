import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';
import Axios from "axios";
import isEmail from 'validator/lib/isEmail';


const isValidEmail = value =>
  (value && !isEmail(value)
    ? 'Invalid email address!'
    : undefined);

function LandingPage(props) {
    const [email, setEmail] = useState("");
    const magicElements = ['/img/box1.png', '/img/box2.png', '/img/box3.png'];
    const saveTimeElements = ['Homemade meals cooked exactly the way you like.', 
                            'As you use Zesty more, we get better at personalising the menu according to your taste and eating habits.',
                            'Don’t worry about grocery shopping for the right ingredients anymore or cleaning up your dishes after an appetising meal.'];
    const mealIdeaElements = ['Don’t have to fight decision fatigue about “what to cook next.”', 
                            'Amazing variety from the best chefs specialised in cooking the particular cuisines.',
                            'Made fresh and healthy, making sure it’s tasty as well as affordable.'];
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");

    const handleSubmit = async (evt) => {
        const val = isValidEmail(email)
        if(val === 'Invalid email address!'){
            evt.preventDefault();
            setMessage('Invalid email address!');
            setColor("#ED4F32");
        }
        else {
            Axios({
            method: 'POST',
            url: `${window.location.origin}/subscription/create-subscriber`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data:{"email": email, "status": "subscribed"},
            }).then(response => {
                console.log(response)
                if(response.data.result.statusCode === 200){
                    setMessage('Thank You for subscribing, we will keep you updated!');
                    setColor("#15CD72")
                }
                else if(response.data.result.statusCode === 400 && response.data.result.title === "Member Exists"){
                    setMessage('You Have already subscribed for updates!');
                    setColor("#EDE04D")
                }
                else {
                    setMessage('There was an error, please check your email or try again later!');
                    setColor("#ED4F32");
                }
            });
        }
    }
    return(
        <div>
            <div className="top-header">
                <img style={{height: 50, float: "left", padding: 15}} src="/img/logo.png" alt="logo"/>
                {/*<span className='top-right-header'>
                    <Link to="/" className="link">Login</Link>
                    <Link to="/" className="link">Sign Up</Link>
                    <Link to="/" className="link">FAQ</Link>
                    <Link style={{border: "2px solid #D4AF37", borderRadius: 30, textDecoration: 'none', padding: 15, color: 'black'}} to="/">Become A Chef</Link>
                </span>*/}
            </div>
            <div className='main-header'>
                <div className='title-wrapper'>
                    <div className='title'>PUT YOUR MEALS ON AUTOPILOT.</div>
                    <div className='sub-title'>
                        DAILY HOME COOKED MEALS.<br/>
                        STARTING FROM AED 160/WEEK. NO DELIVERY FEE.<br/>
                        SAVE UPTO 4 HOURS EVERYDAY.
                    </div>
                    <div style={{display: 'contents'}}>
                        <div className='email-form' style={{padding: 10}}>
                            <input className='email-input' placeholder='Enter your Email' value={email} onChange={e => setEmail(e.target.value)}/>
                            <button onClick={handleSubmit} className='email-form-button'>Join Now</button>
                        </div>
                        {message !== "" && <div style={{fontWeight: "bold", fontSize: 18, padding: 10, display: 'flex', flexDirection: 'column', color: color}}>{message}</div>}
                    </div>
                </div>
            </div>
            <div className='magic-section-wrapper'>
                <span className='magic-title'>
                   How Zesty Does It's Magic
                <img style={{marginBottom: -20, marginLeft: 10}} src='/img/logoicon.svg' alt='logo'/>
                </span>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{display: 'block'}}>
                        {magicElements.map((value, index) => {
                            return <img style ={{maxWidth: '100%'}} key={index} src={value} alt={value}/>
                        })}
                    </span>
                </div>
            </div>
            <div className='save-section-wrapper'>
                <span className='save-para'>
                    <div>
                        <div className='magic-title'>Save 24 Hours Every Week</div>
                        <div style={{fontFamily: 'Nunito', fontSize: 21, fontWeight: 'normal', paddingBottom: 10}}>Automating your meals with Zesty will give a day back to you every week! <br/><br/>
                            {saveTimeElements.map((value, index) => {
                            return <div style={{paddingBottom: 10, display: 'flex'}} key={index} ><img style={{height: 20, paddingRight: 10}} src='/img/check.svg' alt='check'/>{value}<br/></div>
                            })}
                        </div>
                    </div>
                    <div style={{textAlign: 'center'}}><img style ={{maxWidth: '100%'}} src='/img/saveTimeIllus.png' alt='save time'/></div>
                </span>
            </div>
            <div className='save-section-wrapper'>
                <span className='idea-para'>
                    <div className='idea-img'><img style ={{maxWidth: '100%'}} src='/img/mealIdea.png' alt='meal idea'/></div>
                    <div>
                        <div className='magic-title'>We Think About Great Meal Ideas Just For You!</div>
                        <div style={{fontFamily: 'Nunito', fontSize: 21, fontWeight: 'normal', paddingBottom: 10}}>As we learn about the cuisines you like and your diet requirements our algorithm designs custom menus for you!<br/><br/>
                            {mealIdeaElements.map((value, index) => {
                            return <div style={{paddingBottom: 10, display: 'flex'}} key={index} ><img style={{height: 20, paddingRight: 10}} src='/img/check.svg' alt='check'/>{value}<br/></div>
                            })}
                        </div>
                    </div>
                </span>
            </div>
            <div className='sub-footer'>
                <span className='sub-footer-wrapper'>
                    <div>
                        <div className='footer-title'>PUT YOUR MEALS ON AUTOPILOT.</div>
                            <div className='sub-title'>STARTING FROM AED 160/WEEK. NO DELIVERY FEE.<br/>
                                YOUR OWN PERSONAL CHEF. SAY GOODBYE TO COOKING.
                            </div>
                    </div>
                    <div style={{paddingTop: 20}}>
                        <div className='email-form' style={{padding: 10}}>
                            <input className='email-input' placeholder='Enter your Email' value={email} onChange={e => setEmail(e.target.value)}/>
                            <button onClick={handleSubmit} style={{background: 'black', color: '#E6BE3E'}} className='email-form-button'>Join Now</button>
                        </div>
                        {message !== "" && <div style={{fontWeight: "bold", fontSize: 18, padding: 10, display: 'flex', flexDirection: 'column', color: color}}>{message}</div>}
                    </div>
                </span>
            </div>
        </div>
    )
}

export default LandingPage;