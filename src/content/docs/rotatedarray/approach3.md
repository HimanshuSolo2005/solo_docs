---
title: Approach 3- In-Place Reversal Algorithm
description: no extra space used
---

### 💡 Idea:
This approach rotates the array in-place by reversing parts of it. It avoids using extra space and performs the rotation efficiently.

The rotation process can be broken down into **three reverse operations**:

1. Reverse the entire array.
2. Reverse the first `k` elements.
3. Reverse the remaining `n - k` elements.

This sequence of reversals leads to the correct rotated configuration.

---

### 🧠 Why This Works:
Reversing the full array changes the order of all elements. Then we bring back the relative order for the two parts (rotated and non-rotated segments) by reversing them separately.

---

### 💻 Code Snippet:

```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        k %= nums.size(); // In case k > n

        reverse(nums, 0, nums.size() - 1);   // Step 1
        reverse(nums, 0, k - 1);             // Step 2
        reverse(nums, k, nums.size() - 1);   // Step 3
    }

private:
    void reverse(vector<int>& nums, int left, int right) {
        while (left < right) {
            swap(nums[left], nums[right]);
            left++;
            right--;
        }
    }    
};
```
---

### 🧪 Example Walkthrough

Let’s take:

- `nums = [1, 2, 3, 4, 5, 6, 7]`
- `k = 3`

#### 🔁 Step-by-step Reversal:

**1. Reverse entire array:**  
- **Before:** `[1, 2, 3, 4, 5, 6, 7]`  
- **After:**  `[7, 6, 5, 4, 3, 2, 1]`

**2. Reverse first `k = 3` elements:**  
- **Before:** `[7, 6, 5]`  
- **After:**  `[5, 6, 7]`  
- **Full array:** `[5, 6, 7, 4, 3, 2, 1]`

**3. Reverse remaining `n - k = 4` elements:**  
- **Before:** `[4, 3, 2, 1]`  
- **After:**  `[1, 2, 3, 4]`  
- **Final array:** `[5, 6, 7, 1, 2, 3, 4]`

---

### ⏱ Time & Space Complexity

| Type             | Complexity |
|------------------|------------|
| Time Complexity  | O(n)       |
| Space Complexity | O(1)       |

- Each reverse operation is linear.
- All operations are done **in-place** using **constant memory**.

---

### ✅ Advantages

- ✅ No extra memory required  
- ✅ Very efficient and fast  
- ✅ Ideal for in-place rotation problems  

---

### ❌ Disadvantages

- ❌ Slightly more complex to understand for beginners  
- ❌ Involves multiple reverse operations  

---

### 📌 When to Use

- When **in-place rotation** is required  
- When **space efficiency** is a priority  
- In **time-sensitive applications** with large arrays  

---

### 🧩 Summary

This is the **most optimal approach** in terms of both **time and space complexity**.  
Once understood, it offers a **clean and elegant solution** for array rotation problems.
