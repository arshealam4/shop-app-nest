
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

const productData = [

    {
        "_id": mongoose.Types.ObjectId("5e9eeceae2bd67233840c23a"),
        "title": "PRODUCT 1",
        "name": "product 1",
        "price": 40,
        "quantity": 40,
        "status": "in stock",
        "active": true,
        "categoryId": mongoose.Types.ObjectId("5cbca2b3d1e5999796c4edf5"),
        "imgURL": "https://picsum.photos/100/100"

    },
    {
        "_id": mongoose.Types.ObjectId("5e9eedf2e2bd67233840c23b"),
        "title": "PRODUCT 2",
        "name": "product 2",
        "price": 30,
        "quantity": 300,
        "status": "in stock",
        "active": true,
        "categoryId": mongoose.Types.ObjectId("5cbca2ccd1e5999796c4edf6"),
        "imgURL": "https://picsum.photos/100/100"

    },
    {
        "_id": mongoose.Types.ObjectId("5e9eee54e2bd67233840c23c"),
        "title": "PRODUCT 3",
        "name": "product 3",
        "price": 440,
        "quantity": 450,
        "status": "in stock",
        "active": true,
        "categoryId": mongoose.Types.ObjectId("5cbca2e4d1e5999796c4edf7"),
        "imgURL": "https://picsum.photos/100/100"

    },
    {
        "_id": mongoose.Types.ObjectId("5e9eeec0e2bd67233840c23d"),
        "title": "PRODUCT 4",
        "name": "product 4",
        "price": 40,
        "quantity": 40,
        "status": "in stock",
        "active": true,
        "categoryId": mongoose.Types.ObjectId("5cbca2e4d1e5999796c4edf7"),
        "imgURL": "https://picsum.photos/100/100"

    },
];

(async () => {
    const url = "mongodb://localhost:27017";
    let connection;
    try {
        connection = await MongoClient.connect(url)
        const db = await connection.db('shop');
        await db.collection('products').insertMany(productData);
        console.log('products inserted successfully!');
        connection.close();
    } catch (err) {
        console.log('err', err.message);
        connection.close();
    }
})();