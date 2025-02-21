// function showOTP() {
//     let phoneNumber = document.getElementById("phoneNumber").value;
//     let phoneError = document.getElementById("phoneError");

//     let phoneRegex = /^\+\d{1,3}\s?\d{6,14}$/; 

//     if (!phoneRegex.test(phoneNumber)) {
//         phoneError.textContent = "Invalid phone number format!";
//         return;
//     } else {
//         phoneError.textContent = ""; 
//     }

//     document.getElementById("first").style.display = "none";
//     document.getElementById("second").style.display = "block";

//     document.querySelector(".otp-input").focus();
// }

// function goBackToStep1() {
//     document.getElementById("second").style.display = "none";
//     document.getElementById("first").style.display = "block";
// }

// function showSuccess() {
//     let otpInputs = document.querySelectorAll(".otp-input");
//     let otpCode = "";

//     otpInputs.forEach(input => {
//         otpCode += input.value.trim();
//     });

//     if (otpCode.length < 4) {
//         alert("Please enter a 4-digit OTP!");
//         return;
//     }

//     document.getElementById("second").style.display = "none";
//     document.getElementById("third").style.display = "block";
// }

// function goBackToStep2() {
//     document.getElementById("third").style.display = "none";
//     document.getElementById("second").style.display = "block";
// }

// document.addEventListener("DOMContentLoaded", () => {
//     let otpInputs = document.querySelectorAll(".otp-input");

//     otpInputs.forEach((input, index) => {
//         input.addEventListener("input", (event) => {
//             if (event.target.value.length === 1) {
//                 if (index < otpInputs.length - 1) {
//                     otpInputs[index + 1].focus();
//                 }
//             }
//         });

//         input.addEventListener("keydown", (event) => {
//             if (event.key === "Backspace" && !event.target.value) {
//                 if (index > 0) {
//                     otpInputs[index - 1].focus();
//                 }
//             }
//         });
//     });
// });



function showOTP() {
    let phoneNumber = document.getElementById("phoneNumber").value;
    let phoneError = document.getElementById("phoneError");

    let phoneRegex = /^\+\d{1,3}\s?\d{6,14}$/;

    if (!phoneRegex.test(phoneNumber)) {
        phoneError.textContent = "Invalid phone number format!";
        return;
    } else {
        phoneError.textContent = "";
    }

    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";

    document.querySelector(".otp-input").focus();
}

function goBackToStep1() {
    document.getElementById("second").style.display = "none";
    document.getElementById("first").style.display = "block";
}

function showSuccess() {
    let otpInputs = document.querySelectorAll(".otp-input");
    let otpCode = "";

    otpInputs.forEach(input => {
        otpCode += input.value.trim();
    });

    if (otpCode.length < 4) {
        alert("Please enter a 4-digit OTP!");
        return;
    }

    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
}

function goBackToStep2() {
    document.getElementById("third").style.display = "none";
    document.getElementById("second").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    let otpInputs = document.querySelectorAll(".otp-input");

    otpInputs.forEach((input, index) => {
        input.addEventListener("input", (event) => {
            event.target.value = event.target.value.replace(/\D/, ""); // Allow only numbers

            if (event.target.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && !event.target.value) {
                if (index > 0) {
                    otpInputs[index - 1].focus();
                }
            }
        });

        // Handle OTP paste
        input.addEventListener("paste", (event) => {
            event.preventDefault();
            let pastedData = (event.clipboardData || window.clipboardData).getData("text");
            pastedData = pastedData.replace(/\D/g, ""); // Remove non-numeric characters

            if (pastedData.length === otpInputs.length) {
                otpInputs.forEach((inp, i) => {
                    inp.value = pastedData[i] || "";
                });
                otpInputs[otpInputs.length - 1].focus();
            }
        });
    });
});
