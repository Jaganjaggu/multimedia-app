import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()

  const navigate = () =>{
    navigateByUrl('/home')
  }
  return (

    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between'>
        <Col></Col>

        <Col lg={4}>
          <h3>Welcome to<span className='text-warning'>Media Player</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perspiciatis nesciunt impedit quidem cum magni dignissimos voluptas dolorum fugit ea ratione, ad accusantium atque, corporis, rerum nulla perferendis reiciendis libero?</p>
          <button onClick={navigate} className='btn btn-info mt-5 fw-bolder'>Get Started</button>
        </Col>

        <Col></Col>
        <Col lg={6}>
          {/* <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="Landing" /> */}
          <img src="https://media4.giphy.com/media/WQIeiETO0wHDCUbvs4/giphy.gif" alt="Landing" />

        </Col>
      </Row>
      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-between flex-column'>
        <h3>Features</h3>
        <div className='cards mt-5 d-flex justify-content-between align-items-center w-100'>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://media3.giphy.com/media/Zf8ZvPzlLnG4NLGsBb/200w.gif?cid=82a1493bw981oheuu8urej3rxoxbb0j9cweqnqs419vusfhr&ep=v1_gifs_related&rid=200w.gif&ct=g" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://media.tenor.com/SZ0mKr1WKMsAAAAd/music-wave.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://gifdb.com/images/high/simple-audio-sound-wave-awolo4ekfaknri0n.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>

      <div className='container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded'>
        <div className='content'>
          <h3 className='mb-3 text-warning'>Simple, Fast and Powerful</h3>
          <h6><span className='fs-5 fw-bolder '>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit eos incidunt sequi perspiciatis minus ipsa cupiditate deleniti velit voluptas vitae molestiae eum ducimus neque quo quia dolore, repellendus nam!</h6>
          <h6><span className='fs-5 fw-bolder '>Categorise Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit eos incidunt sequi perspiciatis minus ipsa cupiditate deleniti velit voluptas vitae molestiae eum ducimus neque quo quia dolore, repellendus nam!</h6>
          <h6><span className='fs-5 fw-bolder '>Managinh History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit eos incidunt sequi perspiciatis minus ipsa cupiditate deleniti velit voluptas vitae molestiae eum ducimus neque quo quia dolore, repellendus nam!</h6>
        </div>
        <div className='video ms-5'>
          <iframe width="600" height="400" src="https://www.youtube.com/embed/SBCoGwY3h18" title="Dark Trap Beat | Trap Beat Instrumental | &quot;SKULL&quot; | (Prod. RikeLuxxBeats x Newstreetmelody)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>

  )
}

export default LandingPage