import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setError(false)
        setLoading(true)
        const response = await axios.get('/api/products')
        setProducts(response.data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (error) {
    return <h1>Something went wrong</h1>
  }
  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>EXPLORE_2</h1>
      <h2>Number of products: {products.length} </h2>
    </>
  )
}

export default App
