import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import cardimage1 from './../img/card-img-1.png';
import cardimage2 from './../img/card-img-2.png';
import cardimage3 from './../img/card-img-3.png';
import cardimage4 from './../img/card-img-4.png';
import cardimage5 from './../img/card-img-5.png';

const TextosContainer = () => {
  return (
    <CardGroup className='contenedores'>
    <Card border='transparent' className='cartita' >
      <Card.Img className='top' src={cardimage1}/>
      <Card.Body>
        <Card.Title className='cartatitulo'><b>Nuestro Equipo</b></Card.Title>
        <Card.Text className='cartatexto'>
        Creamos diferentes soluciones de inversión mediante finanzas avanzadas que operan de forma orgánica para todo tipo de clientes.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cartita' >
      <Card.Img className="top" src={cardimage2} />
      <Card.Body>
        <Card.Title className='cartatitulo'><b>Visión</b></Card.Title>
        <Card.Text className='cartatexto' >
        Creemos que el único abordaje fructífero para operar en los mercados financieros es el que planifica estrategias a partir de un análisis criterioso integral.
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
        Nos actualizamos permanentemente a todas las novedades del mercado, como el holding y la operación de criptomonedas o la automatización de inversiones con trading algorítmico.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cartita' >
      <Card.Img className="top" src={cardimage5} />
      <Card.Body>
        <Card.Title className='cartatitulo'><b>Redes</b></Card.Title>
        <Card.Text className='cartatexto' >
          <div className='links'>
            <ul>
              <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
              <li><a href="https://www.twitter.com/" target="_blank">Youtube</a></li>
              <li><a href="https://www.youtube.com/" target="_blank">Twitter</a></li>
              <li><a href="https://www.twitter.com/" target="_blank">Telegram</a></li>
            </ul>      
          </div>  
        </Card.Text>
      </Card.Body>
    </Card>
  </CardGroup>
  )
}

export default TextosContainer;
