const contactListElement = document.getElementById("contact-list");
const addButtonElement = document.getElementById("btn-add");
const searchButtonElement = document.getElementById("search-button");
const deleteButtonElement = document.getElementById("delete-button");
const searchInputElement = document.getElementById("search-input");
const nameInputElement = document.getElementById("input-name");
const phoneInputElement = document.getElementById("input-phone");

function renderContactList(contactsData) {
  contactsData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const contactsListHtml = contactsData.map((contact) => {
    return `
    <div class="card my-2">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div class="fw-bold">${contact.name}</div>
        <div class="fw-bold">${contact.phone}</div>
      </div>
    </div>
  `;
  });

  contactListElement.innerHTML = contactsListHtml.join("");
}

function addContact() {
  if (!nameInputElement.value.trim()) {
    alert("Please enter name");
    return;
  }
  if (!phoneInputElement.value.trim()) {
    alert("Please enter phone number");
    return;
  }

  const contact = {
    name: nameInputElement.value.trim(),
    phone: phoneInputElement.value.trim(),
  };

  contacts.push(contact);
  renderContactList(contacts);

  nameInputElement.value = "";
  phoneInputElement.value = "";
}

function searchContacts() {
  const searchString = searchInputElement.value.toLocaleLowerCase();

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLocaleLowerCase().includes(searchString) ||
      contact.phone.toLocaleLowerCase().includes(searchString)
    );
  });

  renderContactList(filteredContacts);
}

function removeDuplicate() {
  let contactMap = contacts.reduce((preValue, contact) => {
    if (!preValue[contact.phone]) {
      preValue[contact.phone] = contact;
    }

    return preValue;
  }, {});

  contacts = Object.keys(contactMap).map((key) => {
    return contactMap[key];
  });

  renderContactList(contacts);
}

let contacts = [
  {
    name: "John",
    phone: "0772474747",
  },
];

function main() {
  renderContactList(contacts);

  addButtonElement.addEventListener("click", addContact);
  searchButtonElement.addEventListener("click", searchContacts);
  deleteButtonElement.addEventListener("click", removeDuplicate);
}

main();
