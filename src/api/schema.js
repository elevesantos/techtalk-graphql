const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const userAttribs = `
id: ID
name: String
email: String
password: String`

const typeDefs = `
    type User {
        ${ userAttribs }
    }

    type Query {
        user(id: ID!): User
        allUsers: [User]
    }

    input UserInput {
        ${ userAttribs }
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`

module.exports = makeExecutableSchema({typeDefs, resolvers})