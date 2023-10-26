import React, { forwardRef } from "react";

import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DoneIcon from "@mui/icons-material/Done";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LightModeIcon from "@mui/icons-material/LightMode";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Search from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from "@mui/icons-material/Star";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface IconProps {
	title?: string;
	titleId?: string;
}

const Icons = {
	Add: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<AddIcon {...props} ref={ref} />
	)),
	ArrowBack: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<ArrowBackIosIcon {...props} ref={ref} style={{ color: "#FFFFFF" }} />
	)),
	ArrowForward: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<ArrowForwardIosIcon
			{...props}
			ref={ref}
			style={{ color: "#FFFFFF" }}
		/>
	)),
	Close: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<CloseIcon {...props} ref={ref} />
	)),
	DarkMode: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<DarkModeIcon {...props} ref={ref} />
	)),
	Dislike: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<ThumbDownOffAltIcon {...props} ref={ref} />
	)),
	Down: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<KeyboardArrowDownIcon {...props} ref={ref} />
	)),
	Download: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<DownloadIcon {...props} ref={ref} />
	)),
	Edit: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<EditIcon {...props} ref={ref} />
	)),
	ExpandMore: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<ExpandMoreIcon {...props} ref={ref} />
	)),
	False: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<CloseIcon {...props} ref={ref} style={{ color: "#ef5350" }} />
	)),

	Favorite: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<FavoriteIcon {...props} ref={ref} />
	)),
	LightMode: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<LightModeIcon {...props} ref={ref} />
	)),
	Like: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<ThumbUpOffAltIcon {...props} ref={ref} />
	)),
	Menu: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<MenuIcon {...props} ref={ref} />
	)),
	MoreVert: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<MoreVertIcon {...props} ref={ref} />
	)),
	PlayLarge: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<PlayCircleIcon
			{...props}
			ref={ref}
			style={{ color: "#FFFFFF", fontSize: "44px" }}
		/>
	)),
	Search: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<Search {...props} ref={ref} style={{ color: "#FFFFFF" }} />
	)),
	Share: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<ShareIcon {...props} ref={ref} style={{ color: "#FFFFFF" }} />
	)),
	True: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<DoneIcon {...props} ref={ref} style={{ color: "#4caf50" }} />
	)),
	Seen: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<VisibilityIcon {...props} ref={ref} />
	)),
	Star: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<StarIcon {...props} ref={ref} />
	)),
	Up: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<KeyboardArrowUpIcon {...props} ref={ref} />
	)),
	User: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<PersonOutlineIcon {...props} ref={ref} />
	)),
	Visibility: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<VisibilityIcon {...props} ref={ref} />
	)),
	VisibilityOff: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<VisibilityOffIcon {...props} ref={ref} />
	)),
};

export default Icons;
