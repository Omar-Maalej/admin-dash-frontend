import { List, Datagrid, TextField } from 'react-admin';

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="firstName" label="First Name" />
      <TextField source="lastName" label="Last Name" />
      <TextField source="address" label="Address" />
      <TextField source="email" label="Email" />
      <TextField source="role" label="Role" />  
    </Datagrid>
  </List>
);