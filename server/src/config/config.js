module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || 'busy-brisbane',
		user: process.env.DB_USER || 'postgres',
		password: process.env.DB_PASS || 'password',
		options: {
			dialect: process.env.DIALECT || 'postgres',
			host: process.env.HOST || 'localhost',
			operatorsAliases: false
		}
	},

	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
};
