class HashTable{
    constructor(){
        this.table = new Array(10);
        this.size = 0;
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    set (key, value){
        const hashValue = this._hash(key);  
        console.log(hashValue)
        this.table[hashValue] = [key, value];
    }
    get (key){
        const hashValue = this._hash(key);
        if(!this.table[hashValue]) return undefined;
        else return this.table[hashValue]
    }
}

let hash_table =  new HashTable();
hash_table.set('amar',20);
hash_table.set('hisham',18);
hash_table.set('ashwin',23);
hash_table.set('ashbvwin',23);
hash_table.set('ashwcvin',23);
hash_table.set('bcv',23);
hash_table.set('ashwfdin',23);
hash_table.set('asdfhwin',23);
hash_table.set('assdahwin',23);
hash_table.set('asxzchwin',23);
console.log(hash_table.get('hisham'));