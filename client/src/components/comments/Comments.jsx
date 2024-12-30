import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import axios from '../../api'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import './Comments.scss'
import { Container } from '../../utils/Utils'
import { useTranslation } from 'react-i18next'

const OurCustomerSay = () => {
    const { t } = useTranslation()

    const lang = localStorage.getItem('lang')

    const [userreviews, setUserreviews] = useState([])

    useEffect(() => {
        axios('/comments/all')
            .then(response => {
                setUserreviews(response.data.comments)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="comments">
            <Container>
                <h2>{t('comments_title')}</h2>

                <div className="comments__wrapper">
                    <AwesomeSlider>
                        {userreviews.map(review => (
                            <div className="comments__card" key={review._id}>
                                <div className="comments__card-header">
                                    <div className="comments__card-image">
                                        <img src={review.user_avatar} alt="" />
                                    </div>

                                    <div className="comments__card-header__info">
                                        <p className="comments__card__header-name">
                                            {review.user}
                                        </p>
                                        <p className="comments__card__header-date">
                                            {review.date}
                                        </p>
                                    </div>
                                </div>

                                <p className="comments__card__text">
                                    {lang === 'ru'
                                        ? review.comment_ru
                                        : lang === 'en'
                                          ? review.comment_en
                                          : review.comment_uz}
                                </p>
                                <div className="comments__card__footer">
                                    <div className="comments__card__footer__stars">
                                        {[...Array(review.rating)].map(
                                            (_, index) => (
                                                <AiFillStar key={index} />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AwesomeSlider>
                </div>
            </Container>
        </div>
    )
}

export default OurCustomerSay
