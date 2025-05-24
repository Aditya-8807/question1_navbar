import Card from "../components/Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Common.css";

function Home() {
  return (
    <div className="page home">
      <h2>Welcome to SARC Website</h2>
      <p>Engage, Connect, Build.</p>
      <div style={{ maxWidth: "600px", margin: "40px auto" }}>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src="/images/event1.jpg" alt="Slide 1" />
            <p className="legend">SARC LOGO</p>
          </div>
          <div>
            <img src="/images/event2.jpg" alt="Slide 2" />
            <p className="legend">ALUMINATION</p>
          </div>
          <div>
            <img src="/images/event3.jpg" alt="Slide 3" />
            <p className="legend">ASMP</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
