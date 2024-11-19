import { Create, SimpleForm, TextInput } from 'react-admin';

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="address" />
            <TextInput source="email" />
            <TextInput source="role" />
        </SimpleForm>
    </Create>
);