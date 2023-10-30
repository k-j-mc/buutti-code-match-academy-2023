import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

import {
	CardMedia,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from "@mui/material";

const SearchBarResultsList = () => {
	const navigate = useNavigate();

	const { searchResults, loadingSearchResults } = useAppSelector(
		(state) => state.movies
	);

	const handleNavigation = (movieId: string) => {};

	return (
		<>
			<List
				style={{
					maxWidth: "100%",
					position: "absolute",
					zIndex: 9999,
					backgroundColor: "#121212",
				}}
			>
				{searchResults.map((obj) => (
					<>
						<ListItem key={obj.id}>
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
						</ListItem>
						<Divider />
					</>
				))}
			</List>
		</>
	);
};

export default SearchBarResultsList;
