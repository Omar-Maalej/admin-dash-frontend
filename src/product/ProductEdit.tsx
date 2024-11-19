import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="price" />
        </SimpleForm>
    </Edit>
);