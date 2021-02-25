import React from 'react';
import { Modal, Button ,Form } from 'react-bootstrap';


function EmailCart({ showModal ,handleFbEmail, handleSubmitEmail}) {
    return (
        <Modal show={showModal} >
         
            <Modal.Body closeButton >
                <Modal.Title>Please Enter your Email</Modal.Title>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="email" placeholder="Enter email here" onChange={(e) =>handleFbEmail(e)} />
                    </Form.Group>
                </Form>
                <Button  className="left-f1"  onClick={handleSubmitEmail} >
                    Submit
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default EmailCart;