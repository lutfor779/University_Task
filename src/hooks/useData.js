import { useEffect, useState } from "react";

const useData = () => {
    const [universities, setUniversities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('fakeDB.json')
            .then(res => res.json())
            .then(data => {
                setUniversities(data);
                setIsLoading(false);
                setTotal(Math.ceil(data.length / 10));
            })
            .catch(err => console.log(err))
    }, []);

    return {
        universities,
        isLoading,
        total
    }
}
export default useData;
// http://universities.hipolabs.com/search?country=India