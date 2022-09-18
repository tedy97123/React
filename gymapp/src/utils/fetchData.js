export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5ce3259baamsh927e932246a4b9bp13b280jsne1e7b7bc0238',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    }
  }
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    return data;
  };