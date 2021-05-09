const Route = require('../../models/Route');
module.exports = class UsersGET extends Route {
	constructor() {
		super('admin/auth/me', 'get');
	}

	async run(req, res, user) {
		try {
			return res.json({
				message: 'User auth',
			});
		} catch (error) {
			return super.error(res, error);
		}

	}
}
