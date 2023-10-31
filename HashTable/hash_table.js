class HashTable{
    constructor(){
        this.table = [];
        this.size = 0;
    }
    _hash (key){
        let hashValue = 0;
        for(let i = 0; i < key.length; i++){
            hashValue += key.charCodeAt(i);
        }
        return hashValue;
    }
    set (key, value){
        const hashValue = this._hash(key);  
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
hash_table.set('aswin',23);
console.log(hash_table.get('hisham'));
console.log(hash_table.table)