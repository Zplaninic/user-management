import React, {useState, useEffect} from 'react';
import useDebounce from '../hooks/useDebounce'
import axios from 'axios'

// export interface Props {
//     id: number;
//     onClose(): void;
// }

async function searchUsers(search:string) {
    try {
        const result = await axios.get(`http://localhost:5000/api/users/search/?email=${search}`);

        const resultJson = await result.data.result
        return resultJson;
    }
    catch (error) {
        console.error(error);
        return [];
    }
  }

const Search: React.FC = () => {

    const [searchInput, setSearchInput] = useState<string>('')
    const [result, setResult] = useState<any>([])
    const [isSearching, setIsSearching] = useState(false);

    const debouncedInput = useDebounce(searchInput, 500)

    console.log(result)

    useEffect(
        () => {
          if (debouncedInput) {
            setIsSearching(true);
            searchUsers(debouncedInput).then(results => {
                console.log(results)
              setIsSearching(false);
              setResult(results);
            }); 
          } else {
            setResult([]);
          }
        },
        [debouncedInput]
      );


    return (
        <div>
            <h4>
                Search
            </h4>
            <form>
                <label>Search by email</label>
                <input
                type="text"
                name="email"
                placeholder="write Email"
                onChange={e => setSearchInput(e.target.value)}
 
          />
            </form>
        </div>
    )
}

export default Search