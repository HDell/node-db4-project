//import
const server = require('./server.js');
//port+listen
const port = process.env.PORT || 5000;
server.listen(port, () => {
   console.log(`Server listening on Port ${port}`);
});