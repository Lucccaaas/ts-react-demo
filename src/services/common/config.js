/**
 *
 * Created by yunge on 16/10/28.
 */

const api = '/api';

const requestPath = (entityType) => {
    const values = Object.keys(entityTypeConfig).map(key => entityTypeConfig[key].value);
    if (values.indexOf(entityType) === -1) {
        throw new Error(`unknown entityType: ${entityType}`);
    }
    return `${api}/${entityType}`;
};

//{entityType...}
const entityTypeConfig = {
    users: {
        name: '用户信息表',
        value: 'user',
        path: '/users',
        show: false,
    },

    entry: {
        name: '分录明细列表',
        value: 'entrys',
        path: '/entry',
        show: true,
    },
};

export default {
    entityTypeConfig,
    requestPath
}
