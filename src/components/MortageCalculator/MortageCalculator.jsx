import {Button, Col, FloatingLabel, InputGroup, Row} from "react-bootstrap";

import { Formik } from 'formik';
import * as yup from 'yup';
import {Form} from "react-bootstrap";


const MortageCalculator = (props) => {
    let banks = props.banks;

    const selectedBank = banks.find(bank => bank.id === parseInt(props.selectedBankId));
    debugger
    const schema = yup.object().shape({
        initialLoan: yup.number().required().positive().max(selectedBank.maxLoan),
        downPayment: yup.number().required().positive(),
        bankName: yup.string().required()
    });
    debugger;
    return (
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
                <Form className="p-2" noValidate onSubmit={(e) => {
                    handleSubmit(e);
                }}>
                    <h1>Calculate loan</h1>

                    <Form.Group  controlId="validationFormikUsername">
                        <Form.Label>Select desired bank:</Form.Label>
                        <FloatingLabel controlId="floatingSelect" label="Open this select menu">
                            <Form.Select aria-label="Floating label select example" value={props.selectedBankId} onChange={e => props.updateSelectedBankId(e.target.value)}>
                                {banks.map(bank => {
                                    return <option key={bank.id} value={bank.id}>{bank.name}</option>
                                })}

                            </Form.Select>
                        </FloatingLabel>

                    </Form.Group>
                    <Form.Group className="mb-2"  controlId="validationFormikMaxLoan">
                        <Form.Label>Initial loan, $</Form.Label>
                        <InputGroup hasValidation id="inputGroupInitialLoan">
                            <Form.Control type="number"
                                          placeholder="400000"
                                          name="initialLoan"
                                value={values.initialLoan}

                                          onChange={e => {
                                              handleChange(e);
                                              // handleBankMaxLoanChange(e);
                                          }}
                                          aria-describedby="inputGroupInitialLoan"
                                          isInvalid={!!errors.initialLoan }
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.initialLoan}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>



                    <Form.Group className="mb-2"  md={4} controlId="validationFormikMinDownPayment">
                        <Form.Label>Down payment, $</Form.Label>
                        <InputGroup hasValidation id="inputGroupMinDownPayment">
                            <Form.Control type="number"
                                          placeholder="30000"
                                          name="downPayment"
                                          onChange={e => {
                                              handleChange(e);
                                          }}
                                          aria-describedby="inputGroupMinDownPayment"
                                          isInvalid={!!errors.downPayment }
                                          value={values.downPayment}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.downPayment}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>



                    <Button variant="primary" type="submit">
                        Add bank
                    </Button>
                </Form>
            )}
        </Formik>

    );
}
export default MortageCalculator;

