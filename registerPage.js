class registerPage {

    inputName(name) {
        this.txtNameField.click();
        browser.pause(1000);
        this.txtNameField.setValue(name);
        driver.hideKeyboard()
    }

    inputEmali(email) {
        this.txtEmailField.click();
        browser.pause(1000);
        this.txtEmailField.setValue(email);
        driver.hideKeyboard()
    }

    inputPassword(password) {
        this.txtPasswordField.click();
        browser.pause(1000);
        this.txtPasswordField.setValue(password);
        driver.hideKeyboard()
    }

    inputPasswordConfirmation(passwordconfirmation) {
        this.txtPasswordConfirmationField.click();
        browser.pause(1000);
        this.txtPasswordConfirmationField.setValue(passwordconfirmation);
        driver.hideKeyboard()
    }

    tapRegisterButton() {
        this.btnRegister.click()
    }

    tapCreateAccountButton() {
        this.btnCreateAccount.click()
    }

    checkResult (result) {
            if(result === "invalid") expect(this.lblInvalidEmail).toHaveText('Enter Valid Email')
            if(result === "success") expect(this.lblSuccessRegister).toHaveText('Registration Successful')
            if(result === "not match") expect(this.lblPasswordNotMatch).toHaveText('Password Does Not Match')
            if(result === "incorrect name") expect(this.lblNameNotMatch).toHaveText('Enter Full Name')      
            if(result === "email exist") expect(this.lblEmailExist).toHaveText('Email Already Exist')        
        }
    }

    get txtNameField () { 
        return $('~txt-name-field') //selector not final yet
    }

    get txtEmailField () { 
        return $('~txt-email-field')        
    }

    get txtPasswordField () { 
        return $('~txt-password-field')        
    }

    get txtPasswordConfirmationField () { 
        return $('~txt-password-confirmation-field')        
    }

    get btnRegister () { 
        return $('~btn-register')        
    }  

    get btnCreateAccount () { 
        return $('~btn-create-account')        
    } 

    get lblInvalidEmail () { 
        return $('~lbl-invalid-email')        
    } 

    get lblSuccessRegister () { 
        return $('~lbl-success-register')        
    } 

    get lblPasswordNotMatch () { 
        return $('~lbl-password-not-match')        
    } 

    get lblNameNotMatch () { 
        return $('~lb-name-not-match')        
    } 

    get lblEmailExist () { 
        return $('~lbl-email-exist')        
    } 
}

module.exports = new registerPage();
