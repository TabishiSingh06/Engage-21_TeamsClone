import './HomePage.css';
import body_vector from '../../images/body_vector.png';
import Header from '../header/header'

const HomePage = () => {

    return (
        <div className="homepage" >
            <Header />
            <div className="separator">
                A video chat app made with ♥ by Tabishi Singh
            </div>
            <div className="body" >
                <div className="leftBody"> <h2> Teams Clone </h2>
                    <p>Get in touch with </p>
                    <p>your friends and family!</p>
                    <a href="https://drive.google.com/file/d/1nO7LkAs33TbhIcanOUy7enVcfGO7bYtd/view?usp=sharing">This is the video link for the project</a>
                </div>
                <div className="rightBody">
                    <img src={body_vector} alt="video_call_people" />
                </div>
            </div>
        </div>
    )
};

export default HomePage;