import {determineTitlePage} from '.';

describe('determineTitlePage', () => {
  test('default', () => {
    const formatMessageMock = jest
      .fn()
      .mockImplementationOnce(() => 'Lookiero')
      .mockImplementationOnce(() => 'Text titlepage');
    const expected = 'Lookiero | Text titlepage';

    expect(determineTitlePage(formatMessageMock, formatMessageMock)).toEqual(expected);
  });
});
