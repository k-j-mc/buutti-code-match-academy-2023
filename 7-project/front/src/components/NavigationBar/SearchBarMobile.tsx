import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";

import { getMovieByName } from "../../reducers/movieReducer";

import { IconButton, InputAdornment, TextField } from "@mui/material";

import SearchBarResultsList from "./SearchBarResultsList";

import Icons from "../Icons";

const SearchBarMobile = () => {
	const [active, setActive] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	const handleSearch = (event: string) => {
		if (event && event.length > 0) {
			dispatch(getMovieByName(event));
		}
	};

	return (
		<div>
			{!active ? (
				<IconButton
					onClick={() => setActive(!active)}
					style={{ float: "right" }}
				>
					<Icons.Search />
				</IconButton>
			) : (
				<>
					<TextField
						id="standard-basic"
						variant="standard"
						sx={{
							border: 0,
							width: "100vw",
							top: 0,
							left: 0,
							backgroundColor: "#121212",
							position: "fixed",
							minHeight: "60px",
							zIndex: 9999999,
							padding: "15px 10px 10px 30px",
						}}
						InputProps={{
							endAdornment: (
								<InputAdornment
									position="start"
									onClick={() => setActive(!active)}
								>
									<Icons.Close />
								</InputAdornment>
							),
							disableUnderline: true,
						}}
						onChange={({ target }) => handleSearch(target.value)}
					/>
					<SearchBarResultsList />
				</>
			)}
		</div>
	);
};

export default SearchBarMobile;
