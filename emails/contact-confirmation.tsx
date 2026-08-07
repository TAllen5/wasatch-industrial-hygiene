import { Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "react-email";

export default function ContactConfirmationEmail({ name, service }: { name: string; service: string }) {
  return (
    <Html>
      <Head />
      <Preview>We received your consultation request</Preview>
      <Body style={{ backgroundColor: "#f1f5f9", fontFamily: "Arial, sans-serif", margin: 0, padding: "28px 12px" }}>
        <Container style={{ backgroundColor: "#ffffff", borderRadius: "14px", margin: "0 auto", maxWidth: "600px", overflow: "hidden" }}>
          <Section style={{ backgroundColor: "#071927", padding: "32px 34px" }}>
            <Text style={{ color: "#7dd3fc", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", margin: 0, textTransform: "uppercase" }}>Wasatch Industrial Hygiene &amp; Safety</Text>
            <Heading style={{ color: "#ffffff", fontSize: "30px", lineHeight: "36px", margin: "12px 0 0" }}>Your request is in good hands.</Heading>
          </Section>
          <Section style={{ padding: "32px 34px" }}>
            <Text style={{ color: "#334155", fontSize: "16px", lineHeight: "26px" }}>Hello {name},</Text>
            <Text style={{ color: "#334155", fontSize: "16px", lineHeight: "26px" }}>Thank you for contacting Wasatch. We received your request regarding <strong>{service}</strong> and will review the information you provided before responding directly.</Text>
            <Section style={{ backgroundColor: "#f8fafc", borderLeft: "4px solid #c96d36", margin: "24px 0", padding: "14px 20px" }}>
              <Text style={{ color: "#071927", fontSize: "15px", fontWeight: 700, margin: "4px 0 8px" }}>What happens next</Text>
              <Text style={{ color: "#526075", fontSize: "14px", lineHeight: "23px", margin: 0 }}>We’ll consider the hazard, location, timing, and desired outcome, then follow up to clarify scope and recommend the most useful next step.</Text>
            </Section>
            <Text style={{ color: "#526075", fontSize: "14px", lineHeight: "23px" }}>If the matter is time-sensitive, call <strong>(435) 830-4444</strong>.</Text>
            <Button href="https://www.wasatchsafetyih.com/services" style={{ backgroundColor: "#0c4a6e", borderRadius: "7px", color: "#ffffff", display: "inline-block", fontSize: "14px", fontWeight: 700, marginTop: "14px", padding: "13px 20px", textDecoration: "none" }}>Explore Our Services</Button>
            <Hr style={{ borderColor: "#e2e8f0", margin: "28px 0 18px" }} />
            <Text style={{ color: "#64748b", fontSize: "12px", lineHeight: "19px" }}>This confirmation relates only to the consultation request you submitted. Your information will be used to respond to your inquiry.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
