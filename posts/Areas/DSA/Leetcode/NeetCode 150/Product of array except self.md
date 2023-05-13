### Links
- Leetcode - <https://leetcode.com/problems/product-of-array-except-self/description/>
- Neetcode - <https://www.youtube.com/watch?v=bNvIQI2wAjk>
---
### Question
-  Given an integer array `nums`, return _an array_ `answer` _such that_ `answer[i]` _is equal to the product of all the elements of_ `nums` _except_ `nums[i]`.
- The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.
- You must write an algorithm that runs in `O(n)` time and without using the division operation.

---
### Expected input/output
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```
---
### Key Ideas
- Questions with *sum or product of an element till this point* or using other elements except self, try to use *prefix or postfix sum logic*
- Try to use multiple passes of an array.
---
### Solution
```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * (len(nums))

        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]
        postfix = 1
        for i in range(len(nums) - 1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]
        return res

```

---
### Alternate Solution (with o(n) extra space)

```python
class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """

        prefix_mul = [nums[0]]
        suffix_mul = [1]*len(nums)

        for i in range(1, len(nums)):
            prefix_mul.append(prefix_mul[i-1]*nums[i])

        for i in range(len(nums) - 1, -1, -1):
            if i == len(nums) - 1:
                suffix_mul[i] = nums[i]
            else:
                suffix_mul[i] = suffix_mul[i+1] * nums[i]

        res = [None]*len(nums)

        for i in range(0, len(nums)):
            if i == 0:
                res[i] = suffix_mul[1]
            elif i == len(nums)-1:
                res[i] = prefix_mul[i-1]
            else:
                res[i] = prefix_mul[i-1] * suffix_mul[i+1]
        return res
```
---
### Things to note:
- 