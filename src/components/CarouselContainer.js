import react from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './../img/banner-nada-albot.png';
import image2 from './../img/banner-nada-mineria.png';
import image3 from './../img/banner-nada-trading2.png';
import image4 from './../img/banner-nada-estrategia2.png';
import image5 from './../img/banner-nada-if.png';
import image6 from './../img/banner-nada-bdt.png';
import imageBDT from './../img/Logo-bdt-01.png';

const CarouselContainer = () => {
return (
    <Carousel className='carruseta'>
  <Carousel.Item class='carouselBloque' interval={5000}>
    <img
      className="d-block w-100"
      src={image5}
      alt="Ingenieria Financiera"
    />
    <Carousel.Caption>
    <div className='espaciado'>
      <h2><b>Soluciones financieras a tu alcance</b></h2>
      <div className="alineacion">
      <p>Somos un grupo financiero dedicado a la generación de diferentes soluciones de inversión mediante finanzas avanzadas, tanto para clientes retail como para grandes corporaciones.</p>
      </div>
    </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item class='carouselBloque' interval={5000}>
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
        <div className="alineacion">
          <p>Desarrollamos un software de <b>algo-trading automatizado</b> simple e intuitivo, libre de la necesidad de saber programar y flexible a cualquier estrategia de inversión.</p>
          <a href='http://52.23.241.52:27053/' target='_blank'>
            <button className='button' type="button" class="btn btn-outline-light">Descubri más sobre <b>Al.Bot</b></button>
          </a>
        </div>
      </div>
    </Carousel.Caption>
  </Carousel.Item > 

  <Carousel.Item class='carouselBloque' interval={5000}>
    <img
      className="d-block w-100"
      src={image6}
      alt="bdt"
    />
    <Carousel.Caption>
    <div className='espaciado'>
      <img className='imagenBDT' src={imageBDT} alt='imageBDT'/>
      <div className="alineacion">
      <p>Somos un grupo financiero dedicado a la generación de diferentes soluciones de inversión mediante finanzas avanzadas, tanto para clientes retail como para grandes corporaciones.</p>
      <a href='https://bonosdeltesoroestadosunidos.com/' target='_blank'><button className='button' type="button" class="btn btn-outline-light">Ir a <b>BdT.US</b></button></a>
      </div>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item class='carouselBloque' interval={5000}>
    <div className='slider'>
    <img
      className="d-block w-100"
      src={image2}
      alt="Mineria"
    />
    <Carousel.Caption>
      <div className='espaciado'>
      <h1 className='textoMineria'><b>Minería</b></h1>
        <div className="alineacion">
          <p className='textoMineria'>Construimos una <b>granja de minería participativa</b> con rendimientos altos que son controlados por los usuarios a través de nuestro blotter histórico en donde se encuentra el detalle de todo el proceso productivo.</p>
          <button className='button' type="button" class="btn btn-outline-light"><b>Próximamente</b></button>
        </div>
        </div>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item class='carouselBloque' interval={5000}>
    <img
      className="d-block w-100"
      src={image3}
      alt="Trading"
    />
    <Carousel.Caption>
    <div className='espaciado'>
      <h1><b>Señales</b></h1>
      <div className="alineacion">
      <p>Como resultado de nuestras investigaciones financieras y desarrollos tecnológicos, estamos <b>constantemente tomando posiciones en los mercados de trading de plataforma</b>.</p>
      <button className='button' type="button" class="btn btn-outline-light">Descubri más sobre <b>Señales</b></button>
    </div>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item class='carouselBloque' interval={5000}>
    <img
      className="d-block w-100"
      src={image4}
      alt="Estrategia"
    />
    <Carousel.Caption>
    <div className='espaciado'>
      <h1><b>Estrategia</b></h1>
      <div className="alineacion">
      <p>Desarrollamos <b>estrategias a medida para cada cliente</b> en función de sus necesidades y capacidades particulares, orientadas a satisfacer no sólo las necesidades económicas sino también a complementar sus actividades principales y expertise específico.</p>
      <button className='button' type="button" class="btn btn-outline-light">Descubri más sobre <b>Estrategia</b></button>
      </div>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}

export default CarouselContainer;