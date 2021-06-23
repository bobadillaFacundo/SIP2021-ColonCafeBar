const assert = require('chai').assert;
const config = require('../../../backend/knexfile');
const knex = require('knex')(config);

const Server = require('../../../backend/src/Server');
const server = new Server();

let category = null;

describe('Category-Test', () => {
	before(async () => 
	{
		// initialize data base and connections
		await server.initializeDatabase();
		await server.initializeSequelize();
		await server.initializeControllers();
	})

	it('Create a category', async () => 
	{
		const createdCategory = await server.utils.category.createdCategory({name:"cerverza" }); 
		assert.exists(createdCategory);	
		category = createdCategory;
	});

	it('Update a category isActive', async () => 
	{
		await server.utils.category.updateCategory({  categoryId: category.id, name: "cervezaArtesanal"});
		const updatedCategory = await server.utils.category.getCategory(category.id);
		assert.equal(String(updatedCategory.name), "cervezaArtesanal");
		category = updatedCategory;
	});

	it('Delete the category logicamnete', async () => 
	{
		let result = await server.utils.category.deleteCategory(category.id);
		assert.equal(Boolean(result), true);
	});
	
	it('Delete the category', async () => 
	{
		// para evitar generar basura, lo borramos de la db
		await server.db('categories').where({ categoryId: category.id }).del();
	});

});	

