/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 你需要返回一个指针，指向root，表示删减去若干个点后，剩下的树
 * @param root TreeNode类 指向二叉树的根
 * @return TreeNode类
 */
 function solve( root ) {
     const newRoot = new TreeNode(root.val)
     let lastRow = [newRoot]
     let depth = 1
     let pre = [root]
     while (pre) {
         const vals = []
         const nxt = []
         for (let i = 0; i < pre.length; i++){
             const node = pre[i]
             if (node.left) {
                 vals.push(node.left.val)
                 nxt.push(node.left)
             }
             if (node.right) {
                 vals.push(node.right.val)
                 nxt.push(node.right)
             }
         }
         if (vals.length == 2 ** depth) {
             const nxtRow = []
             for (let i = 0; i < lastRow.length; i++){
                 const node = lastRow[i]
                 node.left = new TreeNode(vals[2 * i])
                 node.right = new TreeNode(vals[2 * i + 1])
                 nxtRow.push(node)
             }
             lastRow = nxtRow
             pre = nxt
         } else {
            return newRoot
         }
     }
     return newRoot
}
module.exports = {
    solve : solve
};