import React from 'react'
import {Link} from 'react-router-dom'


function Footer() {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column' style={{ width: "100%", height: '300px' }}>
            <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
                <div style={{width:"400px"}} className='website'>
                    <h4><i className='fa-solid fa-cloud-arrow-up'></i>Media Player</h4>
                    <h6>Designed and build with all the love in the word by the bootstrap team with the help of our contributors</h6>
                    <h6>Code licenced Luminar, odc cc BY 3.6 </h6>
                    <p>Currently v1.0.0</p>
                </div>
                <div className='links d-flex flex-column'>
                    <h4>Links</h4>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
                    <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
                    <Link to={'/Watch-History'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>

                </div>
                <div className='guides d-flex flex-column'>
                <h4>Guids</h4>

                <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
                    <Link to={'https://react-bootstrap.guthub.io.com/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
                    <Link to={'https://react-bootstrap.guthub.io.com/'} style={{textDecoration:'none',color:'white'}}>Routing</Link>

                </div>

                
                <div className='contact d-flex flex-column'>
            <h4>Contact Us</h4>
            <div>

            </div>
            <div>
            <Link to={'/'} className='mx-2' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin" style={{color: '#ffffff'}}></i></Link>
            <Link to={'/'} className='mx-3' style={{textDecoration:'none',color:'white'}}>
            <i class="fa-brands fa-twitter" style={{textDecoration:'none',color:'white'}}></i></Link>
            <Link to={'/'} className='mx-3' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook-f" style={{textDecoration:'none',color:'white'}}></i></Link>
            <Link to={'/'} className='mx-2' style={{textDecoration:'none',color:'white'}}><i class="fa-regular fa-envelope" style={{textDecoration:'none',color:'white'}}></i></Link>
            
            </div>
        </div>
            </div>
            <p>Copyright 2023 Media Player. Buit with React</p>
        </div>
    )
}

export default Footer


