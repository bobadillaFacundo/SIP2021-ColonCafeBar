const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Delivery extends Model {
	}
	Delivery.init(
		{
			name: {
				type: DataTypes.STRING,
				required: true
			},
			isActive: {
				type: DataTypes.BOOLEAN,
				required: false,
				defaultValue: true
			}
		},
		{
			sequelize,
			tableName: 'categories',
			modelName: 'Category',
			updatedAt: false
		}
	);

	return Delivery;
}