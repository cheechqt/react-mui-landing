import { IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { DrawerWidth } from "styles/theme";

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,
}));
