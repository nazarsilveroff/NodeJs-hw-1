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
    const response = await fs.readFile(contactsPath, (err) => {
      if (err) return console.log(err.message);
    });
    let contacts = JSON.parse(response);
    return console.table(contacts);
  } catch (err) {
    console.error(err.message);
  }
}
// TODO: поиск по id
async function getContactById(contactId) {
try {
    const response = await fs.readFile(contactsPath, (err) => {
      if (err) return console.log(err.message);
    });
    let contacts = JSON.parse(response);
    const contact = contacts.find(({id}) => id ===contactId)
    return console.table(contact);
  } catch (err) {
    console.error(err.message);
  }
}
// TODO: удаление по id
async function removeContact(contactId) {
try {
    const response = await fs.readFile(contactsPath, (err) => {
      if (err) return console.log(err.message);
    });
    let contacts = JSON.parse(response);
    const deleteContact = contacts.filter(({ id }) => id !== contactId)
    return console.table(deleteContact);
  } catch (err) {
    console.error(err.message);
  }
}
// TODO: добавление в файл
async function addContact(name, email, phone) {
try {
    const response = await fs.readFile(contactsPath, (err) => {
      if (err) return console.log(err.message);
    });
    let contacts = JSON.parse(response);
            contacts.push({
            id: getRandomInt(),
            name: name,
            email: email,
            phone: phone,
    });
    return console.table(contacts);
  } catch (err) {
    console.error(err.message);
  }
}