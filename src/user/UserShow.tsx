import { EmailField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="address" />
            <EmailField source="email" />
            <TextField source="role" />
        </SimpleShowLayout>
    </Show>
);