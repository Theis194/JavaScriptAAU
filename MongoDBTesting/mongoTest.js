const firstNames = ['Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn'];
const lastNames = ['Smith', 'Johnson', 'Brown', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez'];

let users = [];

class user {
    constructor (fName, lName, age, gender) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.gender = gender;
    }
}

for (let i = 0; i < 10; i++) {
    let User = new user(firstNames[Math.floor(Math.random()*10)], lastNames[Math.floor(Math.random()*10)], Math.floor(Math.random()*50), Math.floor(Math.random()*2));

    users.push(User);
}

const {MongoClient} = require('mongodb');
//const url = "mongodb+srv://theis:kryp29t1@192.168.0.127/theis?retryWrites=true&w=majority";

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://theis:kryp29t1@192.168.0.127:27017/theis?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};