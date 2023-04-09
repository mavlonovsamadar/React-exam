import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Canvas.css'
import { useTranslation } from 'react-i18next';


function OffCanvasExample({cart, setCart, handleChange, name, ...props }) {
  const { t } = useTranslation()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
      setCart(cart.filter((item)=>item.id !== id))
       handlePrice() 
       console.log(cart.filter((item)=>item.id !== id));
  }
  
  const handlePrice = () => {
      let count = 0;
      cart.map((item)=> ( count += item.amount * item.price))
      setPrice(count)
      console.log(count);
      
  }
  
  
  useEffect(()=> {
      handlePrice() 
  })



  return (
    <>
      <Button variant="Secondary" onClick={handleShow} className="me-2">
      <i className="fas fa-cart-plus"></i>
      </Button>
      <Offcanvas style={{backgroundColor: "black", color:"white"}} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header  style={{color:"white"}} >
      <i className="fas fa-cart-plus"></i>
          <Offcanvas.Title>Cart</Offcanvas.Title>
          <p onClick={handleClose} style={{color:"white", marginTop:"15px"}} className='canvasP' >X</p>
        </Offcanvas.Header>
        <Offcanvas.Body>
      
        {  cart?.map((item) => (
<div className="cart_box" key={item.id}>
    <div className="cart_img">
        <img src={item.img} alt="aa" />
        <p>{item.title}</p>
    </div>
    <div style={{textAlign:"center"}}>
        <span style={{color:"rgb(221, 191, 16)", textAlign:"center", }}>${item.price}</span>
<div className='d-flex'>
    <button onClick={()=> handleChange(item, 1)} style={{border:"none",fontSize:"15px", color:"white", backgroundColor: "black"}}>+</button>
    <button style={{border:"none", color:"white", fontSize:"15px", backgroundColor: "black"}}>{item.amount}</button>
    <button onClick={()=> handleChange(item, -1)} style={{border:"none", color:"white", fontSize:"15px", backgroundColor: "black"}}>-</button>
</div>
    </div>
    <button className="btn_remove" onClick={()=> handleRemove(item.id)} style={{border:"none", borderRadius: "5px", backgroundColor: "black", color:"white", padding:" 3px"}}>{t("text.Remove")}</button>

</div>
    ))}
        </Offcanvas.Body>
    <div className="total">
        <span>{t("text.SUBTOTAL")} </span>
        <span>${price}</span>
        </div>
      </Offcanvas>
    </>
  );
}

function Example({cart, setCart, handleChange}) {
  return (
    <>
        <OffCanvasExample key='id' placement='end' cart={cart} setCart={setCart} handleChange={handleChange}/>
    </>
  );
}
//render(<Example />);
export default Example