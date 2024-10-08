import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../slice/productSlice";
import { addToCart } from "../slice/cartSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const cartItem = useSelector((state) => state.cart.items);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <nav>
        <Link style={{ padding: "20px" }} to="/home">
          Home
        </Link>
        <Link style={{ padding: "20px" }} to="/cart">
          Cart({cartItem.length})
        </Link>
        <Link style={{ padding: "20px" }} to="/checkout">
          Checkout
        </Link>
      </nav>
      <h2>Products</h2>
      {status == "loading" && <p>Loading..</p>}
      {status == "success" && (
        <div>
          {currentProducts?.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button onClick={() => dispatch(addToCart(product))}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}

      <div>
        {Array.from({ length: Math.ceil(items.length / productsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
