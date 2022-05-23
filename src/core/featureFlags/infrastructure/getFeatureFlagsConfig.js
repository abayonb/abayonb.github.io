import {http} from '@core/api/infrastructure';

const getFeatureFlagsConfig = async () => {
  try {
    const response = await http.fetch(`/api/feature-flags`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export {getFeatureFlagsConfig};
