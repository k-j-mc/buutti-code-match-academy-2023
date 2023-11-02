import { forwardRef } from "react";

import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Search from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface IconProps {
	title?: string;
	titleId?: string;
	size?: string;
	iconColor?: string;
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
			style={{ color: "#FFFFFF", fontSize: props.size }}
		/>
	)),
	Close: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<CloseIcon {...props} ref={ref} />
	)),
	Delete: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<DeleteIcon {...props} ref={ref} />
	)),
	Dislike: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<ThumbDownOffAltIcon {...props} ref={ref} />
	)),
	Edit: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<EditIcon {...props} ref={ref} />
	)),
	Info: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<InfoIcon {...props} ref={ref} />
	)),
	Like: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<ThumbUpOffAltIcon {...props} ref={ref} />
	)),
	List: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<ListIcon {...props} ref={ref} />
	)),
	Menu: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<MenuIcon {...props} ref={ref} />
	)),
	Play: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<PlayCircleIcon
			{...props}
			ref={ref}
			style={{ color: "#FFFFFF", fontSize: props.size }}
		/>
	)),
	Search: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<Search {...props} ref={ref} style={{ color: "#FFFFFF" }} />
	)),
	Share: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<ShareIcon {...props} ref={ref} style={{ color: "#FFFFFF" }} />
	)),
	SignOut: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<LogoutIcon {...props} ref={ref} />
	)),
	TrueFill: forwardRef<SVGSVGElement, IconProps>((props, ref) => (
		<CheckCircleIcon {...props} ref={ref} style={{ color: "#00d4ff" }} />
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
