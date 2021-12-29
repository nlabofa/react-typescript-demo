import React from "react";
import { Private } from "./components/auth-component/Private";
import { Profile } from "./components/auth-component/Profile";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { CustomButton } from "./components/html/Button";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Toast } from "./components/TemplateLiteral/Toast";

function App() {
  const personName = {
    first: "Opeyemi",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      {/* <Greet name="Opeyemi" messageCount={0} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Header loads here</Heading>
      <Oscar>
        <Heading>Oscar goes to school</Heading>
      </Oscar>
      <Button handleClickWithEvent={(event) => console.log(event)} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid green", padding: 10 }} /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <List
        items={["Batman", "Superman", "Birdman"]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <Toast position="center" /> */}
      <CustomButton variant="primary">Button</CustomButton>
    </div>
  );
}

export default App;
