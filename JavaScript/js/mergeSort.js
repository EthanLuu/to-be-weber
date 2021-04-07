const mergeSort = (nums) => {
    if (nums.length < 2) {
        return nums
    }
    const mid = nums.length / 2
    const left = nums.splice(0, mid)
    return merge(mergeSort(left), mergeSort(nums))
}

const merge = (left, right) => {
  const arr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}

const nums = [3, 4, 1, 0]
console.log(mergeSort(nums))