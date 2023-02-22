import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand className='header__logo' href="/">MILA MILANOVICH</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="portfolio">PORTFOLIO</Nav.Link>
                        <Nav.Link href="services">УСЛУГИ</Nav.Link>
                        {/* <NavDropdown title="УСЛУГИ" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">ГОДОВОЕ СОПРОВОЖДЕНИЕ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">ШОППИНГ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">СТАЙЛИНГ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">РАЗБОР ГАРДЕРОБА</NavDropdown.Item>
                        </NavDropdown> */}
                        {/* <NavDropdown title="РАБОТА СО СТИЛИСТАМИ" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">НАСТАВНИЧЕСТВО</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">СООБЩЕСТВО</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="form"><p className='contacts'>КОНТАКТЫ</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;