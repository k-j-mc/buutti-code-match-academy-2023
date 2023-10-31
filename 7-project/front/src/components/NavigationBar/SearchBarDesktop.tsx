import {
	useEffect,
	useRef,
	useState,
	ChangeEvent,
	KeyboardEvent,
	forwardRef,
	ReactNode,
} from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";

import { getMovieByName } from "../../reducers/movieReducer";

import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";

import SearchBarResultsList from "./SearchBarResultsList";

import Icons from "../Icons";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.05),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.15),
	},
	marginLeft: 20,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(4),
		width: "100%",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
	},
}));

type TSearch = {
	searchRef?: any;
	listRef?: any;
	handleSearch: Function;
	searchQuery: string;
	active: boolean;
};

const SearchBar = forwardRef<HTMLDivElement, TSearch>((props, ref) => {
	const dispatch = useAppDispatch();

	const { searchRef, listRef, active, searchQuery, handleSearch } = props;

	return (
		<>
			<Search
				style={{
					position: "relative",
				}}
			>
				<SearchIconWrapper>
					<Icons.Search />
				</SearchIconWrapper>
				<StyledInputBase
					ref={searchRef}
					placeholder="Search…"
					inputProps={{ "aria-label": "search" }}
					onChange={({ target }) => handleSearch(target.value)}
					value={searchQuery}
				/>
				<div
					style={{
						position: "relative",
						width: "100%",
					}}
					ref={listRef}
				>
					{active && (
						<SearchBarResultsList searchQuery={searchQuery} />
					)}
				</div>
			</Search>
		</>
	);
});

export default SearchBar;
