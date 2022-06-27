/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import Blob from 'assets/blob.svg'
import BannerImg from 'assets/banner-thumb.png';
import Blob1 from 'assets/blob1.svg'
import HeadingImage1 from 'assets/headingimage1.png'
import HeadingImage2 from 'assets/headingimage2.png'
import ShapeLeft from 'assets/shape-left.png'
import ShapeRight from 'assets/shape-right.png'

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Box sx={styles.banner.imageBox} >
            <Image src={HeadingImage1} alt='heading' />
          </Box>
          <Box sx={styles.banner.imageBox} >
            <Image src={HeadingImage2} alt='heading' />
          </Box>
          <Text as="p" variant="heroSecondary">
          We focus on modern house plants and specialize in succulents and cacti. We strive to create a unique environment for our clients. We are driven to bring the best selection of plants and make our customers happy! 
          </Text>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt='banner' />
        </Box>
      </Container>
    </section>  
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: -50,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${Blob})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '65%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: -100,
      right: 0,
      height: '100%',
      width: '110%',
      zIndex: -1,
      backgroundImage: `url(${Blob1})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '48%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
