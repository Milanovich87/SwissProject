// @ts-ignore-start
import serv22 from "../../assets/imagesCards/serv2-2.png";
// @ts-ignore-end
import Nav from "react-bootstrap/esm/Nav";
import './Wardrobe.scss'

export const Wardrobe = () => {
    return (
        <div className="wardrobe">
            <div className="wardrobe__content">
                <div className="wardrobe__description">
                    <h2 className="wardrobe__title2">УСЛУГА</h2>
                    <h2 className="wardrobe__title">РАЗБОР ГАРДЕРОБА И ШОПИНГ СОПРОВОЖДЕНИЕ</h2>
                    <div className="wardrobe__sort">
                        <h2 className="sort__title">ПРОЦЕСС РАЗБОРА ГАРДЕРОБА:</h2>
                        <li >Анкетирование, во время которого выявляется ваш индивидуальный запрос к стилисту</li>
                        <li>Стилевой тест составляется на основе ваших референсов</li>
                        <li>Рекомендации по типу фигуры и цветовой палитре оформленные в презентацию</li>
                        <li>Список дополнительных покупок высылается в ТЕКСТОВОМ ФОРМАТЕ оформленный в презентацию</li>
                        <li>Образы с разбора гардероба и шопинг сопровождения оформляются в презентацию</li>
                    </div>
                    <div className="wardrobe__process">
                        <h2 className="process__title" >ПРОЦЕСС ШОПИНГ СОПРОВОЖДЕНИЯ:</h2>
                        <li>ШАГ 1: Анкетирование</li>
                        <li>ШАГ 2: Стилевойтест + Консультация. Мы будем обсуждать ваш образ жизни, вкусы, бюджет и наши шопинг-цели</li>
                        <li>ШАГ 3: Онлайн или Оффлайн шопинг. Я буду создавать концепт вашего гардероба и подготовлю все вещи в онлайн или оффлайн режиме.
                            Вы добавите и оставите в своем гардеробе те вещи, которые будут прекрасно сидеть на вашей фигуре и идеально работать в вашем гардеробе</li>
                        <li>ШАГ 4: Когда концепт гардероба будет готов, вам нушно заказать необходимые вещи (актуально для онлайн шопинга). Если услуга проходит офлайн, я также отправлю вам концепт с примерами стайлинга, чтобы была наглядно видна идея шопинга.
                            В этот момент вы можете внести свои правки и пожелания, если они не учтены в концепте</li>
                        <li>ШАГ 5: Онлайн услуга длится 3-4 недели и подразумевает ваше полное включение в процесс. Офлайн услуга длится 3-5 дней</li>
                    </div>
                    <h2 className="wardrobe__text">Обратите внимание, что в ШОПИНГ СОПРОВОЖДЕНИЕ не входит стайлинг новых и старых вещей. Данную услугу вы можете приобрести отдельно</h2>
                </div>
                <div className="wardrobe__image">
                    <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src={serv22} data-holder-rendered="true" />
                </div>
            </div>
            <div className="pricing">
                <div className="wardrobe__ptice">
                    <p >МУЖЧИНЫ / ЖЕНЩИНЫ</p>
                    <p className="price__text">КАЖДУЮ УСЛУГУ МОЖНО ПРИОБРЕСТИ ОТДЕЛЬНО</p>
                    <p >РАЗБОР ГАРДЕРОБА</p>
                    <p ><span>450  ЕВРО</span></p>
                    <p >ШОПИНГ СОПРОВОЖДЕНИЕ</p>
                    <p ><span>450  ЕВРО</span></p>
                    <Nav.Link className="btn__order" href="form">ЗАКАЗАТЬ УСЛУГУ</Nav.Link>
                </div>

                <div className="additional__price">
                    <h2 className="additional__title" >ВРЕМЯ И СТОИМОСТЬ</h2>
                    <p >ДОПЛАТА 60 евро/час (для жителей Швейцарии цены во франках)</p>
                    <p >ДЛЯ ЗАПИСИ НА УСЛУГУ СВЯЖИТЕСЬ СО МНОЙ ЧЕРЕЗ КОНТАКТНУЮ ФОРМУ ИЛИ ИНСТАГРАМ</p>
                </div>


            </div>
            <h2 className="additional__email">
                запись на услуги <a href="mailto: info@milanovich.ch">info@milanovich.ch</a>
            </h2>
        </div >
    )
}