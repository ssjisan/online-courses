import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './Cart.css';



const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0;i<cart.length; i++){
        const course = cart[i];
        total = Math.ceil(total + course.price);

    }
    return (
        <div className='cart'>
            <Card style={{ width: '18rem', height:'24rem' }}>
                 <Card.Body>
                    <Card.Title>Order Summary</Card.Title> <br/>
                        <Card.Subtitle className="mb-2 text-muted">Courses Ordered:{cart.length}</Card.Subtitle> <br/>
    <Card.Text>Total Price: {total} $</Card.Text> <br/>
                        <Button variant="success">Confirm</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;