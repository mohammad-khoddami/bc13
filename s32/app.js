async function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    console.log(username.value, password.value);

    try {
        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // multipart/form-data
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
        });
        const result = await response.json();
        localStorage.setItem("token", JSON.stringify(result.accessToken));
        printUser(result);
    } catch (error) {
        console.log(error);
    }
}

function printUser(user) {
    const userInfo = `<h2>${user.firstName} ${user.lastName}</h2>`;
    const userDiv = document.getElementById("user");
    userDiv.innerHTML = userInfo;

    const loginForm = document.getElementById("login");
    loginForm.innerHTML = "";
}

async function checkLogin() {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
        try {
            const response = await fetch("https://dummyjson.com/auth/me", {
                method: "Get",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json();
            if (result.ok) {
                printUser(result);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
checkLogin();
