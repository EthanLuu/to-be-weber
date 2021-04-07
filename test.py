class Solution:
    def solve(self , root ):
        # 去掉所有不能成对的子结点
        def dfs(node):
            if not node:
                return
            if node.left and node.right:
                dfs(node.left)
                dfs(node.right)
            else:
                node.left = None
                node.right = None
        dfs(root)
        return root
        