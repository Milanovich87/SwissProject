import './Worth.scss'
// @ts-ignore-start
import worth from '../../assets/images/worth.jpg';
// @ts-ignore-end

export const Worth = () => {
    return (
        <div className="wrapper">
            <div className="header__worth">
                <p className='header__subtitle'>ЦЕННОСТЬ</p>
                <p className='header__title'>ЗАЧЕМ НУЖЕН ПЕРСОНАЛЬНЫЙ СТИЛИСТ?</p>
            </div>

            <div className="content__worth">
                <div className="list">
                    <li>
                        <h3 className="list__title">СКОРОСТЬ</h3>
                        <p className="list__text">Сможете легко и быстро находить свои вещи. Это усилит вашу уверенность в покупках и увеличит скорость принятия решенений.</p>
                    </li>
                    <li>
                        <h3 className="list__title">ПОЛЬЗА</h3>
                        <p className="list__text">Работа со мной гарантирует экономию времени и бюджета. В вашем гардеробе будет только подходящая одежда.</p>
                    </li>
                    <li>
                        <h3 className="list__title">УНИКАЛЬНОСТЬ</h3>
                        <p className="list__text">Для меня важно найти и проявить ваши сильные стороны во внешности. Усилить красоту и личный стиль.</p>
                    </li>
                    <li>
                        <h3 className="list__title">ФИГУРА</h3>
                        <p className="list__text">Во время нашей совместной работы вы узнаете и начнёте активно использовать знания о вашей внешности и колористике.</p>
                    </li>
                    <li>
                        <h3 className="list__title">СТИЛИЗАЦИЯ</h3>
                        <p className="list__text">Научитесь использовать весь потенциал своего гардероба. Вещи будут легко комбинироваться друг с другом.</p>
                    </li>
                    <li>
                        <h3 className="list__title">ЗАБОТА</h3>
                        <p className="list__text">Выбирать то, что подходит вашей внешности и не идти на компромиссы.</p>
                    </li>
                </div>
                <div className="main__image">
                    <img className="user__image" src={worth} />
                </div>
            </div>
            <div className="footer__worth">
                {/* <h2 className='footer__title'>“МАСШТАБИРУЮ ВОЗМОЖНОСТИ ТВОЕГО ГАРДЕРОБА”</h2> */}
                <p className='footer__text'>Вы всегда можете написать мне на <a href="mailto: info@milanovich.ch">info@milanovich.ch</a></p>

            </div>
        </div>
    );
}