import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative" color= "secondary">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "wblack"}}><Logo>La Casa del OM</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/Productos' style={{textDecoration: "none", color: "wblack"}}><MenuItem>Productos</MenuItem></Link>
                    <Link to='/category/Servicios' style={{textDecoration: "none", color: "wblack"}}><MenuItem>Servicios</MenuItem></Link>
                    <Link to='/category/Novedades' style={{textDecoration: "none", color: "wblack"}}><MenuItem>Novedades</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>LogIn</MenuItem>
                    <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "wblack"}}><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;