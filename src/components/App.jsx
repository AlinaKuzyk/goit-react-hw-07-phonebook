import { ContactForm, ContactList, Filter } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filter/filterSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts, getFilterState } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const checkedDupliteName = value => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === value.toLowerCase()
    );
  };

  const handleFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  const visibleFilter = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div
      style={{
        padding: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '400px',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm checkedDuplicate={checkedDupliteName} />

      <h2>Contacts</h2>
      <Filter onChange={handleFilter} />
      <ContactList contacts={visibleFilter} />
    </div>
  );
};

export default App;
