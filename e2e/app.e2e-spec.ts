import { EmployeeAdminPage } from './app.po';

describe('employee-admin App', function() {
  let page: EmployeeAdminPage;

  beforeEach(() => {
    page = new EmployeeAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
