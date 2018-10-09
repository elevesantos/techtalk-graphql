const db = require('../config/database')

module.exports = {
    Query: {
        async user(_, { id }) {
            return await db('users').where({ id }).first()
        },
        async allUsers() {
            return await db('users').select('*')
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            const result  = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })

            const id = result[0]
            return await db('users').where({ id }).first()

        },

        async updateUser(_, { id, input }) {
            const result = await db('users').update({
                name: input.name,
                email: input.email,
                password: input.password
            }).where({ id });

            return await db('users').where({ id }).first()

        },

        async dropUser(_, { id }) {
            const row = await db('users').where({ id }).first();
            await db('users').delete().where( { id } )
            return row
        }
    }
}