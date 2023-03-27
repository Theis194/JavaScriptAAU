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
        await getEntry(client, "Black Panther");
        /* await createEntry(client, 
            {
                name: "What ever!"
            });
        await createMultipleEntrys(client, [
            {
                name: "Captain America: civil war"
            },
            {
                name : "Black Panther"
            },
            {
                name : "Black Panther: Wakanda for Ever"
            }
        ]); */
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

// This function takes a MongoClient and prints out a list of all the databases on that client.
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

// This function takes a MongoClient and a newEntry and inserts the entry in to a pre specified collection
async function createEntry(client, newEntry) {
    const result = await client.db("theis").collection("movie").insertOne(newEntry);
    console.log(`New entry created with the following id: ${result.insertedId}`);
}

// This function takes a MongoClient and an array of newEntrys and inserts the entrys in to a pre specified collection
async function createMultipleEntrys(client, newEntrys) {
    const result = await client.db("theis").collection("movie").insertMany(newEntrys);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds); 
}

// This function takes a Mongoclient and a nameOfEntry and prints out the entry found 
// this can be expanded by returning the entry found
async function getEntry(client, nameOfEntry) {
    const result = await client.db("theis").collection("movie").findOne({name: nameOfEntry});

    if (result) {
        console.log(`Found a entry in the collection with the name '${nameOfEntry}':`);
        console.log(result);
    } else {
        console.log(`No entrys found with the name '${nameOfEntry}'`);
    }
}