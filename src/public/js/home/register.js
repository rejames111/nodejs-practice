"use strict"

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주세요.");
    // if (psword !== confirmPsword) {
    //     return alert("비밀번호를 다시 입력해주세요.");
    // }

    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    }; 
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("Register Failed");
        });

}

