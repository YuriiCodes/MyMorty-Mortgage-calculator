import {Button, Card, Col, Container, FloatingLabel, InputGroup, Row} from "react-bootstrap";

import {Formik} from 'formik';
import * as yup from 'yup';
import {Form} from "react-bootstrap";
import {useRef, useState} from "react";

const MortgageCalculator = (props) => {

    // inner state to access variables avalialbe only in form, to display it later when calculating monthly payment
    const [moneyBorrowedAfterDownPayment, setMoneyBorrowedAfterDownPayment] = useState(0);

    const loanInput = useRef(null);
    const downPaymentInput = useRef(null);
    debugger;
    let banks = props.banks;


    const selectedBank = banks.find(bank => bank.id == props.selectedBankId);

    debugger;
    const schema = yup.object().shape({
        initialLoan: yup.number().required().positive().max(selectedBank.maxLoan),
        downPayment: yup.number().required().positive().min(selectedBank.minDownPayment).max(yup.ref("initialLoan")),
        bankName: yup.string().required()
    });

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Formik
                        validationSchema={schema}
                        onSubmit={console.log}
                        initialValues={{
                            initialLoan: 0,
                            downPayment: 0,
                            bankName: ""
                        }} validateOnBlur onSubmit={(values) => console.log(values)}>
                        {({
                              handleSubmit,
                              handleChange,
                              handleBlur,
                              values,
                              touched,
                              isValid,
                              errors,
                          }) => (
                            <Form className="p-2 border my-4" noValidate onSubmit={(e) => {
                                handleSubmit(e);
                                let inputedLoan = loanInput.current.value;
                                let inputedDownPayment = downPaymentInput.current.value;
                                if (!errors.initialLoan && !errors.downPayment && inputedLoan !== "" && inputedDownPayment !== "") {
                                    console.log(`Ammount borrowed: ${inputedLoan}`);

                                    let ammountBorrowedAfterDownPayment = parseFloat(inputedLoan) - parseFloat(inputedDownPayment);
                                    setMoneyBorrowedAfterDownPayment(ammountBorrowedAfterDownPayment);
                                    console.log(`Ammount borrowed after down payment: ${ammountBorrowedAfterDownPayment}`);

                                    let annualInterestRate = selectedBank.interestRate;
                                    console.log(`Annual interest rate: ${annualInterestRate}`);

                                    let numberOfMonthlyPayments = selectedBank.loanTerm;
                                    console.log('Number of monthly payments: ' + numberOfMonthlyPayments);

                                    let monthlyPayment = (ammountBorrowedAfterDownPayment * (annualInterestRate / 12) * ((1 + annualInterestRate / 12) ** numberOfMonthlyPayments)) / (((1 + annualInterestRate / 12) ** numberOfMonthlyPayments) - 1)
                                    console.log(`Montly payment is: ${monthlyPayment}`)

                                    props.updateMonthlyPayment(monthlyPayment);
                                    props.toggleIsMonthlyPaymentAvaliable(true);
                                }
                            }}>
                                <h1>Calculate monthly payment</h1>

                                <Form.Group controlId="validationFormikUsername">
                                    <Form.Label>Select desired bank:</Form.Label>
                                    <FloatingLabel controlId="floatingSelect" label="Open this select menu">
                                        <Form.Select aria-label="Floating label select example"
                                                     value={props.selectedBankId}
                                                     onChange={e => props.updateSelectedBankId(e.target.value)}>
                                            {banks.map(bank => {
                                                return <option key={bank.id} value={bank.id}>{bank.name}</option>
                                            })}

                                        </Form.Select>
                                    </FloatingLabel>

                                </Form.Group>
                                <Form.Group className="mb-2" controlId="validationFormikMaxLoan">
                                    <Form.Label>Initial loan, $</Form.Label>
                                    <InputGroup hasValidation id="inputGroupInitialLoan">
                                        <Form.Control type="number"
                                                      placeholder="400000"
                                                      name="initialLoan"
                                                      ref={loanInput}

                                                      onChange={e => {
                                                          handleChange(e);
                                                          // handleBankMaxLoanChange(e);
                                                      }}
                                                      aria-describedby="inputGroupInitialLoan"
                                                      isInvalid={!!errors.initialLoan}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.initialLoan}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>


                                <Form.Group className="mb-2" md={4} controlId="validationFormikMinDownPayment">
                                    <Form.Label>Down payment, $</Form.Label>
                                    <InputGroup hasValidation id="inputGroupMinDownPayment">
                                        <Form.Control type="number"
                                                      ref={downPaymentInput}
                                                      placeholder="30000"
                                                      name="downPayment"
                                                      onChange={e => {
                                                          handleChange(e);
                                                      }}
                                                      aria-describedby="inputGroupMinDownPayment"
                                                      isInvalid={!!errors.downPayment}

                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.downPayment}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Calculate mortgage
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
                {props.isMonthlyPaymentAvaliable
                    ? <Col md={6} className="mt-4">
                        <Card>
                            <Card.Body>
                                {/* We round the monthly payment to the nearest hundredth*/}
                                <Card.Title><h2> Your monthly payment is: <span
                                    className="text-success">${props.monthlyPayment.toFixed(3)} </span></h2>
                                </Card.Title>
                                <Card.Text>
                                    <p>Ammount of borrowed money after down payment:
                                        ${moneyBorrowedAfterDownPayment} </p>
                                    <p>Annual interest rate of {selectedBank.name}: <b>{selectedBank.interestRate}%</b>
                                    </p>
                                    <p>Number of monthly payments of {selectedBank.name}: <b>{selectedBank.loanTerm}</b>
                                    </p>
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>
                    :
                    <Col md={6} className="mt-4">
                        <Card>
                            <Card.Body>
                                <Card.Title><h4>Please submit form to calculate your monthly payment </h4></Card.Title>
                                <Card.Text>
                                    <p>Annual interest rate of {selectedBank.name}: <b>{selectedBank.interestRate}%</b>
                                    </p>
                                    <p>Number of monthly payments of {selectedBank.name}: <b>{selectedBank.loanTerm}</b>
                                    </p>
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>}
            </Row>
        </Container>
    );
}
export default MortgageCalculator;

