import admin from "../pageObjectSelectors/adminObjects";
import account from "../pageObjectSelectors/accountObjects";
import common from "../Utils/commonFunctions";

const url = ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
const userName = "Admin";
const password = "admin123";
const roleOption = admin.selectDropdown.find("option");
const essRole = "ESS";
const employee = "Anthony Nolan";



fixture("Admin Page")
    .page(url)
    .beforeEach(async () => {
        await common.maximize();
        await account.login(userName, password);
        await common.clickElement(account.adminButton);
    });

test("Search by Username", async ()=> {
    await admin.searchByUser(userName);
    await common.validateText(admin.userNameValidation, userName);
});

test("Search by Admin Role", async ()=> {
    await admin.searchByAdminRole();
    await common.validateText(admin.adminUserRole, userName);
 });

 test("Search by ESS Role", async ()=> {
    await admin.searchByEssRole();
    await common.validateText(admin.essUserRole, essRole);
 });

 test.skip("Search by Employee Name", async ()=> {
    await admin.searchByEmployee();
    //await common.validateText(admin.employeeName, );
 });
 