// require('dotenv').config();
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const generateUniqueCodes = require('./src/utils/generateUniqueCodes');
const uploadToMongoDB = require('./src/db/mongodb');
const tickets = [];

fs.createReadStream(path.join(__dirname, './data/ticketsTest.csv'))
  .pipe(csv())
  .on('data', (row) => {
    tickets.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    const uniqueCodes = generateUniqueCodes(tickets.length);
    const sortedTickets = tickets.map((ticket, index) => ({ ...ticket, code: uniqueCodes[index] })).sort((a, b) => a.code.localeCompare(b.code));
    uploadToMongoDB(sortedTickets);
  });
