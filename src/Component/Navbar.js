import react from "react"
import {Navbar,Container,Nav,Button} from "react-bootstrap"

const Navbartop=()=>{
    return(
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button className="btn-light" style={{width:"10vw",height:"35px"}}>English</Button>
          <br/>
          <Button className="btn-danger" style={{width:"10vw",height:"35px"}}>Sign in</Button>
          </Container>
        </Navbar>
        
</>)
}
export default Navbartop;