import { useEffect, useState } from "react"
import axios from "axios";
import ProductCard from "./components/productCard";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    readProducts()
  },[] )
  const readProducts = async()=> {
    const url = "http://localhost:8080/api/products" 
    const response = await axios.get(url)
    console.log(response);
    console.log(response.data.response);
    setProducts(response.data.response);
  }
  const login = async (e) => {
    try {
      e.preventDefault();
      console.log({email, password});
      const url = "http://localhost:8080/api/sessions/login"
      const body = { email, password }
      const headers = { withCredentials: true } 
      await axios.post(url, body, headers)
      alert("login successful")
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      alert(error.response.data.message.toUpperCase());
    }
  };

  return (
    <section className='w-full h-screen flex flex-col justify-center items-center bg-green-100'>
      <article className="flex flex-wrap w-full flex justify-center" >
        {products.map(each=> <ProductCard key={each._id} product={each} />)}
      </article>
      <form className='flex flex-col bg-green-400 w-[400px]'>
        <fieldset className='p-2 flex'>
        <label className='pr-2' htmlFor="email">Email</label>
        <input onChange={e=>setEmail(e.target.value)} className='flex-grow' type="text" name="email" id="email" />
        </fieldset>
        <fieldset className='p-2 flex'>
        <label className='pr-2' htmlFor="password">Password</label>
        <input onChange={e=>setPassword(e.target.value)} className='flex-grow' type="password" name="password" id="password" />
        </fieldset>
        <button onClick={login} className='bg-white hover:bg-gray-200 p-2 border-2 border-green-400'>Iniciar sesion</button>
      </form>
    </section>
  )
}

export default App
