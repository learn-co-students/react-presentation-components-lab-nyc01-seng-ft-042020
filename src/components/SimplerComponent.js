// Code SimplerComponent Here

import { ProgressPlugin } from "webpack";

export default function SimplerComponent() {

    const handleClick = () => {
        console.log("hi!")
    }

    return(<div onClick={handleClick}>I am just happy</div>)
}