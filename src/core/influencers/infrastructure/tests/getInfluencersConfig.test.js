import * as influencersInfra from '../getInfluencersConfig';
import * as influencersDefinition from '../influencers.definition';

describe('getInfluencersConfig', () => {
  it('should return influencers for a site', () => {
    const influencersMock = {1: ['a', 'b', 'c'], 2: ['a', 'b', 'c']};
    const influencersBySiteMock = {1: ['a', 'b', 'c']};

    const mockInfluencersDefinition = jest.spyOn(influencersDefinition, 'getInfluencersDefinition');
    mockInfluencersDefinition.mockReturnValue(influencersMock);

    const mockGetInfluencersBySite = jest.spyOn(influencersDefinition, 'getInfluencersBySite');
    mockGetInfluencersBySite.mockReturnValue(influencersBySiteMock);

    const siteCode = '1';
    const devicePath = 'desktop';
    const expected = influencersMock['1'];

    const influencers = influencersInfra.getInfluencersConfig(siteCode, devicePath).influencers;
    expect(influencers).toEqual(expected);

    mockInfluencersDefinition.mockRestore();
    mockGetInfluencersBySite.mockRestore();
  });

  it('should return an array influencers for a site fr', () => {
    const siteCode = 'fr';
    const devicePath = 'desktop';
    const expected = influencersDefinition.getInfluencersDefinition(devicePath).I1;
    const influencers = influencersInfra.getInfluencersConfig(siteCode, devicePath).influencers[0];
    expect(influencers).toEqual(expected);
  });
});
