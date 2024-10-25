db.getSiblingDB('admin').auth(
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD
);
db.createUser({
    user: process.env.MONGO_USER,
    pwd: process.env.MONGO_PASSWORD,
    roles: [{"role":"readWrite", db: 'default'}],
});
db.createCollection('users');
db.users.insertMany([
{
    "firstName": "Perry",
    "lastName": "Trinier"
},
{
    "firstName": "Michdowelle",
    "lastName": "Trinier"
}
])