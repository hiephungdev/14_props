// childrent props là một cách để truyền dữ liệu từ component cha sang component con trong React.
//  Chúng cho phép bạn tạo ra các component linh hoạt và tái sử dụng được,
// vì bạn có thể thay đổi dữ liệu mà component nhận được mà không cần phải thay đổi
// chính component đó.
// export default function TabButton(children) {
//     return (
//         <li>
//             <button>{children}</button>
//        </li>
//     );
// }

export default function TabButton({ batKiTenNao }) {
    return (
        <>
            <li><button>{batKiTenNao}</button></li>
        </>
    );
}
