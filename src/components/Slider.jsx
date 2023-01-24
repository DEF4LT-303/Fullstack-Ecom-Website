import { Carousel } from 'react-carousel-minimal';

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

const data = [
  {
    image:
      'https://preview.redd.it/lt5k78uzssk41.png?width=1500&format=png&auto=webp&s=3fc3ffae42bbf74e63377df0f1bd832cb9eeebbf',
    caption: 'Valorant Points'
  },
  {
    image:
      'https://cdn1.codashop.com/S/content/common/images/mno/steam_640x241.png',
    caption: 'Steam Top Ups'
  },
  {
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/28b78d108045493.5fb515fe155ae.jpg',
    caption: 'Genshin Impact Top Ups'
  }
];

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold'
};
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

    <div>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 20px'
          }}
        >
          <Carousel
            data={data}
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
    </div>
  );
}

export default Slider;
