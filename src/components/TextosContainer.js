import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import cardimage1 from './../img/card-img-1.png';
import cardimage2 from './../img/card-img-2.png';
import cardimage3 from './../img/card-img-3.png';
import cardimage4 from './../img/card-img-4.png';
import cardimage5 from './../img/card-img-5.png';
import iglogo from './../img/instagram.svg'
import inlogo from './../img/linkedin.svg'
import twlogo from './../img/twitter.svg'
import ytlogo from './../img/youtube.svg'
import fblogo from './../img/facebook.svg'

const TextosContainer = () => {
  return (
    <CardGroup className='contenedores'>
    <Card border='transparent' className='cartita' >
      <Card.Img className='top' src={cardimage1}/>
      <Card.Body>
        <Card.Title className='cartatitulo'><b>Nuestro Equipo</b></Card.Title>
        <Card.Text className='cartatexto'>
        Creamos diferentes soluciones de inversión mediante finanzas avanzadas que operan de forma orgánica.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cartita' >
      <Card.Img className="top" src={cardimage2} />
      <Card.Body>
        <Card.Title className='cartatitulo'><b>Visión</b></Card.Title>
        <Card.Text className='cartatexto' >
        Abordamos los mercados financieros planificando estrategias a partir de un análisis criterioso integral.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cartita' >
      <Card.Img className="top" src={cardimage3} />
      <Card.Body>
        <Card.Title className='cartatitulo'><b>Experiencia</b></Card.Title>
        <Card.Text className='cartatexto' >
        Tenemos más de 20 años de experiencia operando con los Primary Dealers y los Hedge Funds más grandes del mundo.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cartita' >
      <Card.Img className="top" src={cardimage4} />
      <Card.Body>
        <Card.Title className='cartatitulo'><b>Innovación</b></Card.Title>
        <Card.Text className='cartatexto' >
        Nos actualizamos permanentemente a todas las novedades del mercado.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cartita' >
      <Card.Img className="top" src={cardimage5} />
      <Card.Body>
        <Card.Title className='cartatitulo'><b>Más de Ingeniería Financiera</b></Card.Title>
        <Card.Text className='cartatexto' >
          <div className='links'>
            <ul>
              <li><a href="https://www.instagram.com/albot.if/" target="_blank"><img src={iglogo} alt="Instagram" width="20" height="20"/></a></li>
              <li><a href="https://www.linkedin.com/company/ingenieria-financiera-if/about//" target="_blank"><img src={inlogo} alt="LinkedIn" width="20" height="20"/></a></li>
              <li><a href="https://www.twitter.com/" target="_blank"><img src={twlogo} alt="Twitter" width="20" height="20"/></a></li>
              <li><a href="https://www.youtube.com/" target="_blank"><img src={ytlogo} alt="Youtube" width="20" height="20"/></a></li>
              <li><a href="https://www.facebook.com/" target="_blank"><img src={fblogo} alt="Facebook" width="20" height="20"/></a></li>
            </ul>      
          </div>  
        </Card.Text>
      </Card.Body>
    </Card>
  </CardGroup>
  )
}

export default TextosContainer;
