class Node{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}
class Trie{
    constructor(){
        this.root = new Node();
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
    prefix_search(word){
        let node = this.root;
        for(let i = 0; i < word.length; i++){
            let char = word[i];
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}
const trie = new Trie();
trie.insert('hellow')
console.log(trie.prefix_search('helloi'))