/// <reference types="react" />
interface Testimonial {
    img: LooseObject;
    title: string;
    from: string;
    text: string;
}
export interface TestimonialsProps {
    data: {
        title: string;
        description: string;
        testimonials: Testimonial[];
    };
}
declare const Testimonials: (props: TestimonialsProps) => JSX.Element;
export default Testimonials;
