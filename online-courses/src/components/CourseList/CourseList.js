import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './CourseList.css'
const CourseList = (props) => {
    return (
        <div className="list">
            <Card style={{ width: '18rem' ,height:'28rem'}}>
                <Card.Img variant="top" src={props.courses.img} className="card-img"/>
                <Card.Body>
                    <Card.Title>{props.courses.name}</Card.Title>
                    <Card.Text> Trainer: {props.courses.trainer} </Card.Text>
                    <Card.Text> Price: {props.courses.price}$ </Card.Text>
                    <Button variant="primary" onClick={()=>props.handleAddCart(props.courses)}>Buy This Course</Button>
                </Card.Body>
                </Card>
        </div>
    );
};

export default CourseList;