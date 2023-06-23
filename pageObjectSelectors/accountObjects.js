import { Selector } from "testcafe";
import common from "../Utils/commonFunctions";



class Account {
    constructor(){
        this.usernameInput = Selector("#app div div div:nth-child(2) > div > div:nth-child(2) > input");
        this.passwordInput = Selector("#app div div form div:nth-child(3) div div:nth-child(2) input");
        this.loginButton = Selector("#app div.orangehrm-login-layout div div form div.oxd-form-actions.orangehrm-login-action button");
        this.validationMessage = Selector("#app div.oxd-alert-content.oxd-alert-content--error p");
        this.loginValidation = Selector("#app div.oxd-layout span h6");
        this.requiredUsernameWarning = Selector("#app form div:nth-child(2) span");
        this.requiredPasswordWarning = Selector("#app div.orangehrm-login-slot form div:nth-child(3) span");
        this.accountButton = Selector("#app div.oxd-layout header ul li span");
        this.logoutButton = Selector("#app div.oxd-layout header li:nth-child(4) a");
        this.loginTitle = Selector("#app h5");
        this.searchBar = Selector("#app div.oxd-layout nav input");
        this.adminButton = Selector("#app nav div.oxd-sidepanel-body a");
    }

    async login(userName, password){
        await common.type(this.usernameInput, userName);
        await common.type(this.passwordInput, password);
        await common.clickElement(this.loginButton);
    }

    async emptyLogin(){
        await common.clickElement(this.loginButton);
    }

    async logout(){
        await common.clickElement(this.accountButton);
        await common.clickElement(this.logoutButton);
    }

    async searching(searchItem){
        await common.type(this.searchBar, searchItem);
    }
}

export default new Account();