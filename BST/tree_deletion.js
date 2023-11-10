class Node{
    constructor(data){
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
        return this.recursiveInsert(this.root, newNode);
    }
    recursiveInsert(node, newNode){
        if(newNode.data <= node.data){
            if(!node.left) return node.left = newNode;
            this.recursiveInsert(node.left, newNode);
        }
        else{
            if(!node.right) return node.right = newNode;
            this.recursiveInsert(node.right, newNode);
        }
    }
    remove(data){
        if(!this.root) return null;
        return this._removeNode(this.root, data)
    }
    _removeNode(node , data){
        if(!node) return null;
        if(data < node.data){
            node.left = this._removeNode(node.left, data);
        }
        else if(data > node.data){
            node.right = this._removeNode(node.right, data);
        }
        else{
            if(!node.left && !node.right) return null;
            else if(!node.left) return node.right;
            else if(!node.right) return node.left;
            else{
                node.data = this.findMin(node.right);
                node.right = this._removeNode(node.right, node.data);
                return node;
            }
        }
    }
    findMin(node) {
        if(!node.left) return node.data;
        this.findMin(node.left);
    }
    inOrder(node) {
        if(!node) return 
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }

}


const bst = new BST();
bst.insert(5)
bst.insert(3)
bst.insert(10)
bst.insert(2)
bst.insert(5)
bst.insert(8)
bst.insert(30)
bst.remove(10)
bst.inOrder(bst.root)