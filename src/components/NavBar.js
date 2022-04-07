import { AppBar } from "@material-ui/core";
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
                    <MenuItem>NOSOTROS</MenuItem>
                    <MenuItem>PRODUCTOS</MenuItem>
                    <MenuItem>SERVICIOS</MenuItem>                    
                    <MenuItem>NOVEDADES</MenuItem>                    
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;