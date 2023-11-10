class Node{
    constructor(data){
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
     search(word){
        let node = this.root;
        for(let i = 0; i < word.length; i++){
            let ch = word[i];
            if(!node.children[ch]) return false;
            node = node.children[ch];
        }
        return node.isEndOfWord
     }
}
const trie = new Trie();
trie.insert('hello');
console.log(trie.search('hell'));