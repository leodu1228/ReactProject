import { useState } from 'react';



export const  useSearchMessage = () => {
    const [searchName, setSearchName] = useState('');

    return {
        searchName, setSearchName
    }
}

