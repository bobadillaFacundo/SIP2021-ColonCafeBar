const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Category extends Model {
	}
	Category.init(
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

	return Category;
}