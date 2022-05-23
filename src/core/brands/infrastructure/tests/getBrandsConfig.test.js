import * as brandsInfra from '../getBrandsConfig';
import * as brandsDefinition from '../brands.definition';

describe('getBrandsConfig', () => {
  it('should return brands for a site', () => {
    const brandsMock = {1: ['a', 'b', 'c'], 2: ['a', 'b', 'c']};
    const brandsBySiteMock = {1: ['a', 'b', 'c']};

    const mockBrandsDefinition = jest.spyOn(brandsDefinition, 'getBrandsDefinition');
    mockBrandsDefinition.mockReturnValue(brandsMock);

    const mockGetBrandsBySite = jest.spyOn(brandsDefinition, 'getBrandsBySite');
    mockGetBrandsBySite.mockReturnValue(brandsBySiteMock);

    const siteCode = '1';
    const devicePath = 'desktop';
    const expected = brandsMock['1'];

    const brands = brandsInfra.getBrandsConfig(siteCode, devicePath);
    expect(brands).toEqual(expected);

    mockBrandsDefinition.mockRestore();
    mockGetBrandsBySite.mockRestore();
  });
});
