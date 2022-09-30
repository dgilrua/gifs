export const getGifs = async (categorias) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GiJNqu6L50x612ldDDJ0Tzsizj7n2SGu&q=${categorias}&limit=9`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}