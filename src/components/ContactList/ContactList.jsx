import ContactItem from 'components/ContactList/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, phone, id }) => (
        <ContactItem key={id} name={name} number={phone} id={id} />
      ))}
    </ul>
  );
};
export default ContactList;
