import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "styles/theme";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  background: Colors.secondary,
  padding: "20px 0px 20px 0px",
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: `"Montez", "cursive"`,
  color: Colors.white,
  fontSize: "3rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
}));
