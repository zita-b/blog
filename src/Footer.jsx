import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiHome } from "react-icons/ci";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <br></br>
      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                The Dojo Blog
              </h6>
              <p>
                We are an absolutely real company, we like to write blogs for
                people who love to read blogs. For any questions contact our
                team. You can call us or send an email. We are an online company
                and we do not have an office. Mainly because we can not afford
                it.
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <CiHome icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <CiMail className="me-3" />
                dojoblog@example.com
              </p>
              <p>
                <CiPhone className="me-3" /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright: TheDojoBlog.com
      </div>
    </MDBFooter>
  );
};

export default Footer;
