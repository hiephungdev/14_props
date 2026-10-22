import { useState } from "react"

export default function HelloButton() {

    const [isVisible, setIsVisible] = useState(false);
    function handleClick() {
        setIsVisible((dangHien) => !dangHien);
    }

    return (
      <li>
            <button onClick={handleClick}>Xem thông tin</button>
            {isVisible && <p>Xin chào Hiệp Hưng</p>}
      </li>
    );
}
