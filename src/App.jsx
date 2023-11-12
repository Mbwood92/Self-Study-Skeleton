import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import products from './data'

function App() {
 
  // add state in here
  const [productList, setProductList] = useState(products)
const [form, setForm] = useState({
    itemName: "",
    price: 0,
    description: "Describe this item",
})
const [isHiring, setIsHiring] = useState(true);
const toggleHiring = () => {
  setIsHiring(!isHiring);
};
  // handleChange function
  const handleChange = (event) => {
    setForm({[event.target.name]: event.target.value,
    });
  };
  
// handleSubmit
const handleSubmit = event => {
  // prevent page refresh
  event.preventDefault();
 // do what you want with the form data
 console.log('form in submit')
console.log(form);
  
  const newProduct =  form;
  setProductList([newProduct, ...productList])
}

  // return
  return (
    <div>
     <h1 onClick={toggleHiring}> Big Time Shopping </h1> {isHiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}

      <form>
        <input
          type="text"
          value={form.itemName}
          onChange={handleChange}
          onSubmit={handleSubmit}
          name="itemName"
          placeholder="write name here"
        />
        <input
          type="number"
          value={form.price}
          onChange={handleChange}
          name="price"
          placeholder="write price here"
        />
        <input
          type="description"
          value={form.description}
          onChange={handleChange}
          name="description"
          placeholder="describe the product"
        />
      </form>
      <div>
        
        <h2>Preview our new item</h2> <h3>{form.itemName}</h3>
        <h4>{form.price}</h4>
        <h5>{form.description}</h5>{" "}
      </div>
      <ul>
      
        {productList.map((item) => (
          <li>
            {item.itemName}
            {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;