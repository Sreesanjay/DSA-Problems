class HashTable {
    constructor() {
        this.table = new Array(10);
        this.size = 0;
    }
    _hash(key) {
        let value = 0;
        key = key.toString();
        for (let i = 0; i < key.length; i++) {
            value += key[i].charCodeAt();
        }
        return value % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        }
        else {
            let sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            }
            else {
                bucket.push([key, value])
            }
        }


    }
    get(key) {
        const index = this._hash(key);
        let bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) return sameKeyItem[1];
        } else {
            return undefined;
        }
    }
    remove(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if(bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(key),1);
            }
        }else{
            return undefined;
        }
    }
}

const hash_table = new HashTable();
hash_table.set('hr', 10)
hash_table.set('wsea', 20)
hash_table.set('fgds', 30)
hash_table.set('dgf', 40)
hash_table.set('dfdfd', 50)
hash_table.set('ad', 60)
hash_table.set('fg', 70)
hash_table.set('kg', 80)
hash_table.set('drt', 90)
hash_table.set('mn', 100)
hash_table.remove('mn')
// console.log(hash_table.get('kg'))
console.log(hash_table.table)
hash_table.set('mn', 100)
