import React, { useState } from 'react';
import "./menue.css";
import "./menueDetails";
import { menuDetail } from './menueDetails';
import Popup from './Popup';

const Menue = () => {
    const [visible, setVisible] = useState(false);
    const [orderTitle, setOrderTitle] = useState('');
    const [orderPrice, setOrderPrice] = useState();
    const[productPic,setProductPic]=useState();

    const handleOrderClick = (item) => {
        setOrderTitle(item.title);
        setOrderPrice(item.price);
       
        setProductPic(item.image)
        
        setVisible(true);
        
      };
      debugger
    
      

    const handleModalClose = () => {
        setVisible(false);
        setOrderTitle('');
        
      };






    function mapping(item) {
        return (
            <div className="card" key={item.id}>
                <img src={item.image} alt="Image" className="card-image" />
                <div className="card-content">
                    <h5>{item.title}</h5>
                    <h4>$ {item.price}</h4>
                    <button onClick={() => handleOrderClick(item)}>Buy Now</button>
                </div>
            </div>
        );
    }

    return (
        <div className='menue-main'>
            <h1>OUR <span>MENU</span></h1>
            <div className='card-mapping container'>{menuDetail.map(mapping)}</div>

            
            <Popup
            visible={visible}
            orderTitle={orderTitle}
            orderPrice={orderPrice}
            productPic={productPic}
            handleModalClose={handleModalClose}
            setVisible={setVisible}
          /> 

          
        </div>
    );
}

export default Menue;
