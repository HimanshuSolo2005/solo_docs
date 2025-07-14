---
title: 🧠 Process String with Special Operations II – Solution Explanation
description: Used Reverse-Technique and simulation technique
---


## 🔍 Problem Overview

You're given a string `s` consisting of:
- Lowercase English letters (`a`-`z`)
- Special characters:  
  - `*` → deletes the last character  
  - `#` → duplicates the entire result  
  - `%` → reverses the entire result

You are also given an integer `k`. Your task is to return the **k-th character** (0-indexed) of the **final result** after all operations.

If `k` is out of bounds of the final result, return `'.'`.

---

## ⚠️ Naive Approach Warning

Constructing the entire result **won't work efficiently**, as the result can grow **exponentially** due to `#` (duplication) and `%` (reversal).  
We need a **smarter approach** that avoids actual string construction.

---

## ✅ Efficient Strategy

We simulate the string processing in **two passes**:

### 1️⃣ First Pass: Forward Simulation

We compute only the **final length** of the result string without building it:

| Character | Action                         |
|-----------|--------------------------------|
| Lowercase | `len++`                        |
| `*`       | `if (len > 0) len--`           |
| `#`       | `len *= 2`                     |
| `%`       | No effect on length            |

This tells us the size of the result string, and whether `k` is in bounds.

### 2️⃣ Second Pass: Reverse Simulation

We trace the string **backward** to find where the **k-th character** came from by **reversing** the effect of operations:

| Character | Reverse Operation                                    |
|-----------|------------------------------------------------------|
| Lowercase | If `k == len - 1`, return the character               |
| `*`       | Means a char was removed — now we `len++`            |
| `#`       | Result was duplicated — now `len /= 2`; map `k` back |
| `%`       | Result was reversed — now `k = len - 1 - k`          |

---

## ✅ C++ Code

```cpp
typedef long long ll;

class Solution {
public:
    char processStr(string s, long long k) {
        ll len = 0;

        // First pass: compute final length
        for (auto c : s) {
            if (islower(c)) len++;
            else if (c == '*' && len > 0) len--;
            else if (c == '#') len *= 2;
        }

        // If k is out of bounds, return '.'
        if (k >= len) return '.';

        // Second pass: reverse operations
        for (int i = s.size() - 1; i >= 0; --i) {
            char c = s[i];

            if (islower(c)) {
                if (k == len - 1) return c;
                len--;
            }
            else if (c == '*') {
                len++;
            }
            else if (c == '#') {
                len /= 2;
                if (k >= len) k -= len;
            }
            else if (c == '%') {
                k = len - 1 - k;
            }
        }

        return '.';
    }
};
```

---

## 🔁 Example Walkthrough

**Input:** `s = "abc#%", k = 3`

Step-by-step simulation:

1. `'a'` → "a"
2. `'b'` → "ab"
3. `'c'` → "abc"
4. `'#'` → "abcabc"
5. `'%'` → "cbacba"

Final result = `"cbacba"` → `result[3] = 'c'` ✅

But the algorithm finds `'c'` **without building the result**.

---

## ⏱️ Time and Space Complexity

| Metric         | Value      |
|----------------|------------|
| Time Complexity| `O(n)`     |
| Space Complexity| `O(1)`    |

Efficient and elegant — no large string construction!

---

## 🧠 Summary

This is a classic example of **reverse simulation**:
- Forward pass to find final length.
- Reverse pass to trace where the k-th character came from.

Smart, space-saving, and fast! 🚀
