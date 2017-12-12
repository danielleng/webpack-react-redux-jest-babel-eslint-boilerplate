import createMyModule from '../myModule.jsx';

test('create an instance of myModule correctly', () => {
  const mockObj = createMyModule();
  expect(mockObj.init).toBeTruthy();
  expect(mockObj.someBehaviour).toBeTruthy();
});
