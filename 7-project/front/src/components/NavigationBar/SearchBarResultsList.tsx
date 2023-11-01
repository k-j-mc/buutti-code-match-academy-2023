import { useEffect, useState, Fragment } from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

import {
	Box,
	Button,
	ButtonGroup,
	CardMedia,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Typography,
} from "@mui/material";

import ListSkeleton from "../Loaders/ListSkeleton";

import Icons from "../Icons";

type TSearch = {
	searchQuery: string;
	handleNavigationClick: Function;
};

const SearchBarResultsList = ({
	searchQuery,
	handleNavigationClick,
}: TSearch) => {
	const { searchResults, loadingSearchResults } = useAppSelector(
		(state) => state.movies
	);

	const [topLimit, setTopLimit] = useState<number>(0);

	useEffect(() => {
		if (searchResults.length < 5) {
			setTopLimit(searchResults.length);
		} else {
			setTopLimit(5);
		}
	}, [searchResults]);

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

			<>
				{searchResults.slice(0, topLimit).map((obj, index) => (
					<Fragment key={obj.id}>
						<ListItem onClick={() => handleNavigationClick(obj.id)}>
							<>
								<CardMedia
									component="img"
									loading="lazy"
									src={`http://localhost:5000/images/posters${obj.poster}`}
									alt={obj.title}
									style={{
										height: "75px",
										width: "50px",
									}}
								/>
								<ListItemText
									style={{ marginLeft: "12px" }}
									primary={obj.title}
									secondary={obj.tagline}
								/>
								<IconButton>
									<Icons.ArrowForward size="12px" />
								</IconButton>
							</>
						</ListItem>

						{index < topLimit - 1 && <Divider />}
					</Fragment>
				))}
			</>
			{searchResults.length > 0 && (
				<Box textAlign="center">
					<Typography
						variant="body2"
						display="block"
						style={{ paddingBottom: "10px" }}
					>
						Showing {topLimit} of {searchResults.length} results
					</Typography>
					<ButtonGroup variant="text" aria-label="text button group">
						<Button
							disabled={topLimit <= 5 ? true : false}
							onClick={() => setTopLimit(topLimit - 5)}
						>
							Show less
						</Button>

						<Button
							disabled={
								searchResults.length <= topLimit ? true : false
							}
							onClick={() => {
								searchResults.length % topLimit &&
								topLimit + 5 <= searchResults.length
									? setTopLimit(topLimit + 5)
									: setTopLimit(searchResults.length);
							}}
						>
							Show more
						</Button>
					</ButtonGroup>
				</Box>
			)}
		</List>
	);
};

export default SearchBarResultsList;
