import Card from "../components/Card";
import "./Common.css";

function About() {
  return (
    <div className="page about">
      <h2>About SARC</h2>
      <p>
        SARC (Student Alumni Relations Cell) aims to bridge the gap between students and alumni through
        initiatives and events that foster meaningful connections.
      </p>
      <div className="card-container">
        <Card title="Our Mission" description="We connect students with alumni to build a strong, supportive IITB network." />
        <Card title="Our Vision" description="To create a lifelong bond between alumni and their alma mater." />
        <Card title="Our Team" description="A student run body driven by enthusiasm, creativity, and collaboration." />
      </div>
    </div>
  );
}

export default About;
