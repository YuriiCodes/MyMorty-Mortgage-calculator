import {Button, Card, CardGroup, Container, ListGroup, ListGroupItem, Row, Form, Col, Offcanvas} from "react-bootstrap";
import {
    addBank,
    deleteBank,
    updateNewBankDescription,
    updateNewBankInterestRate, updateNewBankLoanTerm, updateNewBankMaxLoan, updateNewBankMinDownPayment,
    updateNewBankName
} from "../../data/banksReducer";
import NewBankForm from "./NewBankForm/NewBankForm";
import {useState} from "react";


const Banks = (props) => {

    const banks = props.banks;

    // variables needed for update bank offcanvas form
    const [show, setShow] = useState(false);
    const [bankUserWantToUpdate, setBankUserWantToUpdate] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="mt-4">
            <Row>
                <Col md={8} >
                    <Row xs={1} md={2} lg={3}  className="g-4">
                        {banks.map(bank => {
                            return (
                                <Col key={bank.id}>
                                    <Card  style={{width: '15rem'}}>
                                        {/*<Card.Img variant="top" src={bank.logo}/>*/}
                                        <Card.Body>
                                            <Card.Title>{bank.name}</Card.Title>
                                            <Card.Text>
                                                {/*{bank.description}*/}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Interest rate: <b>{bank.interestRate}%</b></ListGroupItem>
                                            <ListGroupItem>Max loan: <b>${bank.maxLoan}</b></ListGroupItem>
                                            <ListGroupItem>Minimal down payment: <b>${bank.minDownPayment}</b></ListGroupItem>
                                            <ListGroupItem>Loan term: <b>{bank.loanTerm} months</b></ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                            {/*<Card.Link href="#">Card Link</Card.Link>*/}
                                            {/*<Card.Link as={Button} href="#">Another Link</Card.Link>*/}
                                            <Button variant="outline-secondary"  onClick={(e) => {
                                                handleShow();
                                                setBankUserWantToUpdate(bank);
                                            }}>Edit bank</Button>
                                            <Button variant="outline-danger" onClick={() => {
                                                props.deleteBank(bank.id)
                                            }}>Delete bank</Button>


                                            <Offcanvas placement="end" show={show} onHide={handleClose} {...props}>
                                                <Offcanvas.Header closeButton>
                                                    <Offcanvas.Title>Edit {bankUserWantToUpdate.name} </Offcanvas.Title>
                                                </Offcanvas.Header>
                                                <Offcanvas.Body>
                                                    //TODO: add two form types in NewBankForm,  implement edit bank form, add main page content.
                                                    <NewBankForm updateNewBankName={props.updateNewBankName}
                                                                 updateNewBankDescription={props.updateNewBankDescription}
                                                                 updateNewBankInterestRate={props.updateNewBankInterestRate}
                                                                 updateNewBankMaxLoan={props.updateNewBankMaxLoan}
                                                                 updateNewBankMinDownPayment={props.updateNewBankMinDownPayment}
                                                                 updateNewBankLoanTerm={props.updateNewBankLoanTerm}
                                                                 addBank={props.addBank}

                                                                 newBank={props.newBank}

                                                    />
                                                    Some text as placeholder. In real life you can have the elements you
                                                    have chosen. Like, text, images, lists, etc.
                                                </Offcanvas.Body>
                                            </Offcanvas>


                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
                <Col md={4} >
                    <Card border="success">
                    <NewBankForm updateNewBankName={props.updateNewBankName}
                                 updateNewBankDescription={props.updateNewBankDescription}
                                 updateNewBankInterestRate={props.updateNewBankInterestRate}
                                 updateNewBankMaxLoan={props.updateNewBankMaxLoan}
                                 updateNewBankMinDownPayment={props.updateNewBankMinDownPayment}
                                 updateNewBankLoanTerm={props.updateNewBankLoanTerm}
                                 addBank={props.addBank}

                                 newBank={props.newBank}

                    />
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}
export default Banks;