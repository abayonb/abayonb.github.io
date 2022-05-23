import {http} from '@core/api/infrastructure';

export const siteSettingsApi = async country => await http.fetch(`/api/site/${country.toUpperCase()}`);
