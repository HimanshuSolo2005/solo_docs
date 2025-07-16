---
title: Approach 1 - Using an Extra Array
description: using extra array
---

## 📘 Problem Statement
Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

### Example

**Input:**  
`nums = [1, 2, 3, 4, 5, 6, 7]`, `k = 3`

**Output:**  
`[5, 6, 7, 1, 2, 3, 4]`

### ***Problem:*** [Leetcode](https://leetcode.com/problems/rotate-array/description/)
---

## ✅ Approach 1: Using an Extra Array

This approach involves creating a new array and placing each element from the original array into its correct rotated position.

### 🧠 Intuition

When rotating the array to the right by `k` steps, every element at index `i` in the original array moves to index `(i + k) % n` in the new array (where `n` is the size of the array). This ensures circular rotation.

---

### 🔍 Step-by-Step Explanation

Here, `n` is the length of the array, and `k` is the number of steps to rotate. After building the `rotated` array, we copy the elements back into the original array.

---

### 🧠 Why This Works:
The modulo operation ensures that when the calculated index goes beyond the array bounds, it wraps around to the beginning of the array — achieving the circular rotation.

---


**Result:**
`rotated = [5, 6, 7, 1, 2, 3, 4]`

Then copy `rotated` into `nums`.

---

### 💻 Code Snippet:

```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();         // Step 1: Get the size of the array
        k = k % n;                   // Step 2: Handle cases where k > n
        vector<int> rotated(n);      // Step 3: Create a new array of same size

        for (int i = 0; i < n; i++) {
            // Step 4: Calculate new index and assign
            rotated[(i + k) % n] = nums[i];
        }

        for (int i = 0; i < n; i++) {
            // Step 5: Copy back to original array
            nums[i] = rotated[i];
        }        
    }
};
```

---

### ⏱️ Time & Space Complexity:
| Type            | Complexity |
|-----------------|------------|
| Time Complexity | O(n)       |
| Space Complexity| O(n)       |

We traverse the array twice: once to fill `rotated`, and once to copy it back to `nums`. We also use O(n) extra space.

---

### ✅ Pros:
- Very intuitive and simple to implement.
- No need to manually shift elements.

### ❌ Cons:
- Not space-efficient (extra array of size `n` required).
- Cannot be used if in-place rotation is required.

---

### 📌 When to Use:
Use this approach when:
- You want a simple and readable solution.
- Space is not a constraint.
- Performance is not heavily impacted by extra memory.


### 🧪 Example:
**Input:**  
`nums = [1, 2, 3, 4, 5, 6, 7]`, `k = 3`

