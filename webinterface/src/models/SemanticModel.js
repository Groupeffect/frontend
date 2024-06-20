// pinia orm model class
import { Model } from "pinia-orm"
import { useRepo } from "pinia-orm";
import Dexie from "dexie";

export default class SemanticValue extends Model {
    static entity = "semanticvalues"
    static primaryKey = "id"
    static useRepo = useRepo
    static indexedDbName = "webinterfaceDB"
    static indexedDb = null
    static version = 1
    static metaFields = "++id,uri,subject,predicate,object"
    static fields () {
        const  f = {}
        this.metaFields.split(',').map((field) => !field.includes('++') ? f[field] = this.attr() : null)
        f.id = this.uid()
        return f
    }

    static idb() {
        return this.indexedDb[this.entity]
    }
    static setup() {
        this.indexedDb = new Dexie(this.indexedDbName)
        const stores = {}
        stores[this.entity] = this.metaFields
        this.indexedDb.version(this.version).stores(stores)
        this.idb().toArray().then((data) => {
                this.save(data)
            }
        )
        return this.indexedDb
    }
    static all() {
        return this.useRepo(this).all() || []
    }
    static find(uid) {
        return this.useRepo(this).find(uid)
    }
    static where(field, value) {
        return this.useRepo(this).where(field, value).get() || []
    }
    static delete(item) {
        console.log('deleting',item)
        this.idb().delete(item.id)
        this.useRepo(this).delete(item.uid)
        
    }
    static save(data) {
        console.log('saving',this.entity, data)
        this.useRepo(this).save(data)
        if(data) {
            this.all().map(e=>
                {
                    this.idb().put(e)
                }
            )
        }
    }
    static flush() {
        this.all().map(e=>this.idb().delete(e.id))
        this.useRepo(this).flush()
    }
}
