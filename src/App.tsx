import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserList } from "./user/UserList";
import { UserShow } from "./user/UserShow";
import { UserEdit } from "./user/UserEdit";
import { UserCreate } from "./user/UserCreate";
import authProvider from "./auth/AuthProvider";
import LoginPage from "./auth/LoginPage";
import { ProductList } from "./product/ProductList";
import { ProductShow } from "./product/ProductShow";
import { ProductEdit } from "./product/ProductEdit";
import { ProductCreate } from "./product/ProductCreate";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage}>
    <Resource name="user" list={UserList} edit={UserEdit} show={UserShow} create={UserCreate} />
    <Resource name="product" list={ProductList} edit={ProductEdit} show={ProductShow} create = {ProductCreate}/>
    <Resource name="order" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
  </Admin>
);
