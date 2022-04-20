import Bank from "./Bank.js";

class BankController {
    async create(req, res) {
        try {
            const {name, interestRate, maxLoan, minDownPayment, loanTerm} = req.body;
            const bank = await Bank.create({
                name,
                interestRate,
                maxLoan,
                minDownPayment,
                loanTerm
            });

            res.json(bank);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getAll(req, res) {
        try {
            const banks = await Bank.find();
            return res.json(banks);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getOne(req, res) {
        try {
            const id = req.params.id;
            if(!id)
                return res.status(400).json({message: "Missing id"});
            const user = await Bank.findById(id);
            return res.json(user)
        } catch(err) {
            return res.status(500).json(err)
        }

    }

    async update(req, res) {
        try{
            const bank = req.body;
            if(!bank._id)
                return res.status(400).json({message: "Missing id"});
            const updatedBank = await Bank.findByIdAndUpdate(bank._id, bank, {new: true});
            return res.json(updatedBank);
        } catch(err) {
            return res.status(500).json(err)
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            if(!id)
                return res.status(400).json({message: "Missing id"});
            const deletedBank = await Bank.findByIdAndDelete(id);
            return res.json(deletedBank);

        } catch(err) {
            return res.status(500).json(err)
        }
    }
}

export default new BankController();