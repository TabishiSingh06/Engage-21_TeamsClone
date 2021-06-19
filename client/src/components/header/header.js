import './header.css';
import teamsLogo from '../../images/microsoft-teams-1.png';
import  Button  from '@material-ui/core/Button';


const Header = () => {
    return (
        <div className="header" >
            <div className="logo" >
                <img src={teamsLogo} alt="teams_logo" />
                <span className="logo-text"> Microsoft <span style={{color: 'black', fontWeight: '500'}}> Teams </span> </span>
            </div>
            <div className="signup">
                <Button style={{textTransform: 'none', fontSize: '1rem', fontWeight: '600'}} size="large" variant="contained" color="primary">
                    Sign up for free
                </Button>
            </div>
        </div>
    )
};

export default Header;