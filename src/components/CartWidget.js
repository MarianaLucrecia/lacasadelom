import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const CartWidget = () => {
    return (
        <Badge badgeContent={9} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;