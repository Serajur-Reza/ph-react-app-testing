import "./App.css";
import Counter from "./components/Counter/Counter";
import FormComponent from "./components/Form/Form";
import FruitList from "./components/FruitList/FruitList";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import UserEvent from "./components/UserEvent/UserEvent";
import Users from "./components/Users/User";
import UserTable from "./components/UsersTable/UsersTable";

const fruits = ["apple", "banana", "orange", "mango", "pineapple"];

export const users = [
  { id: 1, name: "John", age: 32 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 43 },
];

function App() {
  return (
    <div>
      <h1 className="text-center text-blue-500 text-2xl my-5">Hello World</h1>
      {/* <PrimaryButton></PrimaryButton>
      <PrimaryButton actionType="Delete"></PrimaryButton>
      <Users />
      <FruitList fruits={fruits} /> */}

      {/* <UserTable users={users} /> */}
      {/* <UserEvent /> */}

      {/* <FormComponent
        onSubmit={(data) => {
          console.log(data);
        }}
      /> */}
      <Counter />
    </div>
  );
}

export default App;
