import { IconInstagram } from '../MyIcons/IconInstagram'
import { IconYouTube } from '../MyIcons/IconYouTube'
import './Footer.scss'

export const Footer = () => {

    return (
        <footer>
            <div className="footer__content">
                <div className="footer__info" >
                    <h2 className="footer__title">Mila Milanovich</h2>
                    <p className="footer__text">Стилист по гардеробу в Цюрихе</p>
                </div>
                <div className="footer__social" >
                    <a href="https://www.youtube.com/channel/UCCpTxKeZNKrf8WshomlVKbg" ><IconYouTube /></a>
                    <a href="https://www.instagram.com/mmila_milk/"><IconInstagram /></a>
                </div>

            </div>
        </footer>
    )
}