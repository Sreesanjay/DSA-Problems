class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const node = new Node(data);
        if (!this.root) return this.root = node;
        return this._insert(this.root, node);
    }
    _insert(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) return node.left = newNode
            this._insert(node.left, newNode);
        } else {
            if (!node.right) return node.right = newNode;
            this._insert(node.right, newNode);
        }
    }
    isValid() {
        if(!this.root) return null;
        return this._isValid(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
    _isValid(node, minimum, maximum) {
        if(!node) return true;
        if(node.data < minimum || node.data > maximum) return false;
        return (this._isValid(node.left, minimum, node.data) && this._isValid(node.right, node.data, maximum))
    }
}
const bst = new BST();
bst.root = new Node(10);
bst.root.left = new Node(8);
bst.root.right = new Node(18);
console.log(bst.root) 
console.log(bst.isValid())