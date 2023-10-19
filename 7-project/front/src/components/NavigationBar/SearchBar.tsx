import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";

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
	return (
		<Search>
			<SearchIconWrapper>
				<Icons.Search />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder="Search…"
				inputProps={{ "aria-label": "search" }}
			/>
		</Search>
	);
};

export default SearchBar;