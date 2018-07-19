'use strict';

var assert = require("assert");

function add(x, y){
    
    return x + y;
}

exports.handler = function(event, context, callback){

    var x = Number(event['pathParameters']['x']);

    var y = Number(event['pathParameters']['y']);
    
    assert(x, 'X was not provided');
    
    assert(y, 'Y was not provided');

    var sum = add(x, y);

    var response = {

        statusCode: 200,

        body: JSON.stringify({'result': sum}),

        headers: {

            'Content-Type': 'application/json',

            'Access-Control-Allow-Origin': '*'
        }
    }

    callback(null, response);
}