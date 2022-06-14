import react from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './../img/banner-nada-albot.jpg';
import image2 from './../img/banner-mineria.jpg';
import image3 from './../img/banner-senales.jpg';
import image4 from './../img/banner-estrategia.jpg';
import image5 from './../img/banner-nada-if.jpg';
import image6 from './../img/banner-bdt.jpg';
import imageBDT from './../img/Logo-bdt-01.png';
import soluciones from './../img/Logo-Soluciones.png';
import isologo from './../img/isologo.png';

const CarouselContainer = () => {
return (
    <Carousel className='caption-va'>
  <Carousel.Item class='carouselBloque' interval={5000}>
    <img
      className="d-block w-100"
      src={image5}
      alt="Ingenieria Financiera"
    />
    <Carousel.Caption>
    <div className='espaciado'>
      <img className='imagenSoluciones' src={soluciones} alt='soluciones'/>
      <div className="alineacion">
      <p className='colorprincipal'>Somos un grupo financiero dedicado a la <b>generación de diferentes soluciones de inversión</b> mediante finanzas avanzadas, tanto para clientes retail como para grandes corporaciones.</p>
      </div>
    </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item class='carouselBloque' interval={5000}>
    <img
      className="d-block w-100"
      src={image1}
      alt="CuantIF"
    />
    <Carousel.Caption>
      <div className='espaciado'>
      <img className='isologo' src={isologo} alt='cuantif'/>
        <div className="alineacion">
          <p>Desarrollamos un software de algo-trading automatizado <b>creativo, intuitivo y automático</b>, libre de la necesidad de saber programar y flexible a cualquier estrategia de inversión.</p>
          <a href='http://cuantif.com/' target='_blank'>
            <button className='button' type="button" class="btn btn-outline-light">Descubri más sobre <b>Cuantif</b></button>
          </a>
        </div>
      </div>
    </Carousel.Caption>
  </Carousel.Item > 

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
      <p>Ofrecemos un servicio de <b>notificaciones de señales de compra y venta de activos</b> personalizado para cualquier instrumento financiero del mundo que opere en los mercados bursátiles o extrabursátiles.</p>
      <a href='#divOne'>
            <button className='button' type="button" class="btn btn-outline-light"><b>Contactanos</b></button>
      </a>
    </div>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
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
      <p>Traemos a la región <b>las estrategias de trading y cobertura más avanzadas</b>, dinámicas y sofisticadas sobre el instrumento financiero más seguro del mundo, benchmark de la economía mundial.</p>
      <a href='https://bonosdeltesoroestadosunidos.com/' target='_blank'><button className='button' type="button" class="btn btn-outline-light">Ir a <b>BdT.US</b></button></a>
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
        <p>Desarrollamos <b>estrategias a medida</b> orientadas a satisfacer necesidades económicas y a complementar sus actividades principales y expertise específico.</p>
        <a href='#divOne'>
              <button className='button' type="button" class="btn btn-outline-light">Contactanos</button>
        </a>
      </div>
    </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item class='carouselBloque' interval={5000}>
    <img
      className="d-block w-100"
      src={image3}
      alt="Cobertura"
    />
    <Carousel.Caption>
    <div className='espaciado'>
      <h1><b>Cobertura</b></h1>
      <div className="alineacion">
      <p>Utilizando derivados financieros, proveemos estrategias, básicas o sofisticadas, personalizadas en base a la necesidad de cada usuario, con el objetivo de proteger la inversión ante el riesgo de operar en el mercado.</p>
      <a href='#divOne'>
            <button className='button' type="button" class="btn btn-outline-light">Contactanos</button>
      </a>
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
</Carousel>
)
}

export default CarouselContainer;