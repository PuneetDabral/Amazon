import React from 'react'
import './cart.css';
import { Divider } from '@mui/material';

const Cart = () => {
  return (
    <div className='cart_section'>
        <div className='cart_container'>
            <div className='left_cart'>
              <img src="" alt="cart_img" />
              <div className='cart_btn'>
                <button className='cart_btn1'>Add to cart</button>
                <button className='cart_btn2'>Buy Now</button>
              </div>
            </div>
            <div className='right_cart'>
            <h3>Fitness gear</h3>
            <h4>title</h4>
            <Divider></Divider>
            <p className='mrp'>M.R.P: 500RS</p>
            <p>Deal Of The Day <span style={{color:'#B12704'}}>400RS</span></p>
            <p>You Save: <span style={{color:'#B12704'}}>100RS (20%)</span></p>

            <div className='discount_box'>
              <h5>Discount:<span style={{color:'#111'}}>Extra 10% Off</span></h5>
              <h4>Free Delivery:<span style={{color:'#111',fontWeight:600}}>Oct 8-21</span> Details</h4>
              <p>fastest delivery: <span style={{color:'#111',fontWeight:600}}>Tomorrow 11pm</span></p>
            </div>
            <p className='description'>About the item: <span style={{color:'#565959',fontSize:14,fontWeight:500,letterSpacing:'0.4px'}}>Desc</span></p>

            </div>
        </div>
    </div>
  )
}

export default Cart