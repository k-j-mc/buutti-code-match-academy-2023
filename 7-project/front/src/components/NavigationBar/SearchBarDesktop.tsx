import { styled, alpha } from "@mui/material/styles";
import { ClickAwayListener, InputBase } from "@mui/material";

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
	handleSearch: Function;
	searchQuery: string;
	active: boolean;
	setActive: Function;
	handleClose: Function;
	handleNavigationClick: Function;
};

const SearchBar = ({
	active,
	setActive,
	searchQuery,
	handleSearch,
	handleClose,
	handleNavigationClick,
}: TSearch) => {
	const handleClickAway = () => {
		setActive(false);
	};

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
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
					onClick={() => searchQuery.length > 0 && setActive(true)}
					value={searchQuery}
					onKeyUp={(event) => {
						if (event.key === "Escape") {
							handleClose();
						}
					}}
				/>

				<>
					{active && (
						<SearchBarResultsList
							searchQuery={searchQuery}
							handleNavigationClick={handleNavigationClick}
						/>
					)}
				</>
			</Search>
		</ClickAwayListener>
	);
};

export default SearchBar;
