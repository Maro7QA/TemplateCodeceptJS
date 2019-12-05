export interface IPageModel {
  name?: string;
  postalCode: string;
  remoteTesting?: boolean;
}

export const pageModel: IPageModel = {
  name: 'john doe',
  postalCode: '90762'
};
