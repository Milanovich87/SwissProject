import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Form.scss'
import axios from 'axios';
import { useState } from 'react';
import { Alert, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FormFloatingBasicExample() {
    const TOKEN = '5730583705:AAFMdD3gxkC4F5GwiuqkujVJTCF5z1CnxdI';
    const CHAT_ID = '-1001852804288';
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    document.getElementById('tg')?.addEventListener('submit', function (e) {
        e.preventDefault();
        let message = `<b>Заявка с сайта!</b>\n`;
        // @ts-ignore
        message += `<b>Почта:</b>${this.email.value}\n`;
        // @ts-ignore
        message += `<b>Имя:</b>${this.name.value}`;
        // @ts-ignore
        message += `<b>Сообщение:</b>${this.textarea.value}`;
        console.log(message);
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
            .then((res) => {
                // @ts-ignore
                this.name.value = '';
                // @ts-ignore
                this.email.value = '';
                // @ts-ignore
                this.textarea.value = '';
            })
            .catch((err) => {
                console.warn(err);
            })
            .finally(() => {
                console.log('Конец');
            })
    })
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="form__title">
                <h2>ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
            </div>
            <div className='main__form'>
                <Form id='tg'>
                    <Form.Text >Чтобы заказать услугу или связаться со мной, заполните, пожалуйста, форму для обратной связи и нажмите кнопку "ОТПРАВИТЬ".</Form.Text>
                    <FloatingLabel controlId="floatingInput" label="Имя">
                        <Form.Control type="text" name='name' placeholder="Имя" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control type="email" name='email' placeholder="Email" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Сообщение">
                        <Form.Control
                            as="textarea"
                            name='textarea'
                            placeholder="Сообщение"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label=' ' />
                        <Form.Text >
                            Согласен (-на)с <Link to='/privacy'>политикой конфиденциальности</Link> и обработки персональных данных.
                            {/* Согласен (-на)с <a href="">политикой конфиденциальности</a> и обработки персональных данных. */}
                        </Form.Text >
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={() => setShow(true)}>
                        Отправить
                    </Button>
                </Form>
                <Alert variant="success" show={show} onClose={() => setShow(false)} dismissible>
                    Сообщение отправлено!
                </Alert>
            </div>
        </>

    );
}

export default FormFloatingBasicExample;
