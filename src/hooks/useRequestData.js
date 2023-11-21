import axios from "axios";
import { useEffect, useState } from "react"

export const useRequestData = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        axios
          .get(url) 
          .then((response) => {
            setIsLoading(false)
            setData(response.data);
          })
          .catch((error) => {
            setIsLoading(false)
            setError(true)
            console.log(error);
          });
      }, [url]);
    
      return [data, error, isLoading]

}