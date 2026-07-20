import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import TestimonialCard from '@/components/home/TestimonialCard/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import styles from './TestimonialsSection.module.scss';

function TestimonialsSection() {
  return (
    <section className="section section--light">
      <Container>
        <SectionTitle eyebrow="Testimonios" title="Lo que dicen nuestros clientes" align="center" />
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
