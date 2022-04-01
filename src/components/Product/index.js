import './style.css'
import {handleCalculateInstallments} from '../../utils/functions'

function Product({item, handleDetailProduct}) {
    return (
        <div 
            className='container-product'
            onClick={() => handleDetailProduct(item)}
        >
            <img src={item.image} alt="Product" />
            <span><b>{item.name}</b></span>
            <div className='content-prices'>
                <span>R$ {item.oldPrice.toFixed(2)}</span>
                <h2>R$ {item.currentPrice.toFixed(2)}</h2>
            </div>
            <div className='content-installments'>
                <h4>9x R$ {handleCalculateInstallments(item.currentPrice)}</h4>
                <span>Sem juros</span>
            </div>
        </div>
    )
}

export default Product;