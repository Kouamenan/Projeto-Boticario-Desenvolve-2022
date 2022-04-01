import './style.css';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import perfumes from '../../data';
import { useState } from 'react';

function Main() {
  const [products, setProducts] = useState([...perfumes]);
  const [open, setOpen] = useState(false);
  const [currentProduct, setcurrentProduct] = useState({});

  function handleDetailProduct(product) {
    setOpen(true)
    setcurrentProduct(product);
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div className="container">
      <Header />
      <div className='container-products'>
        {products.map((product) => (
          <Product 
            key={product.id}
            item={product}
            handleDetailProduct={handleDetailProduct}
          />
        ))}
      </div>
      <Footer />
      <Modal
        open={open} 
        handleClose={handleClose}
        product={currentProduct}
      />
    </div>
  );
}

export default Main;
