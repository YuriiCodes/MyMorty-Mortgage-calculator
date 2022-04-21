import {Button, Form, InputGroup} from "react-bootstrap";
import {Formik} from 'formik';
import * as yup from 'yup';
import {useRef, useState} from "react";

const schema = yup.object().shape({
    bankName: yup.string().required(),
    interestRate: yup.number().required().positive(),
    maxLoan: yup.number().required().positive(),
    minDownPayment: yup.number().required().positive(),
    loanTerm: yup.number().required().positive(),
});

const BankForm = (props) => {
    const inputEl = useRef(null);
    const type = props.type;


    // we use local state to store values that user enters while updating the bank
    const [editedBankName, setEditedBankName] = useState("");
    const [editedBankInterestRate, setEditedBankInterestRate] = useState(null);
    const [editedBankMaxLoan, setEditedBankMaxLoan] = useState(null);
    const [editedBankMinDownPayment, setEditedBankMinDownPayment] = useState(null);
    const [editedBankLoanTerm, setEditedBankLoanTerm] = useState(null);

    const ADD = "add";
    const UPDATE = "update";

    const handleBankNameChange = (e) => {
        if(type===ADD){
            props.updateNewBankName(e.target.value);
        } else if(type===UPDATE){
            setEditedBankName(e.target.value);
        }
    };
    const handeBankInterestChange = (e) => {
        if(type===ADD) {
            props.updateNewBankInterestRate(parseInt(e.target.value));
        } else if(type===UPDATE){
            setEditedBankInterestRate(parseInt(e.target.value));
        }
    }
    const handleBankMaxLoanChange = (e) => {
        if(type===ADD) {
            props.updateNewBankMaxLoan(parseInt(e.target.value));
        } else if(type===UPDATE){
            setEditedBankMaxLoan(parseInt(e.target.value));
        }
    }
    const handleBankMinDownPaymentChange = (e) => {
        if(type===ADD) {
            props.updateNewBankMinDownPayment(parseInt(e.target.value));
        } else if(type===UPDATE){
            setEditedBankMinDownPayment(parseInt(e.target.value));
        }
    }
    const handleBankLoanTermChange = (e) => {
        if(type===ADD) {
            props.updateNewBankLoanTerm(parseInt(e.target.value));
        } else if(type===UPDATE){
            setEditedBankLoanTerm(parseInt(e.target.value));
        }
    }
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
                    if(type===ADD){
                        if(inputEl.current.value && !errors.bankName && !errors.interestRate && !errors.maxLoan && !errors.minDownPayment && !errors.loanTerm) {
                            props.addBank();
                        }
                    }
                    else if(type===UPDATE){
                        if(inputEl.current.value && !errors.bankName && !errors.interestRate && !errors.maxLoan && !errors.minDownPayment && !errors.loanTerm) {
                            props.editExistingBank(
                                props.bankUserWantsToUpdate.id,
                                editedBankName,
                                editedBankInterestRate,
                                editedBankMaxLoan,
                                editedBankMinDownPayment,
                                editedBankLoanTerm,
                            );
                            // close the modal if update successfull
                            props.handleClose();
                        }
                    }


                }}>
                    {type===ADD?<h1>Add bank</h1> : null}

                    <Form.Group className="mb-2" controlId="validationFormikBankName">
                        <Form.Label>Bank name</Form.Label>
                        <InputGroup hasValidation id="validationFormikBankName">
                            <Form.Control type="text"
                                          placeholder={type===ADD?"Monobank":props.bankUserWantsToUpdate.name }
                                          aria-describedby="validationFormikBankName"
                                          name="bankName"
                                          value={type===ADD? props.newBank.name : editedBankName}
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
                                            placeholder={type===ADD? "2.3": props.bankUserWantsToUpdate.interestRate}
                                            aria-describedby="inputGroupInterestRate"
                                            name="interestRate"
                                            value={type===ADD? props.newBank.interestRate: editedBankInterestRate}

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
                                          placeholder={type===ADD? "400000" : props.bankUserWantsToUpdate.maxLoan}
                                          value={type===ADD? props.newBank.maxLoan : editedBankMaxLoan}
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
                                          placeholder={type===ADD? "30000": props.bankUserWantsToUpdate.minDownPayment}
                                          name="minDownPayment"
                                          value={type===ADD? props.newBank.minDownPayment: editedBankMinDownPayment}
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
                                          placeholder={type===ADD? "36": props.bankUserWantsToUpdate.loanTerm}
                                          name="loanTerm"
                                            value={type===ADD? props.newBank.loanTerm: editedBankLoanTerm}
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

                    {type===ADD?
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                        :
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    }

                </Form>
            )}
        </Formik>
    )
}
export default BankForm;