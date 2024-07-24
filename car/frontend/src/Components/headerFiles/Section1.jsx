import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
function Section1() {
  return (
    <>  
        <section className='top_section_header'>
            <Container>
                <Row>
                    <Col className="top d-flex justify-around" >
                        <h6>support@domain.com</h6>
                        <h6>Mon to Fri : 9:00am t0 6:00pm</h6>
                        <h6>New Delhi, India</h6>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section1