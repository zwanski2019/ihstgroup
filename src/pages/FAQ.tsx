
import { Layout } from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What programs does International House of Sciences offer?</AccordionTrigger>
            <AccordionContent>
              We offer a wide range of programs including online learning platforms, language tutoring,
              business consulting services, and professional development courses. Our programs are
              designed to meet the diverse needs of both students and professionals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How can I register for a course?</AccordionTrigger>
            <AccordionContent>
              You can register for a course by visiting our 'Tutoring' section and selecting your
              desired course. Follow the registration process, and our team will get in touch with
              you to confirm your enrollment and provide further details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Are your tutors qualified?</AccordionTrigger>
            <AccordionContent>
              Yes, all our tutors are highly qualified professionals with extensive experience in
              their respective fields. They undergo a rigorous selection process and continuous
              professional development to ensure the highest quality of education.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
}
