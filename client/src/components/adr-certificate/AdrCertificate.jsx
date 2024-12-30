import summarizeName from '../../helpers/summarizeName'
import './AdrCertificate.scss'
import gerb from '../../assets/images/gerb.png'
import signs from '../../assets/images/signs.png'
import { forwardRef, useState } from 'react'
import QRCode from 'react-qr-code'
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'

const AdrCertificate = forwardRef(
    ({ firstname, lastname, to, birthdate, id, from }, ref) => {
        const [zoom, setZoom] = useState(1)
        return (
            <>
                <div className="pdf_driver">
                    <div className="zoom_btns">
                        <button onClick={() => setZoom(prev => prev + 0.05)}>
                            <AiOutlineZoomIn />
                        </button>
                        <p className="pdf_foiz"> {Math.floor(228 * zoom)}%</p>
                        <button onClick={() => setZoom(prev => prev - 0.05)}>
                            <AiOutlineZoomOut />
                        </button>
                    </div>

                    <div className="adr__container" ref={ref}>
                        <div className="adr_card">
                            <h2 className="adr_englishtitle">
                                ADR-DRIVER TRAINING CERTIFICATE
                            </h2>
                            <h3 className="adr_rustitle">
                                СВИДЕТЕЛЬСТВО О ПОДГОТОВКЕ ВОДИТЕЛЯ ПО ДОПОГ
                            </h3>
                            <div className="adr_maintop">
                                <div className="uz_wrapper">UZ</div>
                                <p className="main__bold">
                                    1.
                                    <span className="smaller_text">
                                        Nr.{id}
                                    </span>
                                </p>
                                <h2 className="adr_logo">NT2022</h2>
                            </div>
                            <div className="adr_maincenter">
                                <div className="center__image"></div>
                                <div className="center__info">
                                    <p className="main__bold">
                                        2.{' '}
                                        <span className="smaller_text">
                                            {firstname}
                                        </span>
                                    </p>
                                    <p className="main__bold">
                                        3.{' '}
                                        <span className="smaller_text">
                                            {lastname}
                                        </span>
                                    </p>
                                    <p className="main__bold">
                                        4.{' '}
                                        <span className="smaller_text">
                                            {' '}
                                            {birthdate}{' '}
                                        </span>
                                    </p>
                                    <p className="main__bold">
                                        5.{' '}
                                        <span className="smaller_text">
                                            {' '}
                                            REPUBLIC OF UZBEKISTAN
                                        </span>
                                    </p>
                                    <p className="main__bold">
                                        6.{' '}
                                        <span className="smaller_text">
                                            NAMANGANTRANS 2022
                                        </span>
                                    </p>
                                    <p className="main__bold">
                                        7.{' '}
                                        <span className="smaller_text">
                                            Until (date) {to}
                                        </span>
                                    </p>
                                    <div className="adr_sign"></div>
                                </div>
                                <div className="adr_qrcode">
                                    <QRCode
                                        className="adr_qrcodemain"
                                        value={`https://www.xalqarologistika.uz/check-certificates/${id}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="wrapper__card">
                            <div className="adr_cardback">
                                <h2 className="back__title">
                                    VALID FOR CLASS(ES) OR UN NOS.:
                                </h2>
                                <h3 className="back__smalltitle">
                                    ДЕЙСТВИТЕЛЬНО В ОТНОШЕНИИ ВЕЩЕСТВ КЛАССА(ОВ)
                                    ИЛИ № ООН
                                </h3>
                                <table>
                                    <tr>
                                        <th>9. In tank</th>
                                        <th>10. Other than in tank</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            2
                                            <br />
                                            3
                                            <br />
                                            4.1, 4.2, 4.3
                                            <br />
                                            5.1, 5.2
                                            <br />
                                            6.1, 6.2
                                            <br />
                                            8
                                            <br />9
                                        </td>
                                        <td>
                                            2
                                            <br />
                                            3
                                            <br />
                                            4.1, 4.2, 4.3
                                            <br />
                                            5.1, 5.2
                                            <br />
                                            6.1, 6.2
                                            <br />
                                            8
                                            <br />9
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        {parseInt(id) > 200 && (
                            <div className="cartifificate__adr-danger">
                                <div className="pdf_lang">
                                    <div className="pdf_langSertificate">
                                        <div></div>
                                        <div className="pdf_langSertificateContent">
                                            <img
                                                className="pdf_langSerContImg"
                                                src={gerb}
                                                alt=""
                                            />
                                            <h3 className="pdf_langSerContRes">
                                                O'zbekiston Respublikasi
                                            </h3>
                                            <h3 className="pdf_langSerContMchj">
                                                "NAMANGANTRANS 2022" MCHJ
                                            </h3>
                                            <h2 className="pdf_langSerContName">
                                                ADR Sertifikat
                                            </h2>
                                            <h5 className="pdf_langSerContNam">
                                                Namangan
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="pdf_lang">
                                    <div className="pdf_langContainer">
                                        <div className="pdf_langRu">
                                            <h2 className="pdf_langTitle">
                                                АДР Сертификат
                                            </h2>
                                            <img
                                                src={signs}
                                                alt=""
                                                className="signs"
                                            />
                                            <p>
                                                <b>MO № {id}</b>
                                            </p>
                                            <h4 className="pdf_langName">
                                                {summarizeName(
                                                    firstname,
                                                    lastname
                                                )}
                                            </h4>
                                            <h4 className="pdf_langName">
                                                АДР
                                            </h4>
                                            <p className="pdf_langNameDesc">
                                                О том что он прошел курс
                                                обучения по специальной
                                                программе{' '}
                                            </p>
                                            <p className="pdf_langOrganization">
                                                "Сертификат профессиональной
                                                компетентности в области
                                                Перевозка опасных грузов
                                                автомобильным транспортом (ADR)
                                                "
                                            </p>
                                            {/* <p><b>Директиве 1071/2009 ЕС</b></p> */}
                                            <div className="pdf_langCon">
                                                <div className="pdf_langQrContainer">
                                                    <QRCode
                                                        className="pdf_langQrcode"
                                                        value={`https://www.xalqarologistika.uz/check-certificates/${
                                                            id
                                                        }`}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="pdf_langOOO">
                                                        OOO "NAMANGANTRANS 2022"
                                                    </h3>
                                                    <p className="pdf_langData">
                                                        выдан: {from}
                                                    </p>
                                                    <p className="pdf_langData">
                                                        до: {to}
                                                    </p>
                                                </div>
                                            </div>
                                            <h4 className="pdf_langDirector">
                                                Директор: OOO "NAMANGANTRANS
                                                2022" B.Muhidinov
                                            </h4>
                                        </div>
                                        <div className="pdf_langEng ">
                                            <h2 className="pdf_langTitle">
                                                ADR Certificate
                                            </h2>
                                            <p className="adr_title-eng">
                                                <b>MO № {id}</b>
                                            </p>

                                            {/* <h2 className="pdf_id"></h2> */}
                                            <h4 className="pdf_langName">
                                                {summarizeName(
                                                    firstname,
                                                    lastname
                                                )}
                                            </h4>
                                            <h4 className="pdf_langName">
                                                ADR
                                            </h4>
                                            <p className="pdf_langNameDesc">
                                                This certificate that he
                                                completed training course on
                                                special program
                                            </p>
                                            <p className="pdf_langOrganization">
                                                Certificate of Professional
                                                Competence in the Transport of
                                                Dangerous Goods by Road (ADR)
                                            </p>

                                            <div className="pdf_langDateEn adr_lang-eng-date">
                                                <p className="pdf_langData">
                                                    Issued: {from}
                                                </p>
                                                <p className="pdf_langData">
                                                    Valid: {to}
                                                </p>
                                            </div>
                                            <h4 className="pdf_langDirector">
                                                {' '}
                                                Director: OOO "NAMANGANTRANS
                                                2022" B.Muhidinov
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    }
)

export default AdrCertificate
