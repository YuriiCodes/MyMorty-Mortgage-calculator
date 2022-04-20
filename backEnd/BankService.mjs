import Bank from "./Bank.js";

class BankService {
    async create(bank) {
        const {name, interestRate, maxLoan, minDownPayment, loanTerm} = req.body;
        const createdBank = await Bank.create(bank);
        return createdBank;
    }

    async getAll() {
        const banks = await Bank.find();
        return banks;
    }

    async getOne(id) {
        if (!id) {
            throw new Error("No id provided");
        }
        const bank = await Bank.findById(id);
        return bank;
    }

    async update(bank) {
        if (!bank._id) {
            throw new Error("No id provided");
        }

        const updatedBank = await Bank.findByIdAndUpdate(bank._id, bank, {new: true});
        return updatedBank;

    }

    async delete(id) {
        if (!id){
            throw new Error("No id provided");
        }
        const deletedBank = await Bank.findByIdAndDelete(id);
        return deletedBank;

    }
}

export default new BankService();