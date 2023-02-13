import { useDispatch } from 'react-redux';
import { Button } from '../Form/FormStyled.styled';
import { deleteContact } from 'redux/contacts/operations';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>
          {name}: {number}
        </span>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default ContactItem;
