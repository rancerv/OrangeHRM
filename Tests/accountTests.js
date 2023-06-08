import account from "../pageObjectSelectors/accountObjects";
import common from "../Utils/commonFunctions";

const url = ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
const userName = "Admin";
const password = "admin123";
const wrongUserName = "ds";
const wrongPassword = "123";
const message = "Invalid credentials";
const warningMessage = "Required";
const dashboardMessage = "Dashboard";

fixture("Login")
    .page(url)
    .beforeEach(async () => {
        await common.maximize();
    });

test("Log in - Login Known Account", async ()=> {
   await account.login(userName, password);
   await common.validateText(account.loginValidation, dashboardMessage);
});

test("Log in - Login with Wrong User Name", async ()=> {
    await account.login(wrongUserName, password);
    await common.validateText(account.validationMessage, message);
 });

test("Log in - Login Wrong Password", async ()=> {
    await account.login(userName, wrongPassword);
    await common.validateText(account.validationMessage, message);
 });

 test("Log in - No login, No password", async ()=> {
    await account.emptyLogin();
    await common.validateText(account.requiredUsernameWarning, warningMessage);
    await common.validateText(account.requiredPasswordWarning, warningMessage);
 });