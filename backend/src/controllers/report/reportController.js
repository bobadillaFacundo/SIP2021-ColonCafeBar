const PublicError = require('../../errors/PublicError');
const { Op } = require('sequelize');
module.exports = class ReportController {
	/**
	 *Creates an instance of ReportController.
	 * @param {Server} server
	 */
	constructor(server) {
		/**
		 * @type {Server}
		 */
		this.server = server;
	}

	get db() {
		return this.server.db;
	}

	get utils() {
		return this.server.utils
	}
	get sequelize() {
		return this.server.sequelize;
	}

	get models () {
		return this.server.models;
	}


async createReportPriceHistoryByProduct({ page = 1, perPage = 20 } = {}) {
    if (isNaN(page)) throw new PublicError('page should be a number');
    if (isNaN(perPage)) throw new PublicError('perPage should be a number');

    const productPrice = await this.db('productPrices')




    const whereAnd = [];

    

    return { products, pagination: { page, perPage, total } };
}


	
}