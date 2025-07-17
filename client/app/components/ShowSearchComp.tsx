import { BiSearch } from "react-icons/bi";
import { MdSearchOff } from "react-icons/md";

const ShowSearchComp = ({ showSearch, toggleSearch }: { showSearch: boolean, toggleSearch: () => void }) => {
    return (

        showSearch ? (
            <MdSearchOff className="text-xl cursor-pointer" onClick={toggleSearch} />
        ) : (
            <BiSearch className="text-xl cursor-pointer" onClick={toggleSearch} />
        )

    )
}

export default ShowSearchComp