import { ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Actions() {
  return (
    <MyList type="row">
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
      </ListItemButton>
    </MyList>
  );
}
