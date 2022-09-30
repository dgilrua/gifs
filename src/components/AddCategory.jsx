import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ setCategories, categories }) => {

    const [valor, setValor] = useState('')
    const [existe, setExiste] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        if(valor.length < 1) return

        if (categories.includes(valor)) {
            setExiste(true)
            setValor('')
            return
        }

        setCategories([valor, ...categories])
        setValor('')
        setExiste(false)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Buscar Gifs' value={valor} onChange={e => setValor(e.target.value)} />
        {existe && 'Ya existe el nombre'}
    </form>
  )
}
