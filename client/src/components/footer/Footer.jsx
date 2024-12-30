import './Footer.scss'
import footerImage from '../../assets/images/footer-image.png'
import email from '../../assets/icons/email.svg'
import phone from '../../assets/icons/phone.svg'
import { Address, Button, Container } from '../../utils/Utils'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className="footer">
            <img className="footer-image" src={footerImage} alt="" />
            <Container>
                <div className="footer-secondar__wrapper">
                    <div className="info__wrapper">
                        <p>{t('footer.description')}</p>
                    </div>

                    <div className="footer-menu">
                        <ul className="pages__menu">
                            <li>
                                <a href="/">{t('footer.about')}</a>
                            </li>
                            <li>
                                <a href="/">{t('footer.contact')}</a>
                            </li>
                        </ul>
                        <ul className="utility__menu">
                            <li>
                                <a href="/">{t('footer.license')}</a>
                            </li>
                            <li>
                                <a href="/">{t('footer.protect')}</a>
                            </li>
                        </ul>
                    </div>

                    <form className="subscribe__menu">
                        <div className="icons-wrapper">
                            <i>
                                <AiFillLinkedin />
                            </i>
                            <i>
                                <AiOutlineTwitter />
                            </i>
                            <i>
                                <BsFacebook />
                            </i>
                        </div>
                    </form>
                </div>
                <ul className="footer-contact__wrapper">
                    <li className="form__menu-item">
                        <Address
                            maintext={t('footer.contact_email')}
                            secondarytext="xalqarologistika@gmail.com"
                            icon={email}
                        />
                    </li>
                    <li className="form__menu-item">
                        <Address
                            maintext={t('footer.contact_number')}
                            secondarytext="+998905980828"
                            icon={phone}
                        />
                    </li>
                </ul>
            </Container>
            <hr />
            <Container>
                <div className="info__menu-wrapper">
                    <h3>{t('footer.copyright')} &copy; The Binary Inc</h3>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
