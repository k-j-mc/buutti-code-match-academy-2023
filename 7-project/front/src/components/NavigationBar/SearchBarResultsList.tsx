import { useEffect, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

import {
	CardMedia,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from "@mui/material";

import ListSkeleton from "../Loaders/ListSkeleton";

import Icons from "../Icons";

type TSearch = {
	searchQuery: string;
};

const SearchBarResultsList = ({ searchQuery }: TSearch) => {
	const navigate = useNavigate();

	const { searchResults, loadingSearchResults } = useAppSelector(
		(state) => state.movies
	);

	const handleNavigation = (movieId: string) => {};

	console.log(loadingSearchResults);

	return (
		<List
			style={{
				maxWidth: "100vw",
				width: "100%",
				position: "absolute",
				zIndex: 9999,
				backgroundColor: "#121212",
				left: 0,
				marginTop: "10px",
			}}
		>
			{searchResults.map((obj, index) => (
				<Fragment key={obj.id}>
					<ListItem>
						<>
							<CardMedia
								component="img"
								loading="lazy"
								src={`http://localhost:5000/images/posters${obj.poster}`}
								alt={obj.title}
								style={{ height: "75px", width: "50px" }}
							/>
							<ListItemText
								style={{ marginLeft: "12px" }}
								primary={obj.title}
								secondary={obj.tagline}
							/>
							<IconButton
								onClick={() => handleNavigation(obj.id)}
							>
								<Icons.ArrowForward size="12px" />
							</IconButton>
						</>
					</ListItem>
					{index < searchResults.length - 1 && <Divider />}
				</Fragment>
			))}
			{loadingSearchResults && searchQuery.length > 0 ? (
				<ListSkeleton loading={loadingSearchResults} />
			) : (
				!loadingSearchResults &&
				searchQuery.length > 0 &&
				searchResults.length <= 0 && (
					<>
						<Divider />
						<ListItem style={{ height: "75px" }}>
							<ListItemText
								style={{
									marginLeft: "12px",
									fontStyle: "italic",
								}}
								primary={`No results for ${searchQuery}...`}
							/>
						</ListItem>
						<Divider />
					</>
				)
			)}
		</List>
	);
};

export default SearchBarResultsList;
