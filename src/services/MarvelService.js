import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
    const { loading, error, request, clearError } = useHttp();

    const apiBase = "https://gateway.marvel.com:443/v1/public/";
    const apiKey = "apikey=d34150ddc81d8139c567a2f38fdea78e";
    const baseOffset = 210;

    const getAllCharacters = async(offset = baseOffset) => {
        const res = await request(`${apiBase}characters?limit=9&offset=${offset}&${apiKey}`);
        return res.data.results.map(transformCharacter);
    }

    const getAllComics = async(offset = baseOffset) => {
        const res = await request(`${apiBase}comics?limit=8&offset=${offset}&${apiKey}`);
        return res.data.results.map(transformComics);
    }

    const getCharacter = async(id) => {
        const res =  await request(`${apiBase}characters/${id}?${apiKey}`);
        return transformCharacter(res.data.results[0]);
    }

    const getComic = async(id) => {
        const res =  await request(`${apiBase}comics/${id}?${apiKey}`);
        return transformComics(res.data.results[0]);
    }

    const transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : "The description was erased by Thanos' snap...",
            thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
    }

    const transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'There is no description',
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'N/A',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            language: comics.textObjects.language || 'en-us',
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available'
        }
    }

    return { loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic };
}

export default useMarvelService;