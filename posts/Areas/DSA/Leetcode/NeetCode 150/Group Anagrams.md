
### Links
- Leetcode -  <https://leetcode.com/problems/group-anagrams/>
- Neetcode - <https://www.youtube.com/watch?v=vzdNOK2oB2E>

### Question
-  Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.
- An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 


```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```
---
### Key Idea
- Using of `count` array to mark specific indices.
- `defaultdict` so no keyerror is thrown
- `ord(c)` to find ascii of a character
---
### Solution
```python
class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        res = defaultdict(list) # returns list if key is not found
        
        for s in strs:
            count = [0]*26
            for i in s: 
                count[ord(i) - ord('a')] += 1 # ord('a') = ASCII of a
                # to map a -> count[0], b -> count[1]
            res[tuple(count)].append(s) # list cannot be key
        
        return res.values()
```

### Things to note:
1. use `count` to map all the strings, this way any anagram would result in the same array
2. Use the `count` as key of the dictionary
	1. `List` cannot be used as key hence convert to `tuple`