import React from 'react';
import { Button, Row, Col, Label } from 'reactstrap'; 
import  { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { addComment } from '../redux/ActionCreators';


function handleSubmit(props,values) {
    console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    props.addComment(props.dishId, values.rating, values.author, values.comment);
}   
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const CommentForm = (props) => {
    const {
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);  
  
    return (
      <div>
        <Button outline  onClick={toggle}> <span className="fa fa-pencil"></span> Submit Comment</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
          <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(props,values)}>
                   <Row className="form-group">
                     <Label htmlFor="rating" md={10}>Rating</Label>
                        <Col md={{size: 12}}>
                                <Control.select model=".rating" name="contactType"
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                    </Row>

                    
                    <Row className="form-group">
                                <Label htmlFor="your name" md={10}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={4}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="message" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                          </LocalForm>  
                </ModalBody>
        </Modal>
      </div>
    );
  }

  export default CommentForm;