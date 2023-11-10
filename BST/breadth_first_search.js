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
        const newNode = new Node(data);
        if (!this.root) return this.root = newNode
        return this.recursiveInsert(this.root, newNode);

    }
    recursiveInsert(node, newNode) {
        if (newNode.data <= node.data) {
            if (!node.left) return node.left = newNode
            this.recursiveInsert(node.left, newNode);
        } else {
            if (!node.right) return node.right = newNode
            this.recursiveInsert(node.right, newNode);
        }
    }
    bfsTraversal() {
        let queue = [];
        queue.push(this.root);
        while(queue.length!==0){
            let node = queue.shift();
            console.log(node.data);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
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
bst.bfsTraversal()