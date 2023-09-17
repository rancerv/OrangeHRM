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
        this.adminDropdown = Selector("#app div.oxd-select-dropdown.--positon-bottom div:nth-child(2)");
        this.adminUserRole = Selector("#app div.oxd-table-body div:nth-child(1) div div:nth-child(3)");
        this.essDropdown = Selector("#app form div.oxd-form-row > div > div:nth-child(2) div:nth-child(3)");
        this.essUserRole = Selector("#app div.oxd-table-body div:nth-child(1) div div:nth-child(3)");
        this.EmployeeName = Selector("#app div.oxd-table-body > div:nth-child(1) div:nth-child(4)");
        this.EmployeeNameOption = Selector("#app div:nth-child(3) div.oxd-autocomplete-dropdown.--positon-bottom div");
    }

    async searchByUser(userName){
        await common.type(this.usernameBar, userName);
        await common.clickElement(this.searchButton);
    }

    async searchByAdminRole(){
        await common.clickElement(this.selectDropdown);
        await common.clickElement(this.adminDropdown);
        await common.clickElement(this.searchButton);
    }

    async searchByEssRole(){
        await common.clickElement(this.selectDropdown);
        await common.clickElement(this.essDropdown);
        await common.clickElement(this.searchButton);
    }

    async searchByEmployee(){
        await common.clickElement(this.employeeNameBar);
        const eName= this.EmployeeName.innerText;
        await common.type(eName);
        await common.clickElement(this.EmployeeNameOption);
        await common.clickElement(this.searchButton);
    }

    async hideSystemUser(){
        await common.clickElement(this.hideButton);
    }
    
}

export default new Admin();