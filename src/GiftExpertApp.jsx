import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([])
  return (
    <>
        <h1 className='centrar'>GiftExpertApp</h1>

        <AddCategory setCategories={setCategories} categories={categories} />

        {categories.map(categorias => (
            <GifGrid key={categorias} categorias={categorias} />
        ))}

    </>
  )
}
