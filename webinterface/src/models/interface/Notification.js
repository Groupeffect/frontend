// pinia orm model class
import { Model } from "pinia-orm"
import { useRepo } from "pinia-orm";

export default class Notification extends Model {
    static entity = "notifications"
    static primaryKey = "id"
    static useRepo = useRepo
    static fields () {
        return {
            id: this.uid(),
            category: this.attr(),
            message: this.attr(),
            active: this.attr(),
            meta: this.attr()
        }
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
        this.useRepo(this).delete(item.uid)
        
    }
    static save(data) {
        console.log('saving')
        this.useRepo(this).save(data)
    }
    static flush() {
        this.useRepo(this).flush()
    }
}
