function Validation(values){
    alert("")
    let error = {}
    const email_pattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/

    if(values.email === "") {
        error.email = "Name shouldn't be empty!"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match!"
    }
    else{
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password shouldn't be empty!"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match!"
    }
    else{
        error.password = ""
    }
    return error;
}

export default Validation;