import { useEffect, useState } from "react";

const useData = () => {
    const [universities, setUniversities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('fakeDB.json')
            .then(res => res.json())
            .then(data => {
                setUniversities(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, []);

    return {
        universities,
        isLoading
    }
}
export default useData;