/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Expert from 'assets/key-feature/expert.svg';
import Quality from 'assets/key-feature/quality.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Expert,
    altText: 'Experts',
    title: 'Experts',
    text:
      'You will be working with the best consultants in the industry who have a broad and deep understanding and competence in terms of knowledge, skill and experience through practice and education of succulents and cacti',
  },
  {
    id: 2,
    imgSrc: Quality,
    altText: 'Care and Quality',
    title: 'Care and Quality',
    text:
      'Every plant is unique and has its own requirements of sunlight, water and fertilizer. When given the correct conditions, plants will be healthy and thrive. We seek to cultivate the best and healthiest plants.'
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Subscriptions',
    title: 'Subscriptions',
    text:
      'We offer multiple subscriptions to meet your plants needs from delivering new plants, care supplies, and or pots.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Service',
    title: 'Customer Service',
    text:
      'We are ultimately about making sure customers are successful in solving whatever issues they came to us to help solve.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature'}} id="feature">
      <Container>
        <SectionHeader 
          slogan="Our Goal"
          title="We cultivate only the best"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn 
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
