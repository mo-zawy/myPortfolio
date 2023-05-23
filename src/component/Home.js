import React from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Im from '../sawy.jpg'
import './home.css'
const Home = () => {
  return (
    <Container>  
      <div className='Home'>
        <div className='main-home'>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <Image src={Im} fluid thumbnail />
            </div>
            <div className='col-md-6 col-12 text-center'>
              <Card.Body>
                <Card.Title>Mohamed Elsawy</Card.Title>
                <Card.Subtitle className="mb-2">Software Engineer</Card.Subtitle>
                <Card.Text>
                  I am fresh graduated for a B.S. in Computer Science in Department of Mathmatics at Faculty of Science, Cairo University. I graduate in Summer, 2021 with (Very Good) GPA 2.66/5 .
                </Card.Text>
                <hr className='hr1' />
                <Card.Text>
                Interests: Full-Stack (MERN), Mobile development, Java, Python.
                </Card.Text>
                <hr className='hr1' />
                <div className='row' style={{fontSize:'2.5rem' ,color: '#FEA443'}}>
                  <div className='col-3' >
                    <a href='https://github.com/mo-zawy' >
                      <i className="bi bi-github" />
                    </a>      
                  </div>
                  <div className='col-3' >
                    <a href='https://www.linkedin.com/in/mohamed-elsawy-58a33b148'>
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                  <div className='col-3'>
                    <a href='mailto:mohamed.elsawy739@gmail.com' title='Send Mail'>
                      <i className="bi bi-envelope" />
                    </a>
                  </div>
                  <div className='col-3'>
                    <a href='https://api.whatsapp.com/send?phone=01555036291' title='send whatsapp'>
                      <i className="bi bi-whatsapp" />
                    </a>
                  </div>
                </div>
                <hr className='hr1' />
                <div className='row'>
                    <div className='col-4'>
                      <Button as={Link} to='/projects'
                        style={{background:'#FEA443', color:'#812F33',fontWeight:'bold'}}
                      >
                        Projects
                      </Button>
                    </div>
                    <div className='col-4'>
                    <Button as={Link} to='/contact' 
                        style={{background:'#FEA443', color:'#812F33',fontWeight:'bold'}}
                      >
                        contact
                      </Button>
                    </div>
                    <div className='col-4'>
                    <Button as={Link} to='/resume' 
                        style={{background:'#FEA443', color:'#812F33',fontWeight:'bold'}}
                      >
                        resume
                      </Button>
                    </div>
                </div>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
};

export default Home;
