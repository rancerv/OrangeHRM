import { Selector } from "testcafe";
import common from "../Utils/commonFunctions";



class Admin {
    constructor(){
        this.usernameBar = Selector("#app div div.oxd-table-filter div.oxd-form-row > div > div:nth-child(1) input");
        this.userNameValidation = Selector("#app div.oxd-table-body div:nth-child(2) div");
        this.employeeNameBar = Selector("#app div:nth-child(3) div div:nth-child(2) div > input");
        this.hideButton = Selector("#app div.oxd-table-filter-header-options div:nth-child(3) button i");
        this.searchButton = Selector("#app button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space");
        this.selectDropdown = Selector("#app div:nth-child(2) > div > div:nth-child(2) div div.oxd-select-text-input");
        this.adminDropdown = Selector("#app div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text-input");
    }

    async searchByUser(userName){
        await common.type(this.usernameBar, userName);
        await common.clickElement(this.searchButton);
    }

    async searchByRole(){
        const roleOption = this.selectDropdown.find("input");
        await common.clickElement(this.selectDropdown);
        await common.clickElement(roleOption.withText("ESS"));
        await common.clickElement(this.searchButton);
    }

    async searchByEmployee(employeeName){
        await common.type(this.employeeNameBar, employeeName);
    }

    async hideSystemUser(){
        await common.clickElement(this.hideButton);
    }
    
}

export default new Admin();