const { ApolloServer } = require('apollo-server-lambda');
const { ApolloGateway, IntrospectAndCompose } = require('@apollo/gateway');

// Initialize an ApolloGateway instance and pass it
// the supergraph schema
const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: 'products', url: 'REPLACE' },
        { name: 'reviews', url: 'REPLACE' }
      ]
    })
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,
});

exports.gatewayHandler = server.createHandler();

