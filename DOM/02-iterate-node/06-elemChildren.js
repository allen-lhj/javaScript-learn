function elemChildren(node) {
    var arr = [];
    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
        var childItem = children[i];
        if (childItem.nodeType === 1) {
            arr.push(childItem)
        }
    }
    return arr;
}