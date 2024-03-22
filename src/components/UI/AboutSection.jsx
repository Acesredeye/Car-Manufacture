import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car service</h2>
              <p className="section__description">
              Welcome, where passion for performance meets precision engineering. With a relentless commitment to excellence, we specialize in transforming ordinary vehicles into extraordinary machines. Our team of experienced technicians blends innovation with expertise to deliver custom modifications tailored to your desires.
We understand that your vehicle is more than just transportation—it's an expression of your personality and lifestyle. That's why we offer a diverse range of services, from engine tuning and suspension upgrades to bespoke interior enhancements. Whether you're seeking enhanced power, superior handling, or refined luxury, we have the knowledge and skills to exceed your expectations.
Driven by a dedication to quality and customer satisfaction, we take pride in every project we undertake. Our state-of-the-art facilities and meticulous attention to detail ensure that your vehicle receives the highest level of care and craftsmanship. Trust us to bring your automotive dreams to life, and experience the thrill of driving a truly one-of-a-kind machine.
Unleash the full potential of your vehicle and elevate your driving experience today.

                
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Modifying
                  
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Best service
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> 24/7 Customer services
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Life Time Warranty
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
