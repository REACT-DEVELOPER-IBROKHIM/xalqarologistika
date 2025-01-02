import './Nav.scss'
import logo from '../../assets/logo/logo.svg'
import email from '../../assets/icons/email.svg'
import phone from '../../assets/icons/phone.svg'
import time from '../../assets/icons/time.svg'
import i18n from '../../services/lang'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { BsTelegram, BsInstagram } from 'react-icons/bs'
import { Address, Container } from '../../utils/Utils'

const Nav = () => {
    const { t } = useTranslation()
    const handleChangeLanguage = e => {
        i18n.changeLanguage(e.target.value)
        window.location.reload()
    }

    return (
        <header className="header">
            <div className="top">
                <Container>
                    <div className="top__wrapper">
                        <div className="top__logo">
                            <h1>NAMANGANTRANS</h1>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="top__menu-wrapper">
                            <ul className="top__menu">
                                <li className="top__menu-item">
                                    <Address
                                        maintext={
                                            t('nav.work_hours') +
                                            ' 8.00 - 18.00'
                                        }
                                        secondarytext={t('nav.all')}
                                        icon={time}
                                    />
                                </li>
                                <li className="top__menu-item">
                                    <Address
                                        maintext={t('nav.email')}
                                        secondarytext="xalqarologistika@gmail.com"
                                        icon={email}
                                    />
                                </li>
                                <li className="top__menu-item">
                                    <Address
                                        maintext={t('nav.tel')}
                                        secondarytext="+998905980828"
                                        icon={phone}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            <nav className="nav" id="nav">
                <Container>
                    <div className="nav__wrapper">
                        <ul className="nav__menu">
                            <li className="nav__menu-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive && 'nav--active'
                                    }
                                >
                                    {t('nav.home')}
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="nav__socials">
                            <select
                                defaultValue={localStorage.getItem('lang')}
                                onChange={handleChangeLanguage}
                                className="nav__language-select"
                            >
                                <option value="uz">UZ</option>
                                <option value="ru">RU </option>
                                <option value="en">EN</option>
                            </select>
                            <li>
                                <a
                                    without
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://t.me/bahrom0828"
                                >
                                    <BsTelegram />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <BsInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </header>
    )
}

export default Nav
