import { Edit, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="address" />
            <TextInput type = 'email' source="email" />
            <SelectInput choices={["admin", "user"]} source="role" label="Role" />  
        </SimpleForm>
    </Edit>
);