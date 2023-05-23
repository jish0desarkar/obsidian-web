---
link: https://www.notion.so/Valid-Palindrome-d04408a9ba5646efbcab4d6c201fcbf5
notionID: d04408a9-ba56-46ef-bcab-4d6c201fcbf5
---
### Links
- Leetcode -  <https://leetcode.com/problems/valid-palindrome/>
- Neetcode - <https://www.youtube.com/watch?v=jJXJ16kPFWg>
---
### Question
-  A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` _if it is a **palindrome**, or_ `false` _otherwise_.

---
### Expected input/output
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome
```
---
### Key Ideas
- Two pointer shrinking window
---
### Solution
```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        while l < r:
            while l < r and not self.alphanum(s[l]): # Skip whitespace
                l += 1
            while l < r and not self.alphanum(s[r]): # Skip whitespace
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1
        return True

    # Could write own alpha-numeric function
    def alphanum(self, c):
        return (
            ord("A") <= ord(c) <= ord("Z")
            or ord("a") <= ord(c) <= ord("z")
            or ord("0") <= ord(c) <= ord("9")
        )

```

^5e4afb

---
### Alternate Solution
```python

```
---
### Things to note:
- 