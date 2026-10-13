import React, { useState } from "react";

export default function Login() {
    const [user, setUser] = useState({
        firstName: "mohammad",
        lastName: "khoddami",
        isLogin: false,
    });

    function toggleLogin() {
        setUser({ ...user, isLogin: !user.isLogin });
    }

    // function handleLogin() {
    //     setUser({ ...user, isLogin: true });
    // }
    // function handleLogout() {
    //     setUser({ ...user, isLogin: false });
    // }

    // if (user.isLogin) {
    //     return (
    //         <div>
    //             <h1>
    //                 Welcome {user.firstName} {user.lastName}
    //             </h1>
    //             <button className="border rounded-sm" onClick={handleLogout}>
    //                 Logout
    //             </button>
    //         </div>
    //     );
    // }
    // return (
    //     <div>
    //         <button className="border rounded-sm" onClick={handleLogin}>
    //             login
    //         </button>
    //     </div>
    // );

    const welcomeUser = user.isLogin && (
        <h1>
            Welcome {user.firstName} {user.lastName}
        </h1>
    );

    return (
        <div>
            {welcomeUser}
            <button className="border rounded-sm" onClick={toggleLogin}>
                {user.isLogin ? "logout" : "login"}
            </button>
        </div>
    );
}
