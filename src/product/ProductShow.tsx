import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="price" />
        </SimpleShowLayout>
    </Show>
);