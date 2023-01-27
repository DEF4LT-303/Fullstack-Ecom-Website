import styled from 'styled-components';

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from '@material-ui/icons';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

// const Container = styled.div`
//   flex: 1;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f5fbfd;
//   position: relative;
//   &:hover {
//     ${Info} {
//       opacity: 1;
//     }
//   }
// `;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

// const Image = styled.img`
//   height: 75%;
//   z-index: 2;
// `;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const CustomizedCard = styled(Card)`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: relative;
  &:hover {
    ${Info} {
      opacity: 1;
    }
  }
`;

const Product = ({ item }) => {
  return (
    // <Container>
    //   <Circle />
    //   <Image src={item.img} />
    //   <Info>
    //     <IconContainer>
    //       <ShoppingCartOutlined />
    //     </IconContainer>
    //     <IconContainer>
    //       <SearchOutlined />
    //     </IconContainer>
    //     <IconContainer>
    //       <FavoriteBorderOutlined />
    //     </IconContainer>
    //   </Info>
    // </Container>

    <CustomizedCard sx={{ backgroundColor: '#F3F3F3' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='250'
          objectFit='fit'
          image={item.img}
          alt='Image'
        />

        <CardContent>
          <Info>
            <IconContainer>
              <ShoppingCartOutlined />
            </IconContainer>
            <IconContainer>
              <SearchOutlined />
            </IconContainer>
            <IconContainer>
              <FavoriteBorderOutlined />
            </IconContainer>
          </Info>
          <Typography gutterBottom variant='h5' component='div'>
            {item.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {item.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CustomizedCard>
  );
};

export default Product;
