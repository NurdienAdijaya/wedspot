import React, {useState} from 'react'
import {Button, Alert} from 'react-bootstrap'
import './message.css'

export function SuccessMessage(message) {
    const [show, setShow] = useState(true);
  
    return (
      <div className="position">
        <Alert show={show} variant="success">
         <div className="d-flex justify-content-between ">
          <h3 className="pe-3">
            {message}
          </h3>
            <Button onClick={() => setShow(false)} variant="" className="fw-bold">
              DISMISS
            </Button>
          </div>
        </Alert>

      </div>
    )  
}

export function FailedMessage(props) {
    const [show, setShow] = useState(true);
    console.log(props)
  
    return (
      <div className="position">
        <Alert show={show} variant="danger">
         <div className="d-flex justify-content-between ">
          <h3 className="pe-5">
            {props.message}
          </h3>
            <Button onClick={() => setShow(false)} variant="" className="fw-bold">
              DISMISS
            </Button>
          </div>
        </Alert>

      </div>
    )  
}

