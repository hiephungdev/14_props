import "./App.css";
import { myData } from "../data.js";
import MainContent from "./conponents/MainContent/MainContent.jsx";

// thực hiện học và nghiên cứu về props
// props là một cách để truyền dữ liệu từ component cha sang component con trong React. Chúng cho phép bạn tạo ra các component linh hoạt và tái sử dụng được,
// vì bạn có thể thay đổi dữ liệu mà component nhận được mà không cần phải thay đổi chính component đó.

import Header from "./conponents/Header/Headers.jsx";
import TabButton from "./conponents/MainContent/TabButton.jsx";
import HelloButton from "./conponents/MainContent/HelloButton.jsx";
import { useState } from "react";

// function MainContent(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.alt} />
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// sử dụng destructuring để lấy dữ liệu từ props

// các tối ứu hóa code hơn

function App() {
  const [selectedTab, setSelectedTab] = useState("trang-chu");
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/*
            Cách 1 :
            <MainContent
              image="../src/assets/img/my_logo.png"
              alt="Image 1"
              title="Concept 1"
              description="Description for Concept 1"
            /> */}

            {/*
            Cach 2 : sử dụng data.js để truyền dữ liệu vào component MainContent
            1. import data.js vào App.jsx
            2. sử dụng myData để truyền dữ liệu vào component MainContent
            3. sử dụng map để lặp qua myData và truyền dữ liệu vào component MainContent
            4. sử dụng key để tránh lỗi khi lặp qua myData
            5. sử dụng destructuring để lấy dữ liệu từ myData
            6. sử dụng spread operator để truyền dữ liệu vào component MainContent
            7. sử dụng defaultProps để đặt giá trị mặc định cho props
            8. sử dụng propTypes để kiểm tra kiểu dữ liệu của props
            9. sử dụng memo để tối ưu hóa hiệu suất của component MainContent
            10. sử dụng useCallback để tối ưu hóa hiệu suất của component MainContent
            11. sử dụng useMemo để tối ưu hóa hiệu suất của component MainContent
            12. sử dụng useEffect để tối ưu hóa hiệu suất của component MainContent
            13. sử dụng useState để tối ưu hóa hiệu suất của component MainContent
            14. sử dụng useReducer để tối ưu hóa hiệu suất của component MainContent
            15. sử dụng useContext để tối ưu hóa hiệu suất của component MainContent
            16. sử dụng useRef để tối ưu hóa hiệu suất của component MainContent
            17. sử dụng useLayoutEffect để tối ưu hóa hiệu suất của component MainContent
            18. sử dụng useImperativeHandle để tối ưu hóa hiệu suất của component MainContent
            19. sử dụng forwardRef để tối ưu hóa hiệu suất của component MainContent
            20. sử dụng lazy và Suspense để tối ưu hóa hiệu suất của component MainContent
            21. sử dụng ErrorBoundary để tối ưu hóa hiệu suất của component MainContent
            22. sử dụng React.memo để tối ưu hóa hiệu suất của component MainContent
            23. sử dụng React.lazy để tối ưu hóa hiệu suất của component MainContent
            24. sử dụng React.Suspense để tối ưu hóa hiệu suất của component MainContent
            25. sử dụng React.forwardRef để tối ưu hóa hiệu suất của component MainContent
            26. sử dụng React.useCallback để tối ưu hóa hiệu suất của component MainContent
            27. sử dụng React.useMemo để tối ưu hóa hiệu suất của component MainContent
            28. sử dụng React.useEffect để tối ưu hóa hiệu suất của component MainContent
            29. sử dụng React.useState để tối ưu hóa hiệu suất của component MainContent
            30. sử dụng React.useReducer để tối ưu hóa hiệu suất của component MainContent
            31. sử dụng React.useContext để tối ưu hóa hiệu suất của component MainContent
            32. sử dụng React.useRef để tối ưu hóa hiệu suất của component MainContent
            33. sử dụng React.useLayoutEffect để tối ưu hóa hiệu suất của component MainContent
            34. sử dụng React.useImperativeHandle để tối ưu hóa hiệu suất của component MainContent
            35. sử dụng React.forwardRef để tối ưu hóa hiệu suất của component MainContent
            36. sử dụng React.lazy và Suspense để tối ưu hóa hiệu suất của component MainContent
            37. sử dụng React.ErrorBoundary để tối ưu hóa hiệu suất của component MainContent
            38. sử dụng React.memo để tối ưu hóa hiệu suất của component MainContent
            39. sử dụng React.lazy để tối ưu hóa hiệu suất của component MainContent
            40. sử dụng React.Suspense để tối ưu hóa hiệu suất của component MainContent
            41. sử dụng React.forwardRef để tối ưu hóa hiệu suất của component MainContent
            42. sử dụng React.useCallback để tối ưu hóa hiệu suất của component MainContent
            43. sử dụng React.useMemo để tối ưu hóa hiệu suất của component MainContent
            44. sử dụng React.useEffect để tối ưu hóa hiệu suất của component MainContent
            45. sử dụng React.useState để tối ưu hóa hiệu suất của component MainContent
            46. sử dụng React.useReducer để tối ưu hóa hiệu suất của component MainContent
            47. sử dụng React.useContext để tối ưu hóa hiệu suất của component MainContent
            48. sử dụng React.useRef để tối ưu hóa hiệu suất của component MainContent
            49. sử dụng React.useLayoutEffect để tối ưu hóa hiệu suất của component MainContent
            50. sử dụng React.useImperativeHandle để tối ưu hóa hiệu suất của component MainContent
            51. sử dụng React.forwardRef để tối ưu hóa hiệu suất của component MainContent
            52. sử dụng React.lazy và Suspense để tối ưu hóa hiệu suất của component MainContent
            53. sử dụng React.ErrorBoundary để tối ưu hóa hiệu suất của component MainContent
            54. sử dụng React.memo để tối ưu hóa hiệu suất của component MainContent
            55. sử dụng React.lazy để tối ưu hóa hiệu suất của component MainContent
            56. sử dụng React.Suspense để tối ưu hóa hiệu suất của component MainContent
            57. sử dụng React.forwardRef để tối ưu hóa hiệu suất của component MainContent
            58. sử dụng React.useCallback để tối ưu hóa hiệu suất của component MainContent
            59. sử dụng React.useMemo để tối ưu hóa hiệu suất của component MainContent
            60. sử dụng React.useEffect để tối ưu hóa hiệu suất của component MainContent
            61. sử dụng React.useState để tối ưu hóa hiệu suất của component MainContent
            62. sử dụng React
            <MainContent
              image={myData[0].image}
              alt={myData[0].alt}
              title={myData[0].title}
              description={myData[0].description}
            /> */}

            <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              title="Trang chủ"
              isSelect={selectedTab === "trang-chu"}
              onSeLect={() => setSelectedTab("trang-chu")}
            />
            <TabButton
              title="Sản phẩm"
              isSelect={selectedTab === "san-pham"}
              onSeLect={() => setSelectedTab("san-pham")}
            />
            <TabButton
              title="Liên hệ"
              isSelect={selectedTab === "lien-he"}
              onSeLect={() => setSelectedTab("lien-he")}
            />
            <HelloButton />
          </menu>
          {selectedTab === "trang-chu" && (
            <div>
              <h3>Giới thiệu</h3>
              <p>Chào mừng bạn đến với trang học lập trình.</p>
            </div>
          )}

          {selectedTab === "san-pham" && (
            <div>
              <h3>Khóa học</h3>
              <ul>
                <li>React cơ bản</li>
                <li>JavaScript nâng cao</li>
                <li>Thiết kế giao diện web</li>
              </ul>
            </div>
          )}

          {selectedTab === "lien-he" && (
            <div>
              <h3>Liên hệ</h3>
              <p>Email: hello@example.com</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
