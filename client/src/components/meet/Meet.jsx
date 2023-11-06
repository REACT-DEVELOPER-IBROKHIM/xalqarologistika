import "./Meet.scss"
import MeetImg from "../../assets/images/meet.png"
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsTelegram } from 'react-icons/bs'
import { Container } from "../../utils/Utils";
import { useTranslation } from "react-i18next";
 
function Meet() {
    const {t} = useTranslation()
    return (
        <Container>
            <div className="team-wrapper">
                <div className="team__container-title">
                    <p>{t("meet.subtitle")}</p>
                    <h2>{t("meet.title")}</h2>
                </div>
                <div className="team__users-container">
                    <div className="user-card">
                        <div className="user__card-image">
                            <img src={MeetImg} alt="user-photo" />
                            <div className="team__user-social">
                                <BsFacebook />
                                <BsTelegram />
                             </div>
                        </div>
                        <div className="user__card-info">
                            <h3>Mr.Bahromjon</h3>
                            <p>{t("meet.main_director")}</p>
                        </div>
                        
                    </div>
                    <div className="user-card">
                        <div className="user__card-image">
                            <img src={MeetImg} alt="user-photo" />
                            <div className="team__user-social">
                                <BsFacebook />
                                <BsTelegram />
                            </div>
                        </div>
                        <div className="user__card-info">
                            <h3>Mr.Baxtiyor</h3>
                            <p>{t("meet.director")}</p>
                        </div>
                       
                    </div>
                    <div className="user-card">
                        <div className="user__card-image">
                            <img src={MeetImg} alt="user-photo" />
                            <div className="team__user-social">
                                <BsFacebook />
                                <BsTelegram />
                            </div>
                        </div>
                        <div className="user__card-info">
                            <h3>Mr.Ibrokhim</h3>
                            <p>{t("meet.engineer")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Meet;