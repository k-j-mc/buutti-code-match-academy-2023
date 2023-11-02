import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import Icons from "../../Icons";

const NoUser = () => {
	return (
		<div style={{ marginBottom: "20px" }}>
			<h4>You must be signed in to leave a comment:</h4>
			<Link className="rrLink" to="../sign-in">
				<Button
					variant="outlined"
					sx={{
						whiteSpace: "nowrap",
						padding: "10px",
					}}
					startIcon={<Icons.User />}
				>
					Sign in
				</Button>
			</Link>
		</div>
	);
};

export default NoUser;
