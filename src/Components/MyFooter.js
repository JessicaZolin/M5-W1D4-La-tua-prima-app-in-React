import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/esm/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

function MyFooter() {
    return (
        <footer className="bg-body-tertiary text-center text-lg-start position-fixed bottom-0 w-100">
            <Container>
                <Navbar expand="lg">
                    <nav className="d-flex justify-content-between w-100">
                        <p className="text-muted mb-0 d-flex align-items-center">© 2023 Company, Inc</p>
                            <Nav>
                                <Nav.Link href="#">Privacy Policy</Nav.Link>
                                <Nav.Link href="#">Terms of Use</Nav.Link>
                            </Nav>
                    </nav>
                </Navbar>
            </Container>
        </footer>
    );
}

export default MyFooter;