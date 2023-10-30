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

const SearchBar = () => {
	const dispatch = useAppDispatch();

	const handleSearch = (event: string) => {
		if (event && event.length > 0) {
			dispatch(getMovieByName(event));
		}
	};

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
					placeholder="Search…"
					inputProps={{ "aria-label": "search" }}
					onChange={({ target }) => handleSearch(target.value)}
				/>
				<div
					style={{
						position: "relative",
						width: "100%",
					}}
				>
					<SearchBarResultsList />
				</div>
			</Search>
		</>
	);
};

export default SearchBar;
