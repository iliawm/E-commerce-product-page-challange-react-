import { useEffect, useState } from "react";
import productsData from "../../api/products.json";

function Products({ }) {
  const [imgid, setImgIndex] = useState(1);
  const [imgPath, setImgPath] = useState(`/image-product-${imgid}.jpg`);
  const [quantcount, setquant] = useState(0);
  const [len, setlen] = useState(0);
  useEffect(() => {
    setlen(productsData.products[0].images.length);
  }, []);

  return (
    <div className="product">
      
        <div className="product-img-container">
          <div className="prod-undercont">
      <img src={imgPath} alt="" className="product-img" />
      <button
        onClick={() => {
          const newId = imgid - 1;
          const newPath = `/image-product-${newId}.jpg`;
          if (productsData.products[0].images.includes(newPath)) {
            setImgIndex(newId);
            setImgPath(newPath);
          }
        }}
        className="previous-product-btn"
      >
        <img src="/icon-previous.svg" alt="" />
      </button>
      <button onClick={
        () => {
          const newId = imgid + 1;
          const newPath = `/image-product-${newId}.jpg`;
          if (productsData.products[0].images.includes(newPath)) {
            setImgIndex(newId)
            setImgPath(newPath);
          }
        }
      } className="next-product-btn">
        <img src="/icon-next.svg" alt="" />
        
      </button>
      </div>
      <div className="prodspics-under">
        {productsData.products[0].images.map((image, index) => (
          <div key={index} className="prodpic">
            <button className="btn-under-pic" onClick={() => {
              setImgIndex(index + 1);
              setImgPath(image);
            }}>
              <img src={image} alt="" className="imb-under-pic"/>
            </button>
          </div>
        ))}
      </div>
      </div>
      <div className="p-title">
        <h4 className="company-name">{productsData.products[0].company.toUpperCase()}</h4>
        <h2 className="product-title">{productsData.products[0].name}</h2>
      </div>
      <div className="description">{productsData.products[0].description}</div>
      <div className="priceinfo">
      <div className="p-cat">
      <div className="Price-after">${(productsData.products[0].price * (1 - productsData.products[0].discount / 100)).toFixed(2)}</div>
      <div className="discount">{productsData.products[0].discount}%</div>
      </div>
      <div className="price-before">${productsData.products[0].price.toFixed(2)}</div>
      </div>
      <div className="add-cart-container">
      <div className="add-cart">
        <button onClick={()=>{
          quantcount>0?setquant(quantcount-1):setquant(quantcount)
        }} className="minus-btn"><img src="/icon-minus.svg" alt="" className="minus"/></button>
        <div className="quantity">{quantcount}</div>
        <button onClick={()=>{
          quantcount>=0?setquant(quantcount+1):setquant(quantcount)
        }} className="plus-btn"><img src="/icon-plus.svg" alt="" className="plus"/></button>
        </div>
        
      </div>
      <div className="div-btn-add-to-cart">
      <button className="add-to-cart-btn">
          <img src="/icon-cart.svg" alt="" className="icon-cart.svg" />
        Add to cart
        </button>
        </div>
    </div>
  );
}
export default Products;
