import classes from './Footer.module.css';
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookBoxLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.getInContainer}>
                Get In Touch
            </div>
            <div className={classes.bottomContainer}>
                <div className={classes.leftContainer}>
                    <div className={classes.contactContainer}>
                        Contact Us
                    </div>
                    <div className={classes.contactDiv}>
                        <div className={classes.aboutContainer}>
                            <IoLocationOutline />
                            <div className={classes.contextContainer}>

                                Abou71 Pilgrim Avenue,
                                <br />
                                Chevy Chase,MD 20815t us
                            </div>
                        </div>
                        <div className={classes.timeContainer}>
                            <div className={classes.topTimeContainer}>
                                Mon Sat 9 am to 8 pm

                            </div>
                            <div className={classes.bottomTimeContainer}>
                                Sun 10 am to 3 pm

                            </div>
                        </div>
                        <div className={classes.phoneNumberContainer}>
                            <FaPhoneAlt />
                            <div className={classes.numbersContainer}>
                                (226) 906-272
                                <br />
                                (671) 925-1352

                            </div>

                        </div>
                        <div className={classes.mailContainer}>
                            <div className={classes.atTheRateContainer}>
                                @
                            </div>
                            <div className={classes.mailDiv}>
                                vidura@gamil.com
                            </div>

                        </div>

                    </div>
                    <div className={classes.socialContainer}>
                        <FaInstagram />
                        <CiYoutube />
                        <FaXTwitter />
                        <RiFacebookBoxLine />
                    </div>
                    <div className={classes.copyrightsContainer}>
                        <div className={classes.copyrightDiv}>
                            ©
                        </div>
                        <div className={classes.copyrightContext}>
                            2023 Vidura. Made With Love By Repsoft
                        </div>

                    </div>

                </div>
                <div className={classes.rightContainer}>
                    <div className={classes.detailsContainer}>
                        <div className={classes.firstnameContainer}>
                            First Name:
                            <div className={classes.firstNameInputDiv}>
                                <input className={classes.firstNameInput} />
                            </div>
                        </div >
                        <div className={classes.lastnameContainer}>
                            Last Name:
                            <div className={classes.firstNameInputDiv}>
                                <input className={classes.firstNameInput} />
                            </div>
                        </div>
                        <div className={classes.phoneContainer}>
                            Phone:
                            <div className={classes.firstNameInputDiv}>
                                <input className={classes.firstNameInput} />
                            </div>
                        </div>
                        <div className={classes.emailContainer}>
                            Email:
                            <div className={classes.firstNameInputDiv}>
                                <input className={classes.firstNameInput} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.messageContainer}>
                        Message:
                        <div className={classes.firstNameInputDiv}>
                            <textarea className={classes.firstNameInput} />
                        </div>
                    </div>
                    <div className={classes.submitContainer}>
                        <button className={classes.submitButton}>
                            Submit Request
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;




