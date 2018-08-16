// Find the sum of all left leaves in a given binary tree.

let sumOfLeftLeaves = (root) => {
    if (root === null) return 0
    if (root.left && !root.left.right && !root.left.left)
        return root.left.val + sumOfLeftLeaves(root.right)
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
}
