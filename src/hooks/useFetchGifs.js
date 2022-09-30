import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (categorias) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const getImages = async () => {
        const newImages = await getGifs(categorias)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])


  return {
    images,
    isLoading
  }
}
