let arr = [
  {
    id: 1,
    pid: 0,
    name: 'body',
  },
  {
    id: 2,
    pid: 1,
    name: 'title',
  },
  {
    id: 3,
    pid: 2,
    name: 'div',
  },
]

const parseTree = (root, nodes) => {
  const treeNode = { ...root }
  treeNode.children = []
  for (const node of nodes) {
    if (node.pid === root.id) {
      treeNode.children.push(parseTree(node, nodes))
    }
  }
  return treeNode
}

console.log(parseTree(arr[0], arr))
