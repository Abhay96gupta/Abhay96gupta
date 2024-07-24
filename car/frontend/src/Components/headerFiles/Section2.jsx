import {React, useState} from 'react'
import { Container, Navbar,Nav,Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/logos/carlogo.png'
function Section2() {
    const [fix, setFix] = useState(false)
    function setFixed(){
        if(window.scrollY >= 50 ){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
      return (
    <>
        <section className='Nav_Section'>
            <Navbar expand="lg" > 
                <Container >
                    <Navbar.Brand href="#">
                        <img src={Logo} alt='brandLogo' className='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"   style={{ maxHeight: '500px' }} navbarScroll>
                        <Nav.Link >
                            <Link to="/" id='link'> Home </Link>
                        </Nav.Link>
                        <Nav.Link  >
                            <Link to="/Blog" id='link'> Blog </Link>
                        </Nav.Link>
                        <Nav.Link  >
                            <Link to="/ExploreCar" id='link'> Explore Cars </Link>
                        </Nav.Link>
                        <Nav.Link  >
                            <Link to="/Contact " id='link'> Conatct </Link>
                        </Nav.Link>
                        <Nav.Link  >
                            <Link to="/About" id='link'> About </Link><vr/>
                        </Nav.Link>
                        
                    </Nav>
                    <Row className='navRightSide'>
                        <Col lg={12} sm={12} className='d-flex justify-content-around align-items-center' >
                            <i className='ri-phone-line' center></i>
                            <p>Call us Today<br/>907584512</p>
                        </Col>
                    </Row>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    </>
  )
}

export default Section2