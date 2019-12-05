
export interface IPageModel {
  name?: string;
  postalCode: string;
  emailAddress: string;
  gender: string;
  firstName: string;
  familyName: string;
  streetNumber: string;
  birthday: string;
  iban: string;

  remoteTesting?: boolean;
}

export const pageModel: IPageModel = {
  name: 'john doe',
  postalCode: '90762',
  emailAddress: 'test@test.com',
  gender: 'Herr',
  firstName: 'Peter',
  familyName: 'Pan',
  streetNumber: '20',
  birthday: '20031990',
  iban: 'DE9842442424324'
};
