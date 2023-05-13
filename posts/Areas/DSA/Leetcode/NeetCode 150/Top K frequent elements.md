### Links
- Leetcode -  <https://leetcode.com/problems/top-k-frequent-elements/>
- Neetcode - <https://www.youtube.com/watch?v=YPTqKIgVk-k>
---
### Question
-  Given an integer array `nums` and an integer `k`, return _the_ `k` _most frequent elements_. You may return the answer in **any order**.

---
### Expected input/output
```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```
---
### Key Ideas
- Count frequency of all chars using hashmap
- 
---
### Solution
```python
class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        # counting freq of all elements
        freq = {}

        for i in nums:
            freq[i] = 1 + freq.get(i, 0) # get the value of freq[i] or return 0
        
        freq_arr = [[] for i in range(len(nums) + 1)]
        res = []

        for key, val in freq.items():
            freq_arr[val].append(key)
        
        for i in range(len(freq_arr)-1, 0, -1):
            for j in freq_arr[i]:
                res.append(j)
            if len(res) == k:
                return res
```

---
### Things to note:
- 