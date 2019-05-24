const functions = require("firebase-functions");
const admin = require("firebase-admin");

const userQueriesModule = require('./user_queries');
const freelancersModule = require('./freelancers');
admin.initializeApp();

exports.createUserQueries = functions.firestore
  .document("user_queries/{id}")
  .onCreate(userQueriesModule.handler);


exports.freelancersQueries = functions.firestore
  .document("freelancers/{id}")
  .onCreate(freelancersModule.handler);


