import baseApiFactory from "./common/baseApi";
import apiConfig from "./common/config";

const {entityTypeConfig} = apiConfig;
const baseApi = baseApiFactory(entityTypeConfig.users.value);

export default {
    ...baseApi
}
