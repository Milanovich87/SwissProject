import './Main.scss'
// @ts-ignore-start
import front from '../../assets/images/front.jpg';
import Form from '../Form/Form';
// @ts-ignore-end

export const Main = () => {
    return (

        <div className="main" >

            <div className="main__content">
                <p className='main__title'>ЕВРОПЕЙСКИЙ СТИЛИСТ ПО ГАРДЕРОБУ</p>
                <h2 className="firstname" ><strong>МИЛА</strong></h2>
                <h2 className="lastname" ><strong>МИЛАНОВИЧ</strong></h2>
                <p className='main__title'>РАБОТАЮ НАД ПЕРСОНАЛЬНЫМ СТИЛЕМ ПО ВСЕМУ МИРУ</p>
                <a className='instagram' href="https://www.instagram.com/mmila_milk/" >Подписывайся на мой Instagram</a>
                <p className="text" >“МАСШТАБИРУЮ ВОЗМОЖНОСТИ ТВОЕГО ГАРДЕРОБА”</p>
            </div>
            <div className="main__image">
                <img className="user__image" src={front} />
            </div>

        </div>

    );
}