// pinia orm model class
import SemanticValue from "/src/models/SemanticModel.js"
const dataSchema = [
    {
        id: 'interfaceName',
        key: "name",
        description: "Interface Name",
        dataType: "string",
        value: "Groupeffect"
    },
    {
        id: 'interfaceBackendUrl',
        key: "url",
        description: "Interface Backend Url",
        dataType: "url",
        value: process.env.BACKEND_URL
    },
    {
        id: 'interfacePicturesUrl',
        key: "url",
        description: "Interface Pictures Url",
        dataType: "url",
        value: process.env.PICTURES_URL
    },
    {
        id: 'interfaceBackendHealthCheckUrl',
        key: "url",
        description: "Backend Health Check Url",
        dataType: "url",
        value: process.env.BACKEND_URL + "/healthcheck"
    },
    {
        id: 'userId',
        key: "id",
        description: "User ID",
        dataType: "number"
    },
    {
        id: 'userName',
        key: "username",
        description: "Public User Name",
        dataType: "string"
    },
    {
        id: 'userEmail',
        key: "email",
        description: "Email Address",
        dataType: "string"
    },
    {
        id: 'userJwt',
        key: "jwt",
        description: "JWT Token",
        dataType: "string"
    },
    {
        id: 'userAuthUrl',
        key: "user",
        description: "User Auth Url",
        dataType: "url",
        value: process.env.BACKEND_URL + "/auth/users/me/"

    },
    {
        id: 'jwtTokenUrl',
        key: "access",
        description: "JWT Token Access Refresh Url",
        dataType: "url",
        value: process.env.BACKEND_URL + "/auth/jwt/create/"
    },
    {
        id: 'interfaceTextUrl',
        key: "text",
        description: "Text Url",
        dataType: "url",
        value: process.env.BACKEND_URL + "/text/"
    },
    {
        id: 'interfaceCardUrl',
        key: "text",
        description: "Card Url",
        dataType: "url",
        value: process.env.BACKEND_URL + "/card/"
    },
    {
        id: 'userIsAuthenticated',
        key: "id",
        description: "User authentication status",
        dataType: "boolean",
        value: false
    },
    {
        id: 'jsonAssetUrl',
        key: "url",
        description: "Json asset url",
        dataType: "url",
        value: process.env.BACKEND_URL + "/assets/json/"
    }    
]

export default class Environmet extends SemanticValue {
    static entity = "environmets"
    static indexedDbName = "groupeffect_environments"
    static primaryKey = "id"
    static metaFields = "++id,key,value,description,dataType"

    static load() {
        this.setup()
        dataSchema.map((item) => {
            let user= new this
            user = {...item}
            this.save(item)
        })
    }

    static checkBackend(axios){
        const url = this.find('interfaceBackendHealthCheckUrl').value
        axios.get(url).then(r=>{
            console.log('backend health',r)
            return r.data
        }).catch(e=>{
            console.log('backend health error',e)
            return e
        })
    }
}