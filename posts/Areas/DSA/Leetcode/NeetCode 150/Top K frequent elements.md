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
- Use another array's **index to store** the elements whose **freq are the same** as the index it's being stored into, this will help to find the k most freq elements in linear time
- Another approach can be to traverse through the freq hashmap and in each iteration get the max value but it'll be O(nk) complexity.
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
### Alternate solution (Inefficient)
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
        
        res = []
        
        for i in range(0, k):
            max_till_now = -10
            for key, val in freq.items():
                max_till_now = key if val >= freq.get(max_till_now, -100) else max_till_now
            freq[max_till_now] = -100
            res.append(max_till_now)
        return res
```
---
### Things to note:
- `freq_arr` need to be `len(nums + 1)` as the max frequency of an element can be `len(nums)`, as array is 0 based we need to create _len + 1_
- Iterate the `freq_arr` from **rightside** 
- **DO NOT** use `[list()]*len` to create `freq_arr` array as it'll create the same list instance for all the array elements and the values will be repeated.