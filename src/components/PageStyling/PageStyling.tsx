// @ts-ignore-start
import serv11 from "../../assets/imagesCards/serv1-1.png";
// @ts-ignore-end
import Nav from "react-bootstrap/esm/Nav";
import './PageStyling.scss'

export const PageStyling = () => {
    return (
        <div className="styling" >
            <div className="styling__content">
                <h2 className="styling__title2">УСЛУГА</h2>
                <h2 className="styling__title">СТАЙЛИНГ</h2>
                <p className="styling__text"><span>Рекомендую данную услугу,</span>
                    если у вас уже сформирован гардероб на все сезоны. Вам нравится то что в нём есть, но хочется добавить новые идеи.
                    Например, цвет или акценты, а возможно новые аксессуары или сложный крой. Если вы не понимаете или волнуетесь это делать самостоятельно, в таком случае, данная услуга поможет вам в реализации задуманного.
                    Идея проста, встречаемся на шопинг сопровождение, затем стилизуем новые вещи с теми, что есть в гардеробе. </p>

                <div className="pricing">
                    <div className="wardrobe__ptice">
                        <p >МУЖЧИНЫ / ЖЕНЩИНЫ</p>
                        <p className="price__text">КАЖДУЮ УСЛУГУ МОЖНО ПРИОБРЕСТИ ОТДЕЛЬНО</p>
                        <p >СТИЛИЗАЦИЯ ОБРАЗОВ (2 часа)</p>
                        <p ><span>300 евро (франков)</span></p>
                        <p >DUET. ШОПИНГ + СТИЛИЗАЦИЯ</p>
                        <p ><span>650 евро (франков)</span></p>
                        <Nav.Link className="btn__order" href="form">ЗАКАЗАТЬ УСЛУГУ</Nav.Link>
                    </div>
                </div>

                {/* <div className="price">
                    <h2 className="styling__price" >СТИЛИЗАЦИЯ ОБРАЗОВ (2 часа)  - 300 евро (франков)</h2>
                    <h2 className="styling__price" >DUET. ШОПИНГ + СТИЛИЗАЦИЯ  - 650 евро (франков)</h2>
                </div> */}
                <h2 className="styling__email">
                    запись на услуги <a href="mailto: info@milanovich.ch">info@milanovich.ch</a>
                </h2>
            </div>
            <div className="styling__image">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src={serv11} data-holder-rendered="true" />
            </div>



        </div>

    )
}