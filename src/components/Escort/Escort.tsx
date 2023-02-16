// @ts-ignore-start
import serv33 from "../../assets/imagesCards/serv3-3.png";
// @ts-ignore-end
import Nav from "react-bootstrap/esm/Nav";

import './Escort.scss'

export const Escort = () => {
    return (
        <div className="escort" >
            <div className="escort__content">
                <div className="escort__info">
                    <h2 className="escort__title2">УСЛУГА</h2>
                    <h2 className="escort__title">ГОДОВОЕ СОПРОВОЖДЕНИЕ ГАРДЕРОБА</h2>
                    <div className="escort__description">
                        <h2 className="title" >Сила в личном стиле, который меняет отношение к себе в вещах.</h2>
                        <h2 className="subtitle">для КОГО ПОДХОДИТ...</h2>
                        <li >Для тех, кто пробовал сам и не получилось</li>
                        <li>Кому нужен уверенный эксперт в вопросах гардероба</li>
                        <li>Тем, кто уже потратил много на одежду и не знает как её носить и стоит ли оставлять</li>
                        <li>Когда разовая работа со стилистом не помогла</li>
                        <li>Для тех, кто <span>любит</span> своё время и свои ресурсы</li>
                        <li>Для ценителей стильного европейского стиля</li>
                        <li>Для тех, кому важно масштабировать возможности своего гардероба</li>
                        <li>Для красивых и уверенных!</li>
                    </div>
                    <div className="escort__description2">
                        <h2 className="subtitle">как это РАБОТАЕТ?</h2>
                        <li >Выявляем истинный запрос благодаря анкете и стилевому тесту</li>
                        <li>Очерчиваем личный стиль и определяем его вектор</li>
                        <li>2-4 разбора гардероба в год</li>
                        <li>2-3 шопинг концепта в год, если нужна дополнительная капсула для отдыха - тоже составляем</li>
                        <li>Подбор украшений и аксессуаров по линиям внешности</li>
                        <li>Информация о трендах и тенденциях моды</li>
                        <li>Все покупки выверяются. Я с вами на связи в дни онлайн шопинга и по запросу, в тех случаях, когда хотите что-то купить не по концепту и теряетесь.</li>
                        <li>Анализ корзины при онлайн шопинге</li>
                        <li>Закупки у байера в Италии</li>
                    </div>
                    <div className="escort__description3">
                        <h2 className="subtitle">кому НЕ ПОДХОДИТ?</h2>
                        <li >тем с кем не было ни одного совместного разбора гардероба ДО</li>
                    </div>
                    {/* <div className="any__info">
                        <p >Все вопросы обсуждаем индивидуально.</p>
                        <p >Цена формируется также индивидуально от 5'000 ЕВРО в год.</p>
                        <p >Для жителей Швейцарии стоимость во франках.</p>
                        <h2 className="subtitle" >УСЛУГА ДОСТУПНА В ОНЛАЙН И ОФФЛАЙН ФОРМАТЕ</h2>
                    </div> */}

                    <div className="pricing">
                        <div className="wardrobe__ptice">
                            <p >МУЖЧИНЫ / ЖЕНЩИНЫ</p>
                            <p className="price__text">все вопросы обсуждаем индивидуально</p>
                            <p >цена формируется также индивидуально </p>
                            <p ><span>от 5'000 ЕВРО в год</span></p>
                            <p >для жителей Швейцарии стоимость во франках</p>
                            <p className="price__text">УСЛУГА ДОСТУПНА В ОНЛАЙН И ОФФЛАЙН ФОРМАТЕ</p>
                            <Nav.Link className="btn__order" href="form">ЗАКАЗАТЬ УСЛУГУ</Nav.Link>
                            {/* <a className="btn__order" href="contacts.html" >ЗАКАЗАТЬ УСЛУГУ</a> */}
                        </div>
                    </div>

                </div>
                <div className="col-md-5" >
                    <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src={serv33} data-holder-rendered="true" />
                </div>
            </div>
            <h2 className="escort__email">
                запись на услуги <a className="escort__email2" href="mailto: info@milanovich.ch">info@milanovich.ch</a>
            </h2>
        </div>
    )
}