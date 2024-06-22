function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    // Debug logging
    console.log("Validating values:", values);

    if (values.email === "") {
        error.email = "Email shouldn't be empty!";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match!";
    }

    if (values.password === "") {
        error.password = "Password shouldn't be empty!";
    } else if (!password_pattern.test(values.password)) {
        // Debug logging
        console.log("Password validation failed:", values.password);
        error.password = "Password didn't match!";
    }

    return error;
}

export default Validation;
