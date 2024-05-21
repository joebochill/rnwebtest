import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Avatar, Text } from "react-native-paper";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerNavGroup,
  DrawerNavItem,
  DrawerSubheader,
  EmptyState,
  InfoListItem,
  ScoreCard,
  UserMenu,
} from "@brightlayer-ui/react-native-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Drawer
      >
        <DrawerHeader
          title={"Drawer Titleg"}
          subtitle={"Drawer Subtitleg"}
          icon={{name: 'menu'}}
        />
        <DrawerSubheader>
          <Text>Hello Subheader</Text>
          </DrawerSubheader>
        <DrawerBody>
          {/* Using 'items' prop */}
          <DrawerNavGroup
            title={"Navigation Group"}
            items={[
              {
                title: "Identity Management",
                itemID: "g1i1",
              },
            ]}
          />
          {/* Using children */}
          <DrawerNavGroup title={"Navigation Group"}>
            <DrawerNavItem itemID={"item1"} title={"Item 1"} />
            <DrawerNavItem itemID={"item2"} title={"Item 2"}>
              <DrawerNavItem itemID={"item3"} title={"Item 3"} />
            </DrawerNavItem>
          </DrawerNavGroup>
        </DrawerBody>
        <DrawerFooter><Text>Footer</Text></DrawerFooter>
      </Drawer>
      <UserMenu avatar={<Avatar.Text label="JB"/>} menuItems={[
        { title: 'Change Password', icon: { name: 'vpn-key' } },
        { title: 'Preferences', icon: { name: 'settings' } },
        { title: 'Log Out', icon: { name: 'exit-to-app' } },
      ]}></UserMenu>
      {/* <Text>Hello</Text> */}
      <div style={{ height: 500, width: 500, backgroundColor: "red" }}>
        <Text>Hello World</Text>
        <EmptyState
          title={"Empty"}
          description={"Descriptive text baby"}
          icon={{ family: "material", name: "settings" }}
        ></EmptyState>
        <ScoreCard headerTitle={"Hello"}>
          <InfoListItem
            title={"InfoListItem"}
            subtitle={"This is a subtitle"}
            info={"This is informative supplemental text"}
            icon={{ name: "person" }}
          />
        </ScoreCard>
        <Avatar.Text label="JB"/>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
