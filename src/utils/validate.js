export const checkValidData = (email,password,name,number) => {

    //typical structure of an email address, which includes a local part, an "@" symbol, and a domain part
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    //at least 8 characters, one lowercase, one uppercase, one digit, and one special character
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    //valid -> Sk1234@@

    const isNameValid = /^[a-zA-Z\s\-']+$/.test(name);

    const isPhoneValid = /^\d{10}$/.test(number);


    if(!isEmailValid) return "Email ID not valid";
    if(!isPasswordValid) return "Password should have at least 8 characters, one lowercase, one uppercase, one digit, and one special character";
    if(!isNameValid) return "Name should not contain any digits";
    if (!isPhoneValid) return "Phone Number should contain 10 digits";

    if(isEmailValid && isPasswordValid && isNameValid && isPhoneValid){
        return null;
    }
}