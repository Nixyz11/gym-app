
//url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
export const exerciseOptions = {
    method: 'GET',
   
    headers: {
      'X-RapidAPI-Key': '06e0866c58msh6e5a00cfac7433ap1a27d5jsn0a3b58c0eabe',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
 export const youTOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '06e0866c58msh6e5a00cfac7433ap1a27d5jsn0a3b58c0eabe',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = response.json();

    return data;
}