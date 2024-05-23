import classes from './Header.module.css';
import pic from './pic2.jpeg';
const Header = () => {
    return(<div className={classes.mainContainer}>
        <div className={classes.imgContainer}>
            <img className={classes.imgDiv} src={pic}/>
        </div>
        <div className={classes.homeContainer}>
            Home
        </div>
        <div className={classes.serviceContainer}>
            Services
        </div>
        <div className={classes.expertiseContainer}>
            Expertise
        </div>
        <div className={classes.contactContainer}>
            <div className={classes.contactDiv}>
                Contact Us
            </div>
        </div>
    </div>);
}

export default Header;