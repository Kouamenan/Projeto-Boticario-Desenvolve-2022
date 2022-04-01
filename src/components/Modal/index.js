import './style.css'
import CloseIcon from '../../assets/close-icon.svg'
import {handleCalculateInstallments} from '../../utils/functions'
import { useEffect, useState } from 'react'

function Modal({open, handleClose, product}) {
    const [topPosition, settopPosition] = useState(0);

    useEffect(() => {
        if(open) {
            settopPosition(document.documentElement.scrollTop + 25)
        }
    }, [open]);
    
    return (
        <>
        { open && 
        <div className='container-modal'>
            <div 
                className='modal'
                style={{top: topPosition}}
            >
                <div className='modal-body'>
                    <img 
                        src={product.image} 
                        alt="" 
                        className='product-image'
                    />

                    <img 
                        src={CloseIcon} 
                        alt="close icon"
                        className='close' 
                        onClick={() => handleClose()}
                    />

                    <strong>{product.name}</strong>
                    <p>{product.description}</p>

                    <div className='container-buy'>
                        <button className='btn-buy'>COMPRAR</button>
                    

                    <div className='container-prices'>
                        <div className='content-prices'>
                            <span>R$ {product.oldPrice.toFixed(2)}</span>
                            <h2>R$ {product.currentPrice.toFixed(2)}</h2>
                        </div>

                        <div className='content-installments'>
                            <h4>6x R$ {handleCalculateInstallments(product.currentPrice)}</h4>
                            <span></span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        }
        </>
       
    )
}

export default Modal;