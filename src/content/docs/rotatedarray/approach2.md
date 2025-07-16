---
title: Approach 2 - Using STL + Slicing (C++ Vector Manipulation)
description: using c++ stl
---

## 🔍 Approach 2 Explanation: Using STL and Slicing

---

### ***Problem:*** [Leetcode](https://leetcode.com/problems/rotate-array/description/)

---

### 📌 Description:
In this approach, we utilize C++ Standard Template Library (STL) features to rotate the array in a simple and elegant way.

The idea is to:
1. Extract the **last `k` elements** using vector slicing.
2. Append the **first `n - k` elements** to the end of this temporary vector.
3. Copy the entire temporary vector back to the original `nums` array.

---

### 📘 Key Formula:
- Final rotated array = `last k elements` + `first n-k elements`

---

### 💻 Code Snippet:

```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n;
        if (k != 0) {
            vector<int> temp(nums.end() - k, nums.end());
            temp.insert(temp.end(), nums.begin(), nums.end() - k);
            copy(temp.begin(), temp.end(), nums.begin());
        }        
    }
};
```

### 🧪 Example Walkthrough

Let’s take an example:

- `nums = [1, 2, 3, 4, 5, 6, 7]`, `k = 3`
- `n = 7`, `k = 3 % 7 = 3`

#### 🔢 Steps:

**Step 1:**  
Get last 3 elements  
→ `temp = [5, 6, 7]`

**Step 2:**  
Append first 4 elements  
→ `temp = [5, 6, 7, 1, 2, 3, 4]`

**Step 3:**  
Copy `temp` back to `nums`

#### 🔚 Final Output:
`nums = [5, 6, 7, 1, 2, 3, 4]`


---

### ⏱ Time & Space Complexity

- **Time Complexity:** `O(n)`  
  Slicing and inserting both take linear time.

- **Space Complexity:** `O(n)`  
  A temporary array is created of size `n`.

---

### ✅ Advantages

- Clean, readable code.
- Leverages STL features for simplicity.

---

### ❌ Disadvantages

- Not an in-place solution.
- Uses `O(n)` extra space.

---

### 📌 When to Use

- When simplicity and readability matter more than space efficiency.
- When you're allowed to use extra space or STL utilities.
