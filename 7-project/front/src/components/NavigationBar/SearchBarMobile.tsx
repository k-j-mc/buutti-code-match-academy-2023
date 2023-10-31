import { forwardRef } from "react";

import { IconButton, InputAdornment, TextField } from "@mui/material";

import SearchBarResultsList from "./SearchBarResultsList";

import Icons from "../Icons";

type TSearch = {
	searchRef?: any;
	listRef?: any;
	handleSearch: Function;
	searchQuery: string;
	setSearchQuery: Function;
	active: boolean;
	setActive: Function;
};

const SearchBarMobile = forwardRef<HTMLDivElement, TSearch>((props, ref) => {
	const {
		searchRef,
		listRef,
		active,
		setActive,
		searchQuery,
		setSearchQuery,
		handleSearch,
	} = props;

	const handleCancelSearch = () => {
		setActive(false);
		setSearchQuery("");
	};

	return (
		<div>
			{!active ? (
				<IconButton
					onClick={() => setActive(true)}
					style={{ float: "right" }}
				>
					<Icons.Search />
				</IconButton>
			) : (
				<div ref={listRef}>
					<TextField
						id="standard-basic"
						variant="standard"
						ref={searchRef}
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
						onChange={({ target }) => handleSearch(target.value)}
					/>
					<div style={{ marginBottom: "20px" }}>
						<SearchBarResultsList searchQuery={searchQuery} />
					</div>
				</div>
			)}
		</div>
	);
});

export default SearchBarMobile;
