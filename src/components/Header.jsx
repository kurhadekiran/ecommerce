import { Alert, Container } from "react-bootstrap";

export function Header(props){
    return (
        <Container className="mt-5">
            <Alert variant="success">
                <h6 style={{textAlign: 'center'}}>{props.text}</h6>
            </Alert>
        </Container>
    );
}