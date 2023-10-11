import "./Forms.css";

interface ISearch {
	searchQuery: string;
	setSearchQuery: (searchQuery: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: ISearch) => {
	return (
		<div className="searchBarContainer">
			<input
				className="searchBar"
				placeholder="Search..."
				value={searchQuery}
				onChange={({ target }) => setSearchQuery(target.value)}
			/>
		</div>
	);
};

export default SearchBar;
