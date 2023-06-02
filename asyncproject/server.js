const express = require('express');
const app = express();
const PORT = 8080;
// const graphql = require('graphql');
// const  { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList}  = graphql
const { graphqlHTTP} = require('express-graphql');
const schema = require('./Schemas')

//this user went to /Schemas/index.js:
// const user = [
//     {id:1, name:'Keven', email: '123@gmail.com', phone:'123456789'},
//     {id:2, name:'Anna', email: '456@gmail.com', phone:'626999666'},
//     {id:3, name:'Kai', email: '789@gmail.com', phone:'987654321'},
// ]


//this UserType went to /Schemas/TypesDefs/UserType.js:
// const UserType = new GraphQLObjectType({
//     name:"User",
//     fields: () => ({
//         id: {type: GraphQLInt},
//         name:{type: GraphQLString},
//         email: {type: GraphQLString},
//         phone: { type: GraphQLInt}
//     })
// })

//this RootQuery went to /Schemas/index.js:
// const RootQuery = new GraphQLObjectType({
//     name:"RootQueryType",
//     fields:{
//         getAllUsers:{
//             type: new GraphQLList(UserType),
//             args: { id: { type: GraphQLInt}},
//             resolve(parent,args) {
//                 return user           //when it is real database, here should be something like User.findAll or User.findByPk   something like that.
//             }
//         }
//     }
// })

//this Mutation went to /Schemas/index.js:
// const Mutation = new GraphQLObjectType({
//     name:'Mutation',
//     fields:{
//         createUser:{
//             type: UserType,
//             args: {
//                 id:{type:GraphQLInt},   // usually we deal with real database, we dont need an id here. since we using dummy data, we need pass in an ID for it.
//                 name: {type:GraphQLString},
//                 email: {type: GraphQLString},
//                 phone: { type: GraphQLInt}
//             },
//             resolve(parent,args){
//                user.push({id:user.length+1,name:args.name, email: args.email, phone: args.phone})  //when it is real database, here usually be like User.create({name:NAME,email:EMAIL, phone:PHONE})
//                 return args
//             }
            
//         }
//     }
// })

// this schema went to /Schemas/index.js:
// const schema = new GraphQLSchema({
//     query: RootQuery,
//     mutation: Mutation
// })

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(PORT, ()=> {
    console.log(`Server is running @ http://localhost:${PORT}`)
})