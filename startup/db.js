const mongoose = require('mongoose');
const collection = 'movieDatabase';

async function main() {
    await mongoose
    .connect(`mongodb+srv://ilya:0547950918@cluster0.ooxg3.mongodb.net/${collection}?retryWrites=true&w=majority`)
}

main()
.then(console.log('connected to DB'))
.catch(err => console.log(err) )

module.exports = main;