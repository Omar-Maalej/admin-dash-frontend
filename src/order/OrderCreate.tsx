import {
  Create,
  Edit,
  NumberInput,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { useNotify, useRedirect } from 'react-admin';
import { dataProvider } from '../dataProvider';

export const OrderCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();


  const handleSubmit = async (data: any) => {
    console.log(data);
    const transformedData = {
      total: data.total,
      userId: data.user.id, 
      productIds: data.products.filter((product : any) => typeof product === 'number'),
    };
    console.log(transformedData);
    try {
      await dataProvider.create('order', { data: transformedData});
      redirect('/order');
      notify('Order updated successfully', { type: 'info' });
    } catch (error) {
      notify('Error updating order', {type: 'warning' });
    }
  };

  return (
    <Create>
      <SimpleForm onSubmit={handleSubmit}>
        <NumberInput source="total" />

        <ReferenceInput source="user.id" reference="user" label="User" >
          <SelectInput optionText="email" />
        </ReferenceInput>

        <ReferenceArrayInput source="products" reference="product" label="Products">
          <SelectArrayInput optionText="name" optionValue="id" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
