
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

const categoryData = [
    {
        "_id": mongoose.Types.ObjectId("5cbca2b3d1e5999796c4edf5"),
        "title": "Break Fast",
        "name": "Break Fast",
        "description": "Break Fast category",
        "active": true,
    },
    {
        "_id": mongoose.Types.ObjectId("5cbca2ccd1e5999796c4edf6"),
        "title": "Lunch",
        "name": "Lunch",
        "description": "Lunch category",
        "active": true,
    },
    {
        "_id": mongoose.Types.ObjectId("5cbca2e4d1e5999796c4edf7"),
        "title": "Dinner",
        "name": "Dinner",
        "description": "Dinner category",
        "active": true,
    },
];

(async () => {
    const url = "mongodb://localhost:27017";
    let connection;
    try {
        connection = await MongoClient.connect(url)
        const db = await connection.db('shop');
        await db.collection('categories').insertMany(categoryData);
        console.log('categories inserted successfully!');
        connection.close();
    } catch (err) {
        console.log('err', err.message);
        connection.close();
    }
})();