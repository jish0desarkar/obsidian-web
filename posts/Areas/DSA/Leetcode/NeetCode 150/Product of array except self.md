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
![[Screenshot 2023-05-13 at 10.53.14 PM.png]]
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
- Idea of the efficient solution is the same as the prefix and postfix prod, except instead of storing the pre and post prod to different arrays compute it with the same result array by **traversing the array twice** from each end. **The left -> right pass gives the *prefix* and right -> left pass gives the *postfix****.
- Traverse the array from left to right and store the prefix product one step to the right.
- Traverse the array from right to left and multiply with the value one step to the left and store.
- The above steps are done as the **current element's multiply should be excluded**. **If included then store the post and prefix prod to the current index and not one step left or right**
- (Watch neetcode for clarification)