class Node{
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(data){
        const newNode = new Node(data);
        if(!this.root) return this.root = newNode;
        return this.recuresiveInsert(this.root,  newNode);
    }
    recuresiveInsert(node, newNode){
        if(newNode.data < node.data){
            if(!node.left) return node.left = newNode;
            this.recuresiveInsert(node.left, newNode);
        }
        else{
            if(!node.right) return node.right = newNode;
            this.recuresiveInsert(node.right, newNode);
        }
    }
    inOrder(node){
        if(!node) return;
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }
    findClosest(data){
        if(!this.root) return null;
        return this._findClosest(this.root, data, Number.MAX_SAFE_INTEGER);
    }
    _findClosest(node, data, closest){
        if(!node) return closest;
        if(Math.abs(data - node.data) < Math.abs(data-closest)) closest =  node.data;
        closest = this._findClosest(node.left, data, closest);
        closest = this._findClosest(node.right, data, closest);
        return closest;
    }
}
const bst = new BST()
bst.insert(5)
bst.insert(3)
bst.insert(10)
bst.insert(2)
bst.insert(5)
bst.insert(8)
bst.insert(30)
// bst.inOrder(bst.root)
console.log(bst.findClosest(20))