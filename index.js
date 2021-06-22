const argv = require('yargs').argv;
const {listContacts,
    getContactById,
    removeContact,
    addContact} = require('./contacts');
// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
 case 'list':
    listContacts()
      break;
      case 'get':
    getContactById(id)
       console.log('id',id)
      break;
      case 'add':
    addContact(name, email, phone)
     console.log( `name-${name}, email-${email}, phone-${phone} was added`)
      break;
      case 'remove':
    removeContact(id)
      console.log('id',id, 'was removed')
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
invokeAction(argv);