class loginPage {

    inputEmail(email) {
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

    tapLoginButton() {
        this.btnLogin.click()
    }

    tapCreateAccountButton() {
        this.btnCreateAccount.click()
    }

    checkResult (result) {
            if(result === "invalid") expect(this.lblInvalidEmail).toHaveText('Enter Valid Email')
            if(result === "success") expect(this.lblSuccessLogin).toHaveText('Android NewLine Learning')
            else(result === "failed") expect(this.lblFailedLogin).toHaveText('Wrong Email or Password')      
        }
    }

    get txtEmailField () { 
        return $('~txt-email-field')        
    }

    get txtPasswordField () { 
        return $('~txt-password-field')        
    }

    get btnLogin () { 
        return $('~btn-login')        
    }  

    get btnCreateAccount () { 
        return $('~btn-create-account')        
    } 

    get lblInvalidEmail () { 
        return $('~lbl-invalid-email')        
    } 

    get lblSuccessLogin () { 
        return $('~lbl-success-login')        
    } 

    get lblFailedLogin () { 
        return $('~lbl-failed-login')        
    } 
}

module.exports = new loginPage();
