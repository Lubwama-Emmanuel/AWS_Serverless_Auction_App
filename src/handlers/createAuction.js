const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const createError = require("http-errors");
const middy = require("@middy/core")
const httpEventNormalizer = require("@middy/http-event-normalizer")
const httpJsonBodyParser = require("@middy/http-json-body-parser")
const httpErrorHandler = require("@middy/http-error-handler")
const dynamoDB = new AWS.DynamoDB.DocumentClient();


module.exports.createAuction = async(event) => {
  return{
    statusCode: 201,
    body: JSON.stringify({message: 'Yooooo'})
  }
}
// createAuction = async (event) => {
//   try {
//     const { title } = event.body
//     const now = new Date();

//     const auction = {
//       id: v4(),
//       title,
//       status: "OPEN",
//       createdAt: now.toISOString()
//     }

//     await dynamoDB.put({
//       TableName: 'AuctionsTable',
//       Item: auction
//     }).promise()


//     return {
//       statusCode: 201,
//       body: JSON.stringify(auction)
//     };

//   } catch (err) {
//     console.error("error", err)
//     throw new createError(500, "Internal server down")
//   }
// };

// module.exports = middy(createAuction).use(httpErrorHandler).use(httpEventNormalizer).use(httpJsonBodyParser)