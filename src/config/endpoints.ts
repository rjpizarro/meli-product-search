import getEnvVars from './envConfig'

const { apiUrl } = getEnvVars()

export default {
    items: {
        get: `${apiUrl}/items`,
    },
}