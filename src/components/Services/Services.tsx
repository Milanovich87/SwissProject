import './Services.scss'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// @ts-ignore-start
import serv1 from "../../assets/imagesCards/serv1.jpg";
// @ts-ignore-end
// @ts-ignore-start
import serv2 from "../../assets/imagesCards/serv2.jpg";
// @ts-ignore-end
// @ts-ignore-start
import serv3 from "../../assets/imagesCards/serv3.jpg";
// @ts-ignore-end
import { NavLink } from 'react-router-dom';

export const Services = () => {
    return (
        // <div className="services"  >
        //     <div className="services__header" >
        //         <h2 className='services__title' >МОИ УСЛУГИ</h2>
        //         <p className='services__text'>Здесь вы можете ознакомиться с моими услугами более подробно</p>
        //     </div>
        //     <div className="services__main" >
        //         <div className="services__info">
        //             <div className="img-wrapper">
        //                 <img className="img-fluid rounded" src="assets\img\services\serv1-1_cr.jpg" alt="Generic placeholder image" />
        //             </div>
        //             <div className="img-overlay">
        //                 <p >СТАЙЛИНГ</p>
        //                 <button className="btn">
        //                     <p ><a className="btn btn-secondary btn-block" href="service1.html" role="button">Подробнее</a></p>
        //                 </button>
        //             </div>
        //         </div>

        //         <div className="col-lg">
        //             <div className="img-wrapper">
        //                 <img className="img-fluid rounded" src="assets\img\services\serv2-1_cr.jpg" alt="Generic placeholder image" />
        //             </div>
        //             <div className="img-overlay">
        //                 <p>РАЗБОР ГАРДЕРОБА И ШОПИНГ СОПРОВОЖДЕНИЕ</p>
        //                 <button className="btn">
        //                     <p ><a className="btn btn-secondary btn-block" href="service2.html" role="button">Подробнее</a></p>
        //                 </button>
        //             </div>
        //         </div>

        //         <div className="col-lg">
        //             <div className="img-wrapper">
        //                 <img className="img-fluid rounded" src="assets\img\services\serv3-3_cr.jpg" alt="Generic placeholder image" />
        //             </div>
        //             <div className="img-overlay">
        //                 <p >ГОДОВОЕ СОПРОВОЖДЕНИЕ</p>
        //                 <button className="btn">
        //                     <p ><a className="btn btn-secondary btn-block" href="service3.html" role="button">Подробнее</a></p>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div className="services"  >
            <div className="services__header" >
                <h2 className='services__title' >МОИ УСЛУГИ</h2>
                <p className='services__text'>Здесь вы можете ознакомиться с моими услугами более подробно</p>
            </div>
            <CardGroup>
                <Card className="md-light text-white">
                    <Card.Img src={serv1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>СТАЙЛИНГ</Card.Title>
                        <NavLink className='btn btn-outline-warning' to='/styling'>Подробнее</NavLink>
                    </Card.ImgOverlay>
                </Card>
                <Card className="md-light text-white">
                    <Card.Img src={serv2} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>РАЗБОР ГАРДЕРОБА И ШОПИНГ СОПРОВОЖДЕНИЕ</Card.Title>
                        <NavLink className='btn btn-outline-warning' to='/wardrobe'>Подробнее</NavLink>
                    </Card.ImgOverlay>
                </Card>
                <Card className="md-light text-white">
                    <Card.Img src={serv3} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>ГОДОВОЕ СОПРОВОЖДЕНИЕ</Card.Title>
                        <NavLink className='btn btn-outline-warning' to='/escort'>Подробнее</NavLink>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>
        </div >
    );
}