'use strict';

class CrudOperations {

    constructor(model) {
        this.model = model;
    }

    async addOn(obj) {
        try {
            return await this.model.create(obj);
        } catch (e) {
            console.error(`somthing wrong with create operation`, this.model.name);
        }
    }

    async getFrom(id) {

        try {
            if (id) {
                return await this.model.findOne({ where: { id } })
            } else {
                return await this.model.findAll()
            }
        } catch (e) {
            console.error(`somthing wrong with get item(s) operation`, this.model.name);
        }

    }

    async updateAt(obj,id) {
        try {
            return await this.model.update(obj, { where: { id } });
        } catch (e) {
            console.error(`somthing wrong with update operation`, this.model.name);
        }
    }

    async deleteFrom(id) {
        try {
            return await this.model.destroy({ where: { id } });
        } catch (e) {
            console.error(`somthing wrong with delete operation`, this.model.name);
        }
    }

}



module.exports = { CrudOperations };