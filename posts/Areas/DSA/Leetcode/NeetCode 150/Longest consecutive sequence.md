### Links
- Leetcode -  <https://leetcode.com/problems/longest-consecutive-sequence/description/>
- Neetcode - <https://www.youtube.com/watch?v=P6RZZMu_maU>
---
### Question
-  Given an unsorted array of integers `nums`, return _the length of the longest consecutive elements sequence._

You must write an algorithm that runs in `O(n)` time.

---
### Expected input/output
```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```
---
### Key Ideas
- 
---
### Solution
```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums) # or a hashmap can be created by iterating nums
        longest = 0

        for n in nums:
            # check if its the start of a sequence
            if (n - 1) not in numSet:
                length = 1
                while (n + length) in numSet: # keep checking n+1, n+2
                    length += 1
                longest = max(length, longest)
        return longest

```
---
### Alternate Solution
```python
class Solution(object):
    def longestConsecutive(self, nums):
        h = {}
        longest = 0
        
        for i in nums:
            h[i] = True

        for i in nums:
            # check if element starts a seq
            if h.get(i-1) is None:
                length = 1 # length of new seq started by i
                while h.get(i+length) is not None:
                    length += 1
                longest = max(longest, length)
    
        return longest
```
---
### Things to note:
- 