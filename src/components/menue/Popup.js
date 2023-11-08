import React, { useContext, useState } from 'react';
import { Modal, Button, Select } from 'antd';
import "./menue.css";
import { globalData } from '../../context/Context';



const Popup = ({
    visible,
    orderTitle,
    orderPrice,
    productPic,
    handleModalClose,
    setVisible
}) => {

    const{getDataMenue}=useContext(globalData)
    const [qty, setQty] = useState(1)


    const cartItem = {
        title: orderTitle,
        price: orderPrice,
        pic: productPic,
        qty:qty
        
    };


    function handleQty(operation) {
        if (operation === "decrement") {
            if (qty > 1) {
                setQty(qty - 1);
            }
        } else if (operation === "increment") {
            setQty(qty + 1);
        }
    }

    return (
        <Modal visible={visible} onCancel={handleModalClose} footer={null}>
            <div className="modal-content popup-css" >
                <h2>{orderTitle}</h2>
                <hr style={{ color: "#ffc107" }}></hr>
                <div className="pop-justify">
                    <div>
                        <img src={productPic} ></img>
                    </div>
                    <div className='popup-btn'>
                        <p>Quantity</p>
                        <div style={{ border: "2px solid #ffc107", borderRadius: "2px" }}>
                            <button onClick={() => handleQty("decrement")}>-</button>
                            <button style={{ backgroundColor: "white", color: "black" }}>{qty}</button>
                            <button onClick={() => handleQty("increment")}>+</button>
                        </div>
                    </div>
                    <p style={{ color: "black", padding: "50px 0px 20px 0px" }}>Price: {Math.floor(orderPrice * qty)} Pkr</p>
                </div>
                <Button style={{ backgroundColor: "#ffc107" }} onClick={()=>{
                    getDataMenue(cartItem);
                    setVisible(false); 
                    setQty(1)
                }}>Add To Cart</Button>
                
            </div>
        </Modal>

    );
};



export default Popup;