import Bank from "./Bank.js";
import BankService from "./BankService.mjs";

class BankController {
    async create(req, res) {
        try {
            const bank = await BankService.create(req.body)
            res.json(bank);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getAll(req, res) {
        try {
            const banks = await BankService.getAll();
            return res.json(banks);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getOne(req, res) {
        try {
            const bank = await BankService.getOne(req.params.id);
            return res.json(bank)
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async update(req, res) {
        try {
            const bank = req.body;
            if (!bank._id)
                return res.status(400).json({message: "Missing id"});
            const updatedBank = await BankService.update(bank);
            return res.json(updatedBank);
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({message: "Missing id"});
            const deletedBank = await BankService.delete(id);
            return res.json(deletedBank);

        } catch (err) {
            return res.status(500).json(err)
        }
    }
}

export default new BankController();