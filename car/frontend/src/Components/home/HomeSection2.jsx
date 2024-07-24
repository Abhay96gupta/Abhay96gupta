import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, CardTitle, CardText, Container} from 'react-bootstrap'
import img01 from '../../Assets/sliderbanner/carbanner04.jpg';
import img02 from '../../Assets/sliderbanner/carbanner02.jpg';
import img03 from '../../Assets/sliderbanner/carbanner03.jpg';

function HomeSection2() {
  return (
    <>
    <section className='aboutsection'>
        <h1 className='container-fluid' style={{backgroundColor:"white", color:"black", paddingTop:"20px", paddingBottom:"20px", textTransform:"capitalize"} }>About Our Team</h1>
        <div className='aboutprofiles'>
            <Row>
                <Col md={3} lg={3} >
                    <div className='card' >
                        <img className='card-img-top' src={img01} alt='Card Img'/>
                        <div className='card-body'>
                            <h4 className='card-title'> Abhay Gupta</h4>
                            <p className='card-text'>Some example text</p>
                            <Link className='btn btn-primary'>See Profile</Link>
                        </div>
                    </div>
                </Col>
                <Col md={3} lg={3} >
                    <div className='card' >
                        <img className='card-img-top' src={img01} alt='Card Img'/>
                        <div className='card-body'>
                            <h4 className='card-title'> Abhay Gupta</h4>
                            <p className='card-text'>Some example text</p>
                            <Link className='btn btn-primary'>See Profile</Link>
                        </div>
                    </div>
                </Col>
                <Col md={3} lg={3} >
                    <div className='card' >
                        <img className='card-img-top' src={img01} alt='Card Img'/>
                        <div className='card-body'>
                            <h4 className='card-title'> Abhay Gupta</h4>
                            <p className='card-text'>Some example text</p>
                            <Link className='btn btn-primary'>See Profile</Link>
                        </div>
                    </div>
                </Col>
                <Col md={3} lg={3} >
                    <div className='card' >
                        <img className='card-img-top' src={img01} alt='Card Img'/>
                        <div className='card-body'>
                            <h4 className='card-title'> Abhay Gupta</h4>
                            <p className='card-text'>Some example text</p>
                            <Link className='btn btn-primary'>See Profile</Link>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </div>
    </section>
    </>
  )
}

export default HomeSection2