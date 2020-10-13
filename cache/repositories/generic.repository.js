"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor(model) {
        this.model = model;
    }
    async getAll(filter = {}) {
        const items = await this.model.find(filter);
        return items;
    }
    async getById(id) {
        const item = await this.model.findById(id);
        return item;
    }
    async insert(item) {
        const itemInserted = await this.model.create(item);
        return itemInserted;
    }
    async update(id, item) {
        const itemUpdated = await this.model.findByIdAndUpdate(id, item, {
            new: true,
        });
        return itemUpdated;
    }
    async delete(id) {
        const itemDeleted = await this.model.findByIdAndUpdate(id, { isActive: false }, { new: true });
        return itemDeleted;
    }
}
exports.default = default_1;
