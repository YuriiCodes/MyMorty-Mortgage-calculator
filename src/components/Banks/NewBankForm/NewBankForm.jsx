import {Button, Form, InputGroup} from "react-bootstrap";
import {Formik} from 'formik';
import * as yup from 'yup';
import {useRef} from "react";

const schema = yup.object().shape({
    bankName: yup.string().required(),
    interestRate: yup.number().required().positive(),
    maxLoan: yup.number().required().positive(),
    minDownPayment: yup.number().required().positive(),
    loanTerm: yup.number().required().positive(),
});

const NewBankForm = (props) => {
    const inputEl = useRef(null);
    const handleBankNameChange = (e) => {
        props.updateNewBankName(e.target.value);
    };
    const handleBankDescriptionChange = (e) => {
        props.updateNewBankDescription(e.target.value);
    };
    const handeBankInterestChange = (e) => {
        props.updateNewBankInterestRate(e.target.value);
    }
    const handleBankMaxLoanChange = (e) => {
        props.updateNewBankMaxLoan(e.target.value);
    }
    const handleBankMinDownPaymentChange = (e) => {
        props.updateNewBankMinDownPayment(e.target.value);
    }
    const handleBankLoanTermChange = (e) => {
        props.updateNewBankLoanTerm(e.target.value);
    }
    debugger;
    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                bankName: "",
                interestRate: 0,
                maxLoan: 0,
                minDownPayment: 0,
                loanTerm: 0,
            }}>
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
                    console.log(inputEl.current.value);
                    if(inputEl.current.value && !errors.bankName && !errors.interestRate && !errors.maxLoan && !errors.minDownPayment && !errors.loanTerm) {
                        props.addBank();
                    }

                }}>
                    <h1>Add bank</h1>

                    <Form.Group className="mb-2" controlId="validationFormikBankName">
                        <Form.Label>Bank name</Form.Label>
                        <InputGroup hasValidation id="validationFormikBankName">
                            <Form.Control type="text"
                                          placeholder="Monobank"
                                          aria-describedby="validationFormikBankName"
                                          name="bankName"
                                          ref={inputEl}
                                          onChange={(e) => {
                                              handleChange(e);
                                              handleBankNameChange(e);
                                          }}
                                          isInvalid={!!errors.bankName}

                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.bankName}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>


                    <Form.Group className="mb-2" controlId="validationFormikInterestRate">
                        <Form.Label>Interest rate, %</Form.Label>
                        <InputGroup hasValidation id="inputGroupInterestRate">
                              <Form.Control type="number"
                                            placeholder="2.3"
                                            aria-describedby="inputGroupInterestRate"
                                            name="interestRate"
                                            onChange={(e) => {
                                                handleChange(e);
                                                handeBankInterestChange(e);
                                            }}
                                            isInvalid={!!errors.interestRate}
                              />
                            <Form.Control.Feedback type="invalid">
                                {errors.interestRate}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>



                    <Form.Group className="mb-2" controlId="validationFormikMaxLoan">
                        <Form.Label>Max Loan, $</Form.Label>
                        <InputGroup hasValidation id="inputGroupMaxLoan">
                            <Form.Control type="number"
                                          placeholder="400000"
                                          name="maxLoan"
                                          // value={values.maxLoan}

                                          onChange={e => {
                                              handleChange(e);
                                              handleBankMaxLoanChange(e);
                                          }}
                                          aria-describedby="inputGroupMaxLoan"
                                          isInvalid={!!errors.maxLoan }
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.maxLoan}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>



                    <Form.Group className="mb-2" controlId="validationFormikMinDownPayment">
                        <Form.Label>Min down payment, $</Form.Label>
                        <InputGroup hasValidation id="inputGroupMinDownPayment">
                            <Form.Control type="number"
                                          placeholder="30000"
                                          name="minDownPayment"

                                          onChange={e => {
                                              handleChange(e);
                                              handleBankMinDownPaymentChange(e);
                                          }}
                                          aria-describedby="inputGroupMinDownPayment"
                                          isInvalid={!!errors.minDownPayment }
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.minDownPayment}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>


                    <Form.Group className="mb-2" controlId="validationFormikLoanTerm">
                        <Form.Label>Loan term, months</Form.Label>
                        <InputGroup hasValidation id="inputGroupLoanTerm">
                            <Form.Control type="number"
                                          placeholder="36"
                                          name="loanTerm"

                                          onChange={e => {
                                              handleChange(e);
                                              handleBankLoanTermChange(e);
                                          }}
                                          aria-describedby="inputGroupLoanTerm"
                                          isInvalid={!!errors.loanTerm }
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.loanTerm}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Add bank
                    </Button>
                </Form>
            )}
        </Formik>
    )
}
export default NewBankForm;