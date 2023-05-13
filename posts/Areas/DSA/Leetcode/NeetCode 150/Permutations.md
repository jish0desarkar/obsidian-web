### Links
- Leetcode -  <https://leetcode.com/problems/permutations/>
- Neetcode - <https://www.youtube.com/watch?v=s7AvT7cGdSo>
---
### Question
-  Given an array `nums` of distinct integers, return _all the possible permutations_. You can return the answer in **any order**.

---
### Expected input/output
```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```
---
### Key Ideas
- 
---
### Solution
```python
class Solution:
    def permute(self, nums: List[int]) -%3E List[List[int]]:
        res = []

        # base case
        if len(nums) == 1:
            return [nums[:]]  # nums[:] is a deep copy

        for i in range(len(nums)):
            n = nums.pop(0)
            perms = self.permute(nums)

            for perm in perms:
                perm.append(n)
            res.extend(perms)
            nums.append(n)
        return res
```

---
### Things to note:
- 