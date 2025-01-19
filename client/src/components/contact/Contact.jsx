import './Contact.scss'
import { Address, Button, Container } from '../../utils/Utils'
import emaill from '@assets/icons/email.svg'
import phone from '@assets/icons/phone.svg'
import time from '@assets/icons/time.svg'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { createStatusInstance } from '@helpers/createStatusInstance'
import axios from 'axios'
const NUMBER_REGEX =
    /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

const Contact = () => {
    const { t } = useTranslation()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [isValidNumber, setIsValidNumber] = useState(false)
    const [contactData, setContactData] = useState(
        createStatusInstance('backlog')
    )

    useEffect(() => {
        setIsValidNumber(NUMBER_REGEX.test(number))
    }, [number])

    const handleSendMessageToTelegram = e => {
        e.preventDefault()
        if (isValidNumber && name.trim().length > 0) {
            setContactData(createStatusInstance('pending', t('status.pending')))
            axios
                .post(
                    `https://api.telegram.org/bot${process.env.REACT_APP_BOT_ID}/sendMessage`,
                    {
                        chat_id: process.env.REACT_APP_CHAT_ID,
                        text: `\n Ismi: ${name}\n Telefon raqami: ${number}\n Xabar: ${message ? message : 'Xabar qoldirilmagan'}`,
                        headers: {
                            'Content-Type': 'application/json',
                            'cache-control': 'no-cache',
                        },
                    }
                )
                .then(response => {
                    setContactData(
                        createStatusInstance(
                            'success',
                            t('status.success'),
                            response.data
                        )
                    )
                })
                .catch(() => {
                    setContactData(
                        createStatusInstance('error', t('status.error'))
                    )
                })
            setName('')
            setNumber('')
            setMessage('')
        } else {
            setContactData(createStatusInstance('error', t('status.error')))
        }
    }

    return (
        <div className="contact__wrapper">
            <Container>
                <div className="contact">
                    <div className="contact__items">
                        <div className="contact__item">
                            <strong className="contact-text">
                                {t('contact.subtitle')}
                            </strong>

                            <h2>{t('contact.title')}</h2>
                            <p className="contact-text-p">
                                {t('contact.description')}
                            </p>
                            <ul className="form__menu">
                                <li className="form__menu-item">
                                    <Address
                                        maintext={t('contact.contact_email')}
                                        secondarytext="contact@logistics.com"
                                        icon={emaill}
                                    />
                                </li>
                                <li className="form__menu-item">
                                    <Address
                                        maintext={t('contact.contact_number')}
                                        secondarytext="+998905980828"
                                        icon={phone}
                                    />
                                </li>
                                <li className="form__menu-item">
                                    <Address
                                        maintext={t('contact.work_day')}
                                        icon={time}
                                    />
                                </li>
                            </ul>
                        </div>
                        <form id="form" onSubmit={handleSendMessageToTelegram}>
                            {contactData.error && contactData.message && (
                                <p className="message message--error">
                                    {contactData.message}
                                </p>
                            )}
                            {contactData.success && contactData.message && (
                                <p className="message message--success">
                                    {contactData.message}
                                </p>
                            )}
                            {contactData.loading && contactData.message && (
                                <p className="message message--loading">
                                    {contactData.message}
                                </p>
                            )}
                            <div>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    placeholder={t('contact.input_name')}
                                />
                                <input
                                    value={number}
                                    onChange={e => setNumber(e.target.value)}
                                    type="text"
                                    placeholder={t('contact.input_number')}
                                />
                            </div>
                            <textarea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                id="form-textarea"
                                cols="30"
                                rows="10"
                                placeholder={t('contact.input_message')}
                            ></textarea>
                            <Button text={t('contact.submit_btn')} />
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact
