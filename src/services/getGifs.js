import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse

    if(Array.isArray(data)){
        const gifs = data.map(image => {
            const { url } = image.images.downsized_medium
            const { title, id } = image
            return { url, title, id }
        })
        return gifs
    }
}


export default function getGifs({limit = 25, keyword = 'Morty'} = {}){  
const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=G&langt=en`

    return fetch(apiURL)
            .then(res => res.json())
            .then(fromApiResponseToGifs)
            
}