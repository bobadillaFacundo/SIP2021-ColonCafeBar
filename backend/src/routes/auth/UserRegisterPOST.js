const Route = require('../../models/Route');

module.exports = class UserRegisterPOST extends Route {
	constructor() {
		super('/admin/auth/register', 'post', { isPublic: false });
	}

	async run(req, res, user) {
		const { name, username, password } = req.body;
		if (!name) return res.status(400).json({ message: 'name is required!' });
		if (!username) return res.status(400).json({ message: 'username is required!' });
		if (!password) return res.status(400).json({ message: 'password is required!' });
		try {
			const exists = await this.utils.users.getUser({ username });
			if (exists) return res.status(400).json({ message: 'A user already exists with this username' });

			const hasPermission = await this.utils.roles.checkUserPermission(user.id, 'users');
			if (!hasPermission) return res.status(403).json({ message: 'You dont hace access to this resource' });

			await this.utils.users.createUser({ username, password, name });

			return res.json({ message: 'User successfully registered' });
		} catch (error) {
			return super.error(res, error);
		}
	}
};
