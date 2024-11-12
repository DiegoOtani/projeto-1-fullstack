import { InputFieldProps } from "./types"
import { InputFieldSyled, SearchButton } from "./styles"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useContext, useEffect } from "react"
import { SearchContext } from "../../contexts/SearchContext"

const InputField = ({ onSubmit }: InputFieldProps) => {
  const context = useContext(SearchContext);

  if (!context) throw new Error('Context problem');

  const { search, setSearch } = context;

  useEffect(() => {
    console.log(search)
  }, [search])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  
  return <InputFieldSyled>
    <input 
      placeholder="Search Shows..."
      type="text" 
      onChange={handleChange} 
      value={search}
    />
    <SearchButton onClick={onSubmit}>
      <MagnifyingGlass size={20}/>
    </SearchButton>
  </InputFieldSyled>
}

export default InputField