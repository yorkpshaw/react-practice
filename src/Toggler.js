import React, { useState } from "react";
import useToggle from "./Hooks/UseToggle";

function Toggler() {

    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isExcited, toggleIsExcited] = useToggle(false);

    return (
        <div>
        <h1 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h1>
        <h1 onClick={toggleIsExcited}>{isExcited ? "!!!" : "???"}</h1>
        </div>
    )
}
export default Toggler;


// function Toggler() {
//     const [isHappy, setIsHappy] = useState(true)
//     return (
//         <h1 onClick = {() => setIsHappy(!isHappy)}>{isHappy ? ":)" : ":("}</h1>
//     )
// }
// export default Toggler;


// function Toggler() {
//     const [isHappy, setIsHappy] = useState(true)
//     const [isExcited, setIsExcited] = useState(false)
//     const toggleHappy = () => {
//         setIsHappy(!isHappy);
//     }
//     const toggleExcited = () => {
//         setIsExcited(!isExcited);
//     }

//     return (
//         <div>
//         <h1 onClick={toggleHappy}>{isHappy ? ":)" : ":("}</h1>
//         <h1 onClick={toggleExcited}>{isExcited ? "!!!" : "???"}</h1>
//         </div>
//     )
// }
// export default Toggler;
