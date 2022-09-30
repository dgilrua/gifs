import { useFetchGifs } from "../hooks/useFetchGifs"
import { GiftItem } from "./GiftItem"

export const GifGrid = ({categorias}) => {

    const {images, isLoading} = useFetchGifs(categorias)

  return (
    <>

        <h1 className="centrar">{categorias}</h1>
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
        {
            images.map(({id, title, url}) => (
                <GiftItem key={id} title={title} url={url} />
            ))
        }
        </div>
    </>
  )
}
