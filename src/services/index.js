const apikey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa'

export default function getGifs({keyword = 'Morty'} = {}){  
const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=0&`

    return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                const {data} = response
                const gifs = data.map(image => {
                    const { url } = image.images.downsized_medium
                    const { title, id } = image
                    return { url, title, id }
                })
                return gifs
            })
            
}