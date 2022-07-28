import "./Search.css";
import { MdSearch } from "react-icons/md";

export default function Search({handleSearchNote}) {
    const handleChange = (e) => {
        handleSearchNote(e.target.value)
    };

    return (
        <div className="search">
            <MdSearch size="1.5rem"/>
            <input 
                type="text" 
                placeholder="search ..." 
                onChange={handleChange}
            />
        </div>
    )
}