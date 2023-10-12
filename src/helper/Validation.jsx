function Validation(formData) {
    let error = {}
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

    if(formData.name === "") {
        error.name = "name is empty."
    }

    if(formData.email === "") {
        error.email = "email is empty."
    } else if(!emailPattern.test(formData.email)) {
        error.email = "invalid email."
    }

    return error;
}

export default Validation;