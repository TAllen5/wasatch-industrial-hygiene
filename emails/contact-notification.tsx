import { Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "react-email";

export type ContactEmailData = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  timeline: string;
  workforce: string;
  details: string;
};

const colors = { navy: "#071927", blue: "#0c4a6e", sand: "#c96d36", slate: "#526075", light: "#f1f5f9" };

function DetailRow({ label, value }: { label: string; value: string }) {
  return value ? <Text style={{ margin: "8px 0", color: colors.slate, fontSize: "14px", lineHeight: "22px" }}><strong style={{ color: colors.navy }}>{label}:</strong> {value}</Text> : null;
}

export default function ContactNotificationEmail({ data }: { data: ContactEmailData }) {
  return (
    <Html>
      <Head />
      <Preview>New consultation request from {data.name} at {data.company}</Preview>
      <Body style={{ backgroundColor: colors.light, fontFamily: "Arial, sans-serif", margin: 0, padding: "28px 12px" }}>
        <Container style={{ backgroundColor: "#ffffff", borderRadius: "14px", margin: "0 auto", maxWidth: "620px", overflow: "hidden" }}>
          <Section style={{ backgroundColor: colors.navy, padding: "28px 34px" }}>
            <Text style={{ color: "#7dd3fc", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", margin: 0, textTransform: "uppercase" }}>Wasatch Industrial Hygiene &amp; Safety</Text>
            <Heading style={{ color: "#ffffff", fontSize: "28px", lineHeight: "34px", margin: "12px 0 0" }}>New consultation request</Heading>
          </Section>
          <Section style={{ padding: "30px 34px" }}>
            <Heading as="h2" style={{ color: colors.navy, fontSize: "21px", margin: "0 0 16px" }}>{data.name} · {data.company}</Heading>
            <DetailRow label="Role" value={data.role} />
            <DetailRow label="Email" value={data.email} />
            <DetailRow label="Phone" value={data.phone} />
            <DetailRow label="Location" value={data.location} />
            <DetailRow label="Service" value={data.service} />
            <DetailRow label="Desired timing" value={data.timeline} />
            <DetailRow label="Workforce / project size" value={data.workforce} />
            <Hr style={{ borderColor: "#e2e8f0", margin: "26px 0" }} />
            <Text style={{ color: colors.navy, fontSize: "13px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Project details</Text>
            <Text style={{ backgroundColor: "#f8fafc", borderLeft: `4px solid ${colors.sand}`, color: "#334155", fontSize: "15px", lineHeight: "24px", padding: "18px 20px", whiteSpace: "pre-wrap" }}>{data.details}</Text>
            <Button href={`mailto:${data.email}`} style={{ backgroundColor: colors.blue, borderRadius: "7px", color: "#ffffff", display: "inline-block", fontSize: "14px", fontWeight: 700, marginTop: "18px", padding: "13px 20px", textDecoration: "none" }}>Reply to {data.name}</Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
