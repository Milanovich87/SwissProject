// @ts-ignore-start
import serv11 from "../../assets/imagesCards/serv1-1.png";
// @ts-ignore-end
import Nav from "react-bootstrap/esm/Nav";
import './PageStyling.scss'

export const PageStyling = () => {
    return (
        <div className="styling" >
            <div className="styling__content">
                <div className="styling__titles">
                    <h2 className="styling__title2">УСЛУГА</h2>
                    <h2 className="styling__title">СТАЙЛИНГ</h2>
                </div>

                <div className="styling__info">
                    <div>
                        <h2 className="sort__title">РЕКОМЕНДУЮ ДАННУЮ УСЛУГУ:</h2>
                        <li >Если у вас уже сформирован гардероб на все сезоны. Вам нравится то что в нём есть, но хочется добавить новые идеи.
                            Например, цвет или акценты, а возможно новые аксессуары или сложный крой.</li>
                        <li>Если вы не понимаете или волнуетесь это делать самостоятельно, в таком случае, данная услуга поможет вам в реализации задуманного.
                            Идея проста, встречаемся на шопинг сопровождение, затем стилизуем новые вещи с теми, что есть в гардеробе.</li>
                    </div>

                    {/* <p className="styling__text"><span>Рекомендую данную услугу, </span>
                        если у вас уже сформирован гардероб на все сезоны. Вам нравится то что в нём есть, но хочется добавить новые идеи.
                        Например, цвет или акценты, а возможно новые аксессуары или сложный крой. Если вы не понимаете или волнуетесь это делать самостоятельно, в таком случае, данная услуга поможет вам в реализации задуманного.
                        Идея проста, встречаемся на шопинг сопровождение, затем стилизуем новые вещи с теми, что есть в гардеробе.
                    </p> */}
                    <div className="styling__image">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src={serv11} data-holder-rendered="true" />
                    </div>
                </div>
            </div>
            <div className="pricing">
                <div className="wardrobe__ptice">
                    <p >МУЖЧИНЫ / ЖЕНЩИНЫ</p>
                    <p className="price__text">КАЖДУЮ УСЛУГУ МОЖНО ПРИОБРЕСТИ ОТДЕЛЬНО</p>
                    <p >СТИЛИЗАЦИЯ ОБРАЗОВ<br></br>(2 часа)</p>
                    <p ><span>300 евро (франков)</span></p>
                    <p >DUET. ШОПИНГ + СТИЛИЗАЦИЯ</p>
                    <p ><span>650 евро (франков)</span></p>
                    <Nav.Link className="btn__order" href="form">ЗАКАЗАТЬ УСЛУГУ</Nav.Link>
                </div>
            </div>
            <h2 className="styling__email">
                запись на услуги&nbsp;<a className="styling__email2" href="mailto: info@milanovich.ch">info@milanovich.ch</a>
            </h2>
        </div>

    )
}