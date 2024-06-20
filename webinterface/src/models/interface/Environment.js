// pinia orm model class
import SemanticValue from "/src/models/SemanticModel.js"
const interfaceBackendUrl = process.env['VUE_APP_BACKEND_URL'] || "https://gcp-django-xdcyoa6ryq-uc.a.run.app"
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
        dataType: "string",
        value: interfaceBackendUrl
    },
    {
        id: 'interfaceBackendHealthCheckUrl',
        key: "url",
        description: "Backend Health Check Url",
        dataType: "string",
        value: interfaceBackendUrl + "/health"
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
}