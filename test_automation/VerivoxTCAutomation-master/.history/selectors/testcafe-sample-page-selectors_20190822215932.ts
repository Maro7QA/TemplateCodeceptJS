import { Selector } from 'testcafe';
export const firstInputBox = Selector('input[type=text]').nth(0);
export const secondInputBox = Selector('input[type=text]').nth(1);
export const userNameInputBox = Selector('input#developer-name[type=text]');
export const submitButton = Selector('#mps-tab-box-2 > form > div.page-default-signup > button');
export const resultContent = Selector('div.result-content');
export const powerSection = Selector('body > div.page-container > header > div.page-navigation > div > nav > ul > li:nth-child(2)');
export const oekoStromSection = Selector('#mps-tab-2');
export const postalCode = Selector('#mps-tab-box-2 > form > div.page-default-signup > div:nth-child(1)');
export const firstTariff = Selector('#result-tariff--1 > div > nrg-tariff-price > nrg-sign-up-button');
export const signupButton = Selector('#esignupLink');
export const emailAddress = Selector('#ContactData_EMail');
export const emailAddressConfirmation = Selector('#ContactData_EMailConfirmation');
export const gender = Selector('#AddressData_ConnectionAddress_Gender');
export const genderMan = Selector('#AddressData_ConnectionAddress_Gender > option:nth-child(3)');
export const firstName = Selector('#AddressData_ConnectionAddress_FirstName');
export const familyName = Selector('#AddressData_ConnectionAddress_Name');
export const streetSelector = Selector('#AddressData_ConnectionAddress_Street');
export const street = Selector('#AddressData_ConnectionAddress_Street > option:nth-child(30)');
export const houseNumber = Selector('#AddressData_ConnectionAddress_HouseNumber');
export const birthday = Selector('#ContactData_DayOfBirth_clone');
export const debitCard = Selector('#BankData_BankInformationType_IbanBic');
export const bankIBAN = Selector('#BankData_IBAN');
export const checkboxBankData = Selector('#BankData_AgreementChecked');
export const submitButtonDataDescription = Selector('#signup-form-container > div.step-headline-main.spacer-bottom > button');
export const switchTraiff = Selector('#DoTheSwitch');
export const signupButtonSwitchProvider = Selector('#signup-form-container > div.step-headline-main.spacer-bottom > button');


