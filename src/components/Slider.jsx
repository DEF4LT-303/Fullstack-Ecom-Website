import { Carousel } from 'react-carousel-minimal';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

// const Container = styled.div`
//   height: 100vh;
//   width: 100%;
//   display: flex;
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #ececec;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   top: 0;
//   bottom: 0;
//   /* transition: all 0.5s ease; */
//   left: ${(props) => props.direction === 'left' && '10px'};
//   right: ${(props) => props.direction === 'right' && '10px'};
//   &:hover {
//     opacity: 1;
//     transform: scale(1.1);
//   }
// `;

// const Wrapper = styled.div`
//   height: 100%;
// `;

// const Slide = styled.div`
//   display: flex;
//   align-items: center;
//   height: 100vh;
//   width: 100vw;
// `;

// const ImgContainer = styled.div`
//   flex: 1;
//   height: 100%;
// `;

// const Image = styled.img`
//   height: 80%;
//   width: 90vw;
// `;

// const InfoContainer = styled.div`
//   flex: ;
//   padding: 50px;
// `;

// const Title = styled.h1``;
// const Desc = styled.p``;
// const Button = styled.button``;

// Example - https://reactjsexample.com/easy-to-use-responsive-and-customizable-carousel-component-for-react/

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold'
};

const Container = styled.div`
  ${mobile({ display: 'none' })}
`;

function Slider() {
  return (
    // <Container>
    //   <Arrow direction='left'>
    //     <ArrowBackIosOutlined />
    //   </Arrow>
    //   <Wrapper>
    //     <Slide>
    //       <ImgContainer>
    //         <Image src='https://preview.redd.it/lt5k78uzssk41.png?width=1500&format=png&auto=webp&s=3fc3ffae42bbf74e63377df0f1bd832cb9eeebbf' />
    //       </ImgContainer>
    //       {/* <InfoContainer>
    //         <Title>Summer Sale</Title>
    //         <Desc>Test</Desc>
    //         <Button>SHOP NOW</Button>
    //       </InfoContainer> */}
    //     </Slide>
    //   </Wrapper>
    //   <Arrow direction='right'>
    //     <ArrowForwardIosOutlined />
    //   </Arrow>
    // </Container>

    <Container>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 20px'
          }}
        >
          <Carousel
            data={sliderItems}
            time={5000}
            width='auto'
            height='500px'
            captionStyle={captionStyle}
            radius='5px'
            slideNumber={false}
            captionPosition='top'
            automatic={true}
            dots={true}
            pauseIconColor='white'
            pauseIconSize='40px'
            slideBackgroundColor='darkgrey'
            slideImageFit='cover'
            thumbnails={false}
            style={{
              textAlign: 'center',
              maxWidth: 'auto',
              maxHeight: '500px',
              margin: '40px auto'
            }}
          />
        </div>
      </div>
    </Container>
  );
}

export default Slider;
