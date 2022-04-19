import Router from 'express';
import Bank from "./Bank.js";


const router = new Router();

router.post('/banks', async (req, res) => {
    try{
        const {name, interestRate, maxLoan, minDownPayment, loanTerm} = req.body;
        const bank = await Bank.create({
            name,
            interestRate,
            maxLoan,
            minDownPayment,
            loanTerm
        });

        res.json(bank);
    } catch(e){
        res.status(500).json(e);
    }
});

router.get('/banks', (req, res) => {
  res.send('banks');
});


router.get('/banks:id', (req, res) => {
    res.send('banks');
});

router.put('/banks', (req, res) => {
  res.send('banks');
});

router.delete('/banks/:id', (req, res) => {
  res.send('banks');
});

export default router;