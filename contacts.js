// contacts.js
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}
const path = require('path');
const fs = require('fs').promises
const contactsPath = path.join(__dirname, './db/contacts.json');

function getRandomInt() {
  return Math.floor(Math.random()*100);
}

// TODO: чтение файла
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}
// TODO: поиск по id
async function getContactById(contactId) {
try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    const contact = result.find(({id}) => id ===contactId)
    console.table(contact);
} catch (error) {
    console.log(error);
}
}

async function removeContact(contactId) {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    const deleteContact = result.filter(({ id }) => id !== contactId)
    console.table(deleteContact);
}

async function addContact(name, email, phone) {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
        result.push({
            id: getRandomInt(),
            name: name,
            email: email,
            phone: phone,
    });
    console.table(result);
}