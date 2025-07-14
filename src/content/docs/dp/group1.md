---
title: Group 1 - Fibonacci / Simple Recurrence
description: Introduction to Fibonacci / Simple Recurrence Pattern
---

## 📌 Introduction

The **Fibonacci / Simple Recurrence** pattern in Dynamic Programming (DP) deals with problems where the solution to a larger problem can be expressed as a function of solutions to smaller, preceding subproblems. This often involves a direct, linear dependency on one or two previous states, similar to how the Fibonacci sequence is defined:

\[
F(n) = F(n-1) + F(n-2)
\]

---

## ✨ Key Characteristics

- **Overlapping Subproblems:** The same subproblems are solved multiple times.
- **Optimal Substructure:** The optimal solution to the problem can be constructed from the optimal solutions of its subproblems.
- **Base Cases:** Clearly defined starting conditions are necessary to terminate the recursion or fill the DP table.

---

## 🎯 Intuition

The core idea is to **build up the solution from the simplest cases to the more complex ones**.  
Instead of recomputing the same values repeatedly (which happens in naive recursion), we **store** the results of subproblems (memoization or tabulation) and **reuse** them.  
This transforms an exponential time complexity into a polynomial one.

---

## 🚀 Problems in Group 1

---

### 1️⃣ Climbing Stairs

#### Problem Description
To reach step n, you could have come from step n−1 (by taking 1 step) or from step n−2 (by taking 2 steps). Therefore, the total number of ways to reach step n is the sum of the ways to reach step n−1 and the ways to reach step n−2. This is a classic Fibonacci sequence.

#### Intuition
To reach step *n*, you could have come:
- From step *n-1* (by taking 1 step)
- Or from step *n-2* (by taking 2 steps)

Therefore:
\[
dp[i] = dp[i-1] + dp[i-2]
\]

This is a classic Fibonacci recurrence.

#### Base Cases
- Ways to reach step 0: `1` way (do nothing)
- Ways to reach step 1: `1` way (1 step)

#### Code (C++)

```cpp
#include <vector>
#include <iostream>
using namespace std;

int climbStairs(int n) {
    if (n == 0) return 1;
    if (n == 1) return 1;

    vector<int> dp(n + 1);
    dp[0] = 1;
    dp[1] = 1;

    for (int i = 2; i <= n; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}
```

---

### 2️⃣ Min Cost Climbing Stairs

#### Problem Description
You are given an integer array cost where cost[i] is the cost of the i-th step on a staircase. Once you pay the cost, you can either climb 1 or 2 steps. You can either start from step 0 or step 1. Return the minimum cost to reach the top.

#### Intuition
To reach step i:


Therefore:
\[
dp[i]=cost[i]+min(dp[i−1],dp[i−2])
\]

The top itself has no cost.

#### Base Cases
- Cost to reach step 0: cost[0]
- Cost to reach step 1: cost[1]


#### Code (C++)

```cpp
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

int minCostClimbingStairs(vector<int>& cost) {
    int n = cost.size();
    vector<int> dp(n + 1);

    dp[0] = cost[0];
    dp[1] = cost[1];

    for (int i = 2; i <= n; ++i) {
        if (i == n) {
            dp[i] = min(dp[i - 1], dp[i - 2]);
        } else {
            dp[i] = cost[i] + min(dp[i - 1], dp[i - 2]);
        }
    }

    return dp[n];
}
```

/*
Example Usage:
int main() {
    vector<int> cost1 = {10, 15, 20};
    cout << minCostClimbingStairs(cost1) << endl; // 15
    vector<int> cost2 = {1, 100, 1, 1, 1, 100, 1, 1, 100, 1};
    cout << minCostClimbingStairs(cost2) << endl; // 6
}
*/

---

### 3️⃣ Dice Combinations

#### Problem Description
You are given an integer n. In how many ways can you get a sum of n by throwing a standard six-sided die multiple times? The order of throws matters.

#### Intuition
To achieve sum i:

Therefore:
\[
dp[i]=dp[i−1]+dp[i−2]+dp[i−3]+dp[i−4]+dp[i−5]+dp[i−6]
\]


#### Base Cases
- Ways to get sum 0: 1 way (empty sequence)

#### Code (C++)

```cpp
#include <vector>
#include <iostream>
using namespace std;

int diceCombinations(int n) {
    const long long MOD = 1e9 + 7;
    vector<long long> dp(n + 1, 0);
    dp[0] = 1;

    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= 6; ++j) {
            if (i - j >= 0) {
                dp[i] = (dp[i] + dp[i - j]) % MOD;
            }
        }
    }

    return dp[n];
}
```

/*
Example Usage:
int main() {
    cout << diceCombinations(1) << endl; // 1
    cout << diceCombinations(2) << endl; // 2
    cout << diceCombinations(3) << endl; // 4
}
*/
