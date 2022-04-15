import axios from 'axios';

export const weaviateMagic = (keyword, setnugget, setIsSearching) => {
    setIsSearching(true);

    axios
        .get("http://localhost:3005/weaviate",{ 
            params: { 
                keyword: keyword 
            } 
        })
        .then(res => {
            setnugget(res);
            setIsSearching(false);
        })
        .catch((err) => {
            console.log(err);
        });
   };