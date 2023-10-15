import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { UploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {
  const [video,setVideo] = useState({
    id:"",caption:"",url:"",embedlink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const extractUrl = (e) =>{
    const {value} =e.target
    if(value){
      const embedData = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedlink:embedData})
    }else{
      setVideo({...video,embedlink:""})
    }
    
  }

  const handleUpload = async (e)=>{
    // Get details of video
    const {id,caption,url,embedlink} = video
    // check video is empty or not
    if(!id || !caption || !url || !embedlink){
      toast.warning("Please fill the form completely")
    }else{
      // make api call
      const response = await UploadVideo(video)
      console.log(response)
      if(response.status>=200 && response.status<300){
        // share response via state lifting
        setUploadVideoServerResponse(response.data)
        // alert success message
        toast.success(`${response.data.caption} Video uploaded`)
        // reset video state
        setVideo({ id:"",caption:"",url:"",embedlink:""})

        // hide modal
        handleClose()
      }else{
        alert("Uploading error.. Perform operations after some time!!!")
      }
    }
  }

  console.log(video);
  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload Video</h5>
        <button variant="primary" onClick={handleShow} className='btn'><i class="fa-solid fa-circle-plus fs-5"></i></button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please fill the following details!!! </p>
            <Form className='border border-secondary p-3 rounded'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Image URL"onChange={(e)=>setVideo({...video,url:e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Youtube Vido Link" onChange={extractUrl}/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleUpload} variant="primary">Upload</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <ToastContainer 
        position='top-center'
        theme='colored'
        autoClose={2000}
      />
    </>
  )
}

export default Add