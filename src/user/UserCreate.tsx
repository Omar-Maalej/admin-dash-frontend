import { Create, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="address" />
            <TextInput type='email' source="email" />
            <SelectInput choices={["admin", "user"]} source="role" label="Role" />  
        </SimpleForm>
    </Create>
);