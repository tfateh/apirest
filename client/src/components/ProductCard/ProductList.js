import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../../../controllers/product.controller'
import ProductCard from './ProductCard'

const ProductList = () => {

    const dispatch = useDispatch() 

    useEffect(() => {
    dispatch(getAllProducts())
    }, [])
    
    const products = useSelector(state=>state.productsReducer.products)
    const loading = useSelector(state=>state.productsReducer.loadiing)

  return (
    <div>ProductList

{loading && products.map(product => <ProductCard product={product}/>)}

    </div>
  )
}

export default ProductList