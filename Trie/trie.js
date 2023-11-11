class Node{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}
class Trie{
    constructor(){
        this.root  = new Node();
    }
    insert(word){
            let node = this.root;
            for(let i = 0; i < word.length; i++){
                let char = word[i];
                if(!node.children[char]){
                    node.children[char] = new Node();
                }
                node = node.children[char]; 
            }
            node.isEndOfWord = true;
    }
    delete(word){
        return this._delete(this.root, word , 0);
    }
    _delete(node , word , index){
        if(index === word.length){
            if(!node.isEndOfWord) return false;
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0;
        }
        let char = word[index];
        if(!node.children[char]) return false; 
        let deleteObject = this._delete(node.children[char], word, index+1)
        if(deleteObject){
            delete node.children[char];
            return Object.keys(node.children).length === 0;
        }
        return false;
    }
}
const trie = new Trie();
trie.insert('hello')
trie.insert('world')
console.log(trie.root)
trie.delete('hello')
console.log(trie.root)