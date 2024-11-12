import { InputFieldSyled, SearchButton } from "./styles"
import { useContext, useState } from "react"
import { SearchContext } from "../../contexts/SearchContext"
import { FaSearch } from "react-icons/fa";

const InputField = () => {
  const context = useContext(SearchContext);

  if (!context) throw new Error('Context problem');
  const [inputSearch, setInputSearch] = useState<string>("");
  const { setSearch } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = () => {
    setSearch(inputSearch);
  };
  
  return <InputFieldSyled>
    <input 
      placeholder="Search Shows..."
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