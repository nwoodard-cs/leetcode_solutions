// Reverse a singly linked list.

let reverseListIterative = (head) => {
    let cur = head
    let next = null
    let prev = null
    while (cur != null) {
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev    
}

let reverseListRecursive = (head) => {
    if (!head || !head.next) return head
    let ret = reverseList(head.next)
    head.next.next = head
    head.next = null
    return ret
}
