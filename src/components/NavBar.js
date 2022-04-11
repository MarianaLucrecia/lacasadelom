import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar color="secondary" position="static">
            <Wrapper>
                <Left>
                    <Logo>LA CASA DEL OM</Logo>
                </Left>
                <Center>
                    <Link to='/categoryId/Productos' style={{textDecoration: "none", color: "white"}}><MenuItem>PRODUCTOS</MenuItem></Link>
                    <Link to='/categoryId/Servicios' style={{textDecoration: "none", color: "white"}}><MenuItem>SERVICIOS</MenuItem></Link>
                    <Link to='/categoryId/Novedades' style={{textDecoration: "none", color: "white"}}><MenuItem>NOVEDADES</MenuItem></Link>                   
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;