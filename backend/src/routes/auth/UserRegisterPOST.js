const Route = require('../../models/Route');

module.exports = class UserRegisterPOST extends Route {
	constructor() {
		super('/auth/admin/register', 'post');
	}

	async run(req, res) {
		const { username, password } = req.body;
		if (!username) return res.status(400).json({ message: 'username is required!' });
		if (!password) return res.status(400).json({ message: 'password is required!' });

		try {
			const exists = await this.utils.users.getUser({ username });
			if (exists) return res.status(400).json({ message: 'A user already exists with this username' });

			await this.utils.users.createUser({ username, password });

			return res.json({ message: 'User successfully registered' });
		} catch (error) {
			return super.error(res, error);
		}
	}
};
