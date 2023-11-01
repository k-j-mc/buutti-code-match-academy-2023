import {
	ClickAwayListener,
	IconButton,
	InputAdornment,
	TextField,
} from "@mui/material";

import SearchBarResultsList from "./SearchBarResultsList";

import Icons from "../Icons";

type TSearch = {
	handleSearch: Function;
	searchQuery: string;
	setSearchQuery: Function;
	activeMobile: boolean;
	setActiveMobile: Function;
	handleNavigationClick: Function;
};

const SearchBarMobile = ({
	activeMobile,
	setActiveMobile,
	searchQuery,
	setSearchQuery,
	handleSearch,
	handleNavigationClick,
}: TSearch) => {
	const handleCancelSearch = () => {
		setActiveMobile(false);
		setSearchQuery("");
	};
	const handleClickAway = () => {
		setActiveMobile(false);
	};

	return (
		<>
			{!activeMobile ? (
				<IconButton
					onClick={() => setActiveMobile(true)}
					style={{ float: "right" }}
				>
					<Icons.Search />
				</IconButton>
			) : (
				<ClickAwayListener onClickAway={handleClickAway}>
					<div>
						<TextField
							id="standard-basic"
							variant="standard"
							value={searchQuery}
							placeholder="Search..."
							sx={{
								border: 0,
								width: "100vw",
								top: 0,
								left: 0,
								backgroundColor: "#0E0E0E",
								position: "absolute",
								minHeight: "60px",
								zIndex: 9999999,
								padding: "15px 10px 10px 30px",
							}}
							onKeyUp={(event) => {
								if (event.key === "Escape") {
									handleCancelSearch();
								}
							}}
							InputProps={{
								endAdornment: (
									<InputAdornment
										position="start"
										onClick={handleCancelSearch}
									>
										<Icons.Close />
									</InputAdornment>
								),
								disableUnderline: true,
							}}
							onChange={({ target }) =>
								handleSearch(target.value)
							}
						/>
						<SearchBarResultsList
							searchQuery={searchQuery}
							handleNavigationClick={handleNavigationClick}
						/>
					</div>
				</ClickAwayListener>
			)}
		</>
	);
};

export default SearchBarMobile;
