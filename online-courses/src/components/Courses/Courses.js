import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import courses from '../../fakeData/courses';
import './Courses.css';
import CourseList from '../CourseList/CourseList';
import Cart from '../Cart/Cart';

const Courses = (props) => {
    console.log(fakeData);
    const [cart, setCart] = useState([]);
    const handleAddCart = (courses) =>{
        console.log("added", courses);
        const newCart = [...cart, courses];
        setCart(newCart);
        }
    return (
        <div className="courses-container">
            <div className="courses-list">
                {courses.map(courses => <CourseList handleAddCart={handleAddCart} courses={courses} ></CourseList> )}
            </div>
            <div className="cart"> 
            <Cart cart={cart}></Cart>
             </div>
            
        </div>
    );
};

export default Courses;