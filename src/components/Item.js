import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Info, Image, Icon } from './styledComponents';

const Item = ({ id, stock, price, image }) => (
    <ProductContainer>
        <Circle />
        <Image src={image} />
        <Info>
            <Icon>
                <LocalOfferOutlined /><strong>$ {price}</strong>
            </Icon>
            <Icon>
                <DescriptionOutlined />{stock} unid.
            </Icon>
            <Icon style={{ cursor: "pointer" }}>
                <Link to={'/item/${id}'}><InfoOutlined />Details</Link>
            </Icon>
        </Info>
    </ProductContainer>
)

export default Item;