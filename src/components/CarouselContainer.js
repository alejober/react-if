import react from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './../img/banner-nada-albot.png';
import image2 from './../img/banner-nada-mineria.png';
import image3 from './../img/banner-nada-trading.png';
import image4 from './../img/banner-nada-estrategia.png';

const CarouselContainer = () => {
return (
    <Carousel className='carruseta'>
  <Carousel.Item class='CarouselBloque' interval={5000}>
    <img
      className="d-block w-100"
      src={image1}
      alt="Al.Bot"
    />
    <Carousel.Caption>
      <div className='espaciado'>
        <div className='textazo'>
      <h1><b>Al.Bot</b></h1>
      </div>
      <p>Desarrollamos un software de <b>algo-trading automatizado</b> simple e intuitivo, libre de la necesidad de saber programary flexible a cualquier estrategia de inversión.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <div className='slider'>
    <img
      className="d-block w-100"
      src={image2}
      alt="Mineria"
    />
    <Carousel.Caption>
      <div className='espaciado'>
      <h1><b>Minería</b></h1>
      <p>Construimos una <b>granja de minería participativa</b> con rendimientos altos que son controlados por los usuarios a través de nuestro blotter histórico en donde se encuentra el detalle de todo el proceso productivo.</p>
      </div>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={image3}
      alt="Trading"
    />
    <Carousel.Caption>
    <div className='espaciado'>
      <h1><b>Trading</b></h1>
      <p>Como resultado de nuestras investigaciones financieras y desarrollos tecnológicos, estamos <b>constantemente tomando posiciones en los mercados de trading de plataforma</b>. En consecuencia, ofrecemos múltiples servicios de suscripción para acceder a ver nuestro blotter de operaciones en tiempo real y recibir alertas.</p>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={image4}
      alt="Estrategia"
    />
    <Carousel.Caption>
    <div className='espaciado'>
      <h1><b>Estrategia</b></h1>
      <p>Desarrollamos <b>estrategias a medida para cada cliente</b> en función de sus necesidades y capacidades particulares. Estas estrategias están orientadas a satisfacer no sólo las necesidades económicas sino también a complementar sus actividades principales y expertise específico.</p>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}

export default CarouselContainer;