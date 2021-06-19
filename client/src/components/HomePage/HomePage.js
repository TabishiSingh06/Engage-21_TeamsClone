import './HomePage.css';
import Header from '../header/header';
import body_vector from '../../images/body_vector.png';
import  Button  from '@material-ui/core/Button';

const HomePage = () => {

    return (
        <div className="homepage" >
            <Header />
            <div className="separator">
            Now use Microsoft Teams with family and friends to call, chat, and make plans.
            </div> 
            <div className="body" >
                <div className="leftBody"> <h2> Microsoft Teams </h2>
                <p>Meet, chat, call, and </p>
                <p> collaborate in just one place.</p>
                
                <Button size="large" variant="contained" color="primary">
                    Log In
                </Button>
                <Button styles = {{border: "solid 2px", paddingRight: "10rem"}} size="large" variant="outlined" color="primary">
                    Sign Up
                </Button>
                
                </div>
                <div className="rightBody"> 
                <img src={body_vector} alt="video_call_people"/> 
                </div>
            </div>

        </div>
    )
};

export default HomePage;