import classes from './Body.module.css';
import Header from './Header';
import Middle from './Middle';
const Body = () => {
    return (<div className={classes.mainContainer}>
        <Header />
        <div className={classes.bodyContainer}>
            <div className={classes.expertContainer}>
                Expert in Political Survey’s
            </div>
            <div className={classes.paraContainer}>
                "A political survey records the individuals' attitude, opinion, mood, favoritism, and personal information. The
                data is then used to launch political campaigns to have the support from the maximum scalps." Generally, the
                political parties appoint online research and survey companies to set themselves in the best winning positions.
            </div>
            <button className={classes.learnButton}>
                Learn More
            </button>
            
        </div>
        <Middle />

    </div>);
}
export default Body;