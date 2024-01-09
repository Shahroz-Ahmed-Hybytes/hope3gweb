import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import DataListInput from 'react-datalist-input';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { DonateButton, ShoppingBasket, VideoButton } from '../Components/ComponentIndex';
import { CartState } from '../Context/Context';
import '../Styles/Shop.css';

const tableTitles = ["Image", "Name", "Description", "Price", "Quantity"]

const values = [
  {
    name: '10',
    id: 1
  },
  {
    name: '50',
    id: 2
  },
  {
    name: '100',
    id: 3
  },
  {
    name: '500',
    id: 4
  },
]

export default function Shop(props) {

  // STRIPE 
  const [products, setProducts] = useState([])
  const [stripePrices, setStripePrices] = useState([])
  const [productsLoading, setProductsLoading] = useState(false)
  const [fetchError, setfetchError] = useState();
  // DROP DOWN QUANTITY
  const [quantity, setquantity] = useState([])
  const setQuantity = (e) => {
    const id = e.target.id
    const value = e.target.value

    let tempArray = [...quantity]
    if (!quantity.length) {
      tempArray.push({ id: id, value: value })
    } else {
      const quantity = tempArray.find(q => q.id === id)
      if (quantity)
        quantity.value = value
      else
        tempArray.push({ id: id, value: value })
    }
    setquantity(tempArray)
  };
  const findQuantity = (product) => {
    const value = quantity.length && quantity.find(q => q.id === product.id)
    if (value)
      return value.value
  };
  // ADD ITEM TO BASKET
  const { addItem, items, updateItemQuantity } = useCart();

  const addItemToList = (item) => {
    const dataToAdd = {
      id: item.id,
      name: item.name,
      description: item.description,
      priceId: item['default_price'],
      price: (getPrice(item) / 100).toFixed(2),
      image: item.images[0],
    }
    if (!items.length)
      addItem(dataToAdd, +findQuantity(item))
    else {
      const itemExist = items.find(cart => cart.id === item.id);
      if (itemExist)
        updateItemQuantity(item.id, +findQuantity(item))
      else {
        addItem(dataToAdd, +findQuantity(item))
      }
    }
  };
  // GET DATA
  useEffect(() => {
    setProductsLoading(true)
    async function fetchData() {
      try {
        const fetchProducts = await fetch('http://localhost:5000/products', {
          method: 'GET',
        });
        const productList = await fetchProducts.json();
        setProducts(productList);
        setProductsLoading(false)
      } catch (error) {
        console.log(error);
        setfetchError(error);
        setProductsLoading(false)
      }
    }
    fetchData();

    async function fetchPricesData() {
      try {
        const fetchPrices = await fetch('http://localhost:5000/prices', {
          method: 'GET',
        });
        const priceList = await fetchPrices.json();
        setStripePrices(priceList);
        setProductsLoading(false)
      } catch (error) {
        setProductsLoading(false)
        console.log(error);
        setfetchError(error);
      }
    }
    fetchPricesData();
  }, []);

  // GET PRICE
  const getPrice = (lesson) => {
    const price = stripePrices.length && stripePrices.find(price => price.id === lesson['default_price'])
    if (price) {
      return price['unit_amount']
    }
  }



  // const cartTotalLessons = () => {
  //   let totalLessons = 0;
  //   cart.map((x) => {
  //     totalLessons = totalLessons + parseInt(x.quantity);
  //     return totalLessons;
  //   });
  //   return totalLessons.toLocaleString();
  // };

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <h4 className="header">Popular Courses (Choose one)</h4>
            </Col>
            <Col md={6}>
              <Button as={Link} to="/donate" className="basket-button">
                <FontAwesomeIcon icon={faCartShopping} size="lg" />
                <span> </span>
                <Badge pill className="cart-badge">
                  {items.length}
                </Badge>
              </Button>
            </Col>
          </Row>
          <Row lg={6}>
            {tableTitles.map(title =>
              <Col key={title}><b>{title}</b></Col>
            )}
          </Row>
          {productsLoading ? <h3>...Loading</h3>
            :
            products.map(product =>
              <Row key={product.id} lg={6} className="my-5">
                <Col>
                  <img className='w-50' src={`${product.images}`} alt={product.name} />
                </Col>
                <Col>
                  <b>{product.name}</b>
                </Col>
                <Col>
                  {product.description}
                </Col>
                <Col>
                  £{(getPrice(product) / 100).toFixed(2)} /unit
                </Col>
                <Col>
                  <select
                    id={product.id}
                    // value={findQuantity(product).value}
                    onChange={setQuantity}
                  >
                    <option hidden disabled selected>Please Select</option>
                    {values.map(item =>
                      <option key={item.id} value={item.name}>{item.name}</option>
                    )}
                  </select>
                </Col>
                <Button onClick={() => addItemToList(product)}>Add</Button>
              </Row>
            )}
        </Col>
      </Row>
    </Container>
  );
}
