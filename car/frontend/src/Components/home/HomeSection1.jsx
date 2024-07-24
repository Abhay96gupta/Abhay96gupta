import React from 'react'
import {Carousel} from 'react-bootstrap'
import img01 from '../../Assets/sliderbanner/carbanner04.jpg';
import img02 from '../../Assets/sliderbanner/carbanner02.jpg';
import img03 from '../../Assets/sliderbanner/carbanner03.jpg';
import HomeSection2 from './HomeSection2';

function HomeSection1() {
  return (
    <>
        <section className='sliderSection overlay'>
            <Carousel>
                <Carousel.Item>
                    <img src={img01} alt='carbanner' />
                    <Carousel.Caption>
                        <h3>This is First Slide</h3>
                        <p>This is first Slide caption</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img02} alt='carbanner2' />
                    <Carousel.Caption>
                    <h3>This is second Slide</h3>
                    <p>This is second Slide caption</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img03} alt='carbanner3' />
                    <Carousel.Caption>
                    <h3>This is third Slide</h3>
                    <p>This is Third Slide caption</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>

    </>
  )
}

export default HomeSection1