import React,{useEffect} from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { fetchPostFailure,fetchPostStarted,fetchPostSuccess,addToCart } from "../redux/actions/homeActions";
import './Homepage.css'

const HomePage = ()=>{

  const {loading,post,error,cart} = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetchPostStarted())
    axios.get('https://dummyjson.com/products')
    .then((response)=>dispatch(fetchPostSuccess(response.data)))
    .catch((err)=>dispatch(fetchPostFailure(err)))

  },[])

  console.log(post.products);

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    if (!isProductInCart(product.id)) {
      dispatch(addToCart(product));
    } else {
      alert("Product is already in the cart");
    }
  };

  console.log('insideCart > ', cart);

  return(
    <div>
      <h1>All Items</h1>
      <div className="allCards">
        {
          post.products && post.products.length > 0 ? (
            post.products.map((data) => (
              <div className="Card" key={data.id}>
                <img src={data.images[0]} alt={data.title} />
                <div className="cardDetail">
                  <p>Title: {data.title}</p>
                  <p>Price: ${data.price}</p>
                </div>
                <button onClick={() => handleAddToCart(data)}>Add to Cart</button>
              </div>
            ))
          ) : (<p>No products available</p>)
        }
      </div>
    </div>
  )
}

export default HomePage