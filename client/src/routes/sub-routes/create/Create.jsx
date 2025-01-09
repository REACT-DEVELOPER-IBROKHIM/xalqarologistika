import './Create.scss'
import 'react-datepicker/dist/react-datepicker.css'
import axios from '../../../api'
import DatePicker from 'react-datepicker'
import DriverCertificate from '../../../components/driver-certificate/DriverCertificate'
import AdrCertificate from '../../../components/adr-certificate/AdrCertificate'
import ReactToPrint from 'react-to-print'
import moment from 'moment'
import getFormattedTime from '../../../helpers/getFormattedTime'
import { useEffect, useRef, useState } from 'react'
import { Button, Success } from '../../../utils/Utils'
import { useTranslation } from 'react-i18next'
import { createStatusInstance } from '../../../helpers/createStatusInstance'

const Create = () => {
    const { t } = useTranslation()

    const [createStep, setCreateStep] = useState('backlog')
    const printFrame = useRef()
    const [certificateStatus, setCertificateStatus] = useState(
        createStatusInstance('backlog')
    )
    const [inputValidationName, setInputValidationName] = useState(false)
    const [inputValidationSurname, setInputValidationSurname] = useState(false)
    const [inputValidationMiddleName, setInputValidationMiddleName] =
        useState(false)
    const [inputValidationFromDate, setInputValidationFromDate] =
        useState(false)
    const [inputValidationToDate, setInputValidationToDate] = useState(false)
    const [isCreating, setIsCreating] = useState({
        loading: false,
        status: 'backlog',
    })
    const [certificateData, setCertificateData] = useState({
        name: '',
        surname: '',
        middlename: '',
        from: '',
        birthdate: '',
        to: '',
        certificateType: 'select',
    })

    useEffect(() => {
        setInputValidationName(/[A-Z]+$/.test(certificateData.name))
        setInputValidationSurname(/[A-Z]+$/.test(certificateData.surname))
        setInputValidationMiddleName(
            /[A-Z]\s?[A-Z]+$/.test(certificateData.middlename)
        )
        setInputValidationFromDate(
            moment(
                getFormattedTime(certificateData.from),
                'MM.DD.YYYY'
            ).isValid()
        )
        setInputValidationToDate(
            moment(getFormattedTime(certificateData.to), 'MM.DD.YYYY').isValid()
        )
    }, [certificateData])

    const handleClear = () => {
        document.querySelector('.create-certificate__form').reset()
        setCertificateData({
            name: '',
            surname: '',
            middlename: '',
            from: '',
            birthdate: '',
            to: '',
            certificateType: 'select',
        })
        setCertificateStatus(createStatusInstance('backlog'))
    }

    const handleViewCertificate = async () => {
        setIsCreating({
            loading: false,
            status: 'backlog',
        })
        if (
            certificateData.certificateType !== 'select' &&
            inputValidationSurname &&
            inputValidationName &&
            (inputValidationMiddleName || certificateData.from)
        ) {
            setCertificateStatus(
                createStatusInstance('pending', t('status.pending'))
            )
            try {
                const response = await axios(
                    `/search/search-by-all?type=${certificateData.certificateType.replace(
                        'driver-',
                        ''
                    )}`
                )
                if (response.data.totalItems) {
                    setCertificateStatus(
                        createStatusInstance(
                            'success',
                            t('status.success'),
                            response.data.totalItems
                        )
                    )
                    setCreateStep('view')
                }
            } catch {
                setCertificateStatus(
                    createStatusInstance('error', t('status.error'))
                )
            }
        } else {
            setCertificateStatus(
                createStatusInstance('error', t('status.error'))
            )
        }
    }

    const handleCreateCertificate = async e => {
        e.preventDefault()
        const { certificateType, ...data } = certificateData
        data.from = getFormattedTime(data.from)
        data.to = getFormattedTime(data.to)
        data.birthdate = getFormattedTime(data.birthdate)
        data.id = +certificateStatus.data.match(/[0-9]+/)[0]
        console.log(data)
        try {
            setIsCreating({
                loading: true,
                status: 'backlog',
            })
            const response = await axios.post(
                `${certificateType.replace(/-/g, '')}`,
                data
            )
            if (response.data.id) {
                setIsCreating({
                    loading: false,
                    status: 'success',
                })
                setCertificateStatus(
                    createStatusInstance(
                        'success',
                        t('status.success'),
                        response.data.id
                    )
                )
                setCreateStep('save')
            }
        } catch (error) {
            console.log(error)
            setIsCreating({
                loading: false,
                status: 'error',
            })
        }
    }

    return (
        <div admincontent="content" className="create-certificate">
            <h2 className="admin-content__heading">{t('create.title')}</h2>
            <section className="create-certificate__content">
                <form
                    className="create-certificate__form"
                    onSubmit={handleCreateCertificate}
                >
                    <div className="create-certificate__form-fields">
                        <div
                            className="create-certificate__form-item"
                            inputwrapperitem="true"
                        >
                            <label htmlFor="firstname">
                                {t('create.firstname')}
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                autoComplete="off"
                                value={certificateData.name}
                                onChange={e =>
                                    setCertificateData({
                                        ...certificateData,
                                        name: e.target.value.toUpperCase(),
                                    })
                                }
                                required
                            />
                            {!inputValidationName &&
                                certificateStatus.status === 'error' && (
                                    <p className="message message--error">
                                        {t('create.validname')}
                                    </p>
                                )}
                        </div>
                        <div
                            className="create-certificate__form-item"
                            inputwrapperitem="true"
                        >
                            <label htmlFor="surname">
                                {t('create.surname')}
                            </label>
                            <input
                                type="text"
                                id="surname"
                                autoComplete="off"
                                value={certificateData.surname}
                                onChange={e =>
                                    setCertificateData({
                                        ...certificateData,
                                        surname: e.target.value.toUpperCase(),
                                    })
                                }
                                required
                            />
                            {!inputValidationSurname &&
                                certificateStatus.status === 'error' && (
                                    <p className="message message--error">
                                        {t('create.validsurname')}
                                    </p>
                                )}
                        </div>
                        <div
                            className="create-certificate__form-item"
                            inputwrapperitem="true"
                        >
                            <label htmlFor="middlename">
                                {certificateData.certificateType ===
                                    'driver-adr-certificate' ||
                                certificateData.certificateType ===
                                    'driver-adr-tank-certificate'
                                    ? `${t('create.issuedate')}`
                                    : `${t('create.middlename')}`}
                            </label>
                            {certificateData.certificateType ===
                                'driver-adr-certificate' ||
                            certificateData.certificateType ===
                                'driver-adr-tank-certificate' ? (
                                <DatePicker
                                    id="from"
                                    autoComplete="off"
                                    selected={certificateData.from}
                                    onChange={date =>
                                        setCertificateData({
                                            ...certificateData,
                                            from: date,
                                        })
                                    }
                                    required
                                />
                            ) : (
                                <input
                                    type="text"
                                    id="middlename"
                                    autoComplete="off"
                                    value={certificateData.middlename}
                                    onChange={e =>
                                        setCertificateData({
                                            ...certificateData,
                                            middlename:
                                                e.target.value.toUpperCase(),
                                        })
                                    }
                                    required
                                />
                            )}

                            {!inputValidationMiddleName &&
                                certificateStatus.status === 'error' && (
                                    <p className="message message--error">
                                        {t('create.validmiddlename')}
                                    </p>
                                )}
                        </div>
                        <div
                            className="create-certificate__form-item"
                            inputwrapperitem="true"
                        >
                            <label htmlFor="certificate-type">
                                {t('create.certificate-type')}
                            </label>
                            <select
                                defaultValue={
                                    certificateData.certificateType || 'select'
                                }
                                onChange={e =>
                                    setCertificateData({
                                        ...certificateData,
                                        certificateType: e.target.value,
                                    })
                                }
                                id="certificate-type"
                            >
                                <option disabled value="select">
                                    {t('create.select')}
                                </option>
                                <option value="driver-certificate">
                                    {t('create.driver-certificate')}
                                </option>
                                <option value="driver-manager-certificate">
                                    {t('create.driver-manager-certificate')}
                                </option>
                                <option value="driver-adr-certificate">
                                    {t('create.driver-adr-certificate')}
                                </option>
                                <option value="driver-adr-tank-certificate">
                                    {t('create.driver-adr-tank-certificate')}
                                </option>
                            </select>
                            {certificateData.certificateType === 'select' &&
                                certificateStatus.status === 'error' && (
                                    <p className="message message--error">
                                        {t('create.validselect')}
                                    </p>
                                )}
                        </div>
                        <div
                            className="create-certificate__form-item"
                            inputwrapperitem="true"
                        >
                            <label htmlFor="fromdate">
                                {certificateData.certificateType ===
                                    'driver-adr-certificate' ||
                                certificateData.certificateType ===
                                    'driver-adr-tank-certificate'
                                    ? `${t('create.birthdate')}`
                                    : `${t('create.issuedate')}`}
                            </label>
                            <DatePicker
                                id="fromdate"
                                autoComplete="off"
                                selected={
                                    certificateData[
                                        certificateData.certificateType ===
                                            'driver-adr-certificate' ||
                                        certificateData.certificateType ===
                                            'driver-adr-tank-certificate'
                                            ? 'birthdate'
                                            : 'from'
                                    ]
                                }
                                onChange={date =>
                                    setCertificateData({
                                        ...certificateData,
                                        [certificateData.certificateType ===
                                            'driver-adr-certificate' ||
                                        certificateData.certificateType ===
                                            'driver-adr-tank-certificate'
                                            ? 'birthdate'
                                            : 'from']: date,
                                    })
                                }
                                required
                            />
                            {!inputValidationFromDate &&
                                certificateStatus.status === 'error' && (
                                    <p className="message message--error">
                                        {t('create.validdate')}
                                    </p>
                                )}
                        </div>
                        <div
                            className="create-certificate__form-item"
                            inputwrapperitem="true"
                        >
                            <label htmlFor="todate">{t('create.todate')}</label>
                            <DatePicker
                                id="todate"
                                autoComplete="off"
                                selected={certificateData.to}
                                onChange={date =>
                                    setCertificateData({
                                        ...certificateData,
                                        to: date,
                                    })
                                }
                                required
                            />
                            {!inputValidationToDate &&
                                certificateStatus.status === 'error' && (
                                    <p className="message message--error">
                                        {t('create.validdate')}
                                    </p>
                                )}
                        </div>
                    </div>
                    <div className="create-certificate__form-actions">
                        <Button
                            text={t('create.vyubtn')}
                            loading={
                                certificateStatus.loading &&
                                createStep === 'backlog'
                            }
                            disabled={certificateStatus.loading}
                            appearance={'primary'}
                            type={'button'}
                            clickHandler={handleViewCertificate}
                        />
                        {createStep === 'view' && (
                            <Button
                                text={t('create.savebtn')}
                                disabled={isCreating.loading}
                                loading={isCreating.loading}
                                appearance={'info'}
                                type={'submit'}
                            />
                        )}
                        {createStep === 'save' && (
                            <ReactToPrint
                                onBeforePrint={() => setCreateStep('print')}
                                trigger={() => (
                                    <button
                                        type="button"
                                        className="success-button"
                                    >
                                        {t('create.printbtn')}
                                    </button>
                                )}
                                content={() => printFrame.current}
                                onAfterPrint={() => {
                                    window.location.reload()
                                }}
                            />
                        )}
                        <Button
                            text={t('create.clearbtn')}
                            loading={false}
                            clickHandler={handleClear}
                            appearance={'danger'}
                            type={'reset'}
                        />
                    </div>
                </form>
                {certificateStatus.status === 'success' &&
                certificateStatus.data ? (
                    <div className="create-certificate__view">
                        {isCreating.status === 'success' && (
                            <div className="crete-certificate__success">
                                <Success />
                            </div>
                        )}
                        {certificateData.certificateType ===
                            'driver-certificate' ||
                        certificateData.certificateType ===
                            'driver-manager-certificate' ? (
                            <DriverCertificate
                                id={certificateStatus.data}
                                firstname={certificateData.name}
                                lastname={certificateData.surname}
                                parentname={certificateData.middlename}
                                from={getFormattedTime(certificateData.from)}
                                to={getFormattedTime(certificateData.to)}
                                pdf_class={
                                    createStep === 'view'
                                        ? 'pdf_mainContainer'
                                        : undefined
                                }
                                ref={printFrame}
                            />
                        ) : (
                            <AdrCertificate
                                id={certificateStatus.data}
                                lastname={certificateData.surname}
                                firstname={certificateData.name}
                                to={getFormattedTime(certificateData.to)}
                                birthdate={getFormattedTime(
                                    certificateData.birthdate
                                )}
                                from={getFormattedTime(certificateData.from)}
                                ref={printFrame}
                            />
                        )}
                    </div>
                ) : null}
            </section>
        </div>
    )
}

export default Create
