export const getGifts  = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=az1YNtYV42wW36fFQrMmgkvHL07VVNeM&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json();

    const gifts = data.map(img =>({
        id:img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifts;
};