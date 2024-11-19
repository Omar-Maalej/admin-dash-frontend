import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="address" />
            <TextInput source="email" />
            <TextInput source="role" />
        </SimpleForm>
    </Edit>
);