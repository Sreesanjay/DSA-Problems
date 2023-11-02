/**
 * function to sort a linked list
 * @param {Node} head 
 * @returns {Node}
 */
const sortList = function(head) {
    if(!head) return null;
    let nodes = [];
    while(head){
        nodes.push(head);
        head = head.next;
    }
    for(let i = 0;i < nodes.length;i++){
        for(let j = 0; j < nodes.length-1-i;j++){
            if(nodes[j].val > nodes[j+1].val){
                const temp = nodes[j+1];
                nodes[j+1] = nodes[j];
                nodes[j] = temp;
            }
        }
    }
    for(let i=0;i<nodes.length;i++){
        nodes[i].next = nodes[i+1] || null;
    }
    return nodes[0]
};

/**
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 */