# Notes

### Taken by Tabish

* ADD SEARCH BAR TO Navbar
* SAME TO COMMUNITY FORUMS
* MAKE MIND MAP

### For Tabish by Tanmai

* Separated css and photos from ui logic.
* Typescript file extension for react is `.tsx`.
* Ejected the webpack config to add some self-configured typescript support so the list of depedencies will seem way too large but those are inherently used by react (basically ignore them).
* Added editorconfig and prettier for code formatting. Use `npm run lint` command to format the code.
* Renamed `photos` folder to `assets` because it will contain all the assets like images, videos, etc.
* Separated pages and components into different folders rather than subfolder to components.
* Add your imports separated like this please,
```ts
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "@pages/LandingPage";
import SignUp from "@pages/SignUp";
import SignIn from "@pages/SignIn";
import ServicesPage from "@pages/ServicesPage";
import CommunityForumsPage from "@pages/CommunityForumsPage";

import Navbar from "@components/Navbar";
import SidebarForums from "@components/SidebarForums";
import SearchBar from "@components/SearchBar";
import NewNavbar from "@components/NewNavbar";
import Card from "@components/Card";
import Gridbox from "@components/Gridbox";

import "@css/App.css";
```
See how similar imports are grouped up together and how they are separated from other imports.
* Added path aliases for imports. So instead of writing `import Navbar from "../../components/Navbar"` you can write `import Navbar from "@components/Navbar"`. Its a typescript feature and if you want to add more aliases you can add them in `tsconfig.json` file like this,
```json
{
    "paths": {
        "@app/*": ["src/*"],
        "@components/*": ["src/ui/components/*"],
        "@pages/*": ["src/ui/pages/*"],
        "@css/*": ["src/css/*"],
        "@assets/*": ["src/assets/*"],
        "@your-new-alias/*": ["path/to/your/new/alias/*"]
    }
}
```
* Typescript uses strict typing so create interfaces for all the props and states of components. This will ensure you can only pass the props that are defined in the interface and you can't pass any other props. This will also help you to know what props are required for a component and what are optional. For example,

```tsx
// Create a interface for props called IProps
// title is name of the prop and string is the type of the prop
// if you add `?` after the name of the prop then it will become optional and you can pass it or not pass it but without `?` it will become required and you will have to pass it
interface IProps {
    title: string;
    subtitle?: string; // For example `subtitle?: string` means subtitle is optional and `subtitle: string` means subtitle is required when you use this component
    doSomething?: (e?: MouseEvent) => string; // This is a function prop which takes an optional MouseEvent as a parameter and returns a string
    onHover?: () => void; // This is a function prop which takes nothing as a parameter and returns nothing
}

function Card(props: IProps) { // Use the interface here
    return (
        <div className="card" onClick={props.doSomething}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};
```


