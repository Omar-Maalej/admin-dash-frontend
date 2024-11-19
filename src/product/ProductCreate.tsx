import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="price" />
        </SimpleForm>
    </Create>
);