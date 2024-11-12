import { InputFieldSyled, SearchButton} from "./styles"
import { useContext, useState } from "react"
import { SearchContext } from "../../contexts/SearchContext"
import { FaSearch } from "react-icons/fa";

const InputField = () => {
  const context = useContext(SearchContext);

  if (!context) throw new Error('Context problem');
  const { setSearch } = context;
  const [inputSearch, setInputSearch] = useState<string>("");
  const [errorInputSearch, setErrorInputSearch] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = () => {
    setErrorInputSearch(false);
    if(inputSearch === "") return setErrorInputSearch(true);
    setSearch(inputSearch);
    setInputSearch("");
  };
  
  return <InputFieldSyled error={errorInputSearch}>
    <input 
      placeholder={errorInputSearch ? "Please enter a search term..." : "Search Shows..."}
      type="text" 
      onChange={handleChange} 
      value={inputSearch}
    />
    <SearchButton onClick={handleSubmit}>
      <FaSearch size={20} color="white"/>
    </SearchButton>
  </InputFieldSyled>
}

export default InputField