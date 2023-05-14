### Links
- Leetcode -  <https://leetcode.com/problems/valid-sudoku/description/>
- Neetcode - <https://www.youtube.com/watch?v=TjFXEUCMqI8>
---
### Question
-  Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1.  Each row must contain the digits `1-9` without repetition.
2.  Each column must contain the digits `1-9` without repetition.
3.  Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

**Note:**

-   A Sudoku board (partially filled) could be valid but is not necessarily solvable.
-   Only the filled cells need to be validated according to the mentioned rules.

---
### Expected input/output
```

```
---
### Key Ideas
- Break down the problem in *row check*, *column check* and *grid check*
-  `while` loop can be used when traversing a matrix
- Pointer **boundary** conditions are crucial
- Divide the 3x3 grid into 9 squares with indices 0-3
 ---
### Solution
```python
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        cols = collections.defaultdict(set)
        rows = collections.defaultdict(set)
        squares = collections.defaultdict(set)  # key = (r /3, c /3) for 3X3 grid

        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue
                if (
                    board[r][c] in rows[r]
                    or board[r][c] in cols[c]
                    or board[r][c] in squares[(r // 3, c // 3)]
                ):
                    return False
                cols[c].add(board[r][c])
                rows[r].add(board[r][c])
                squares[(r // 3, c // 3)].add(board[r][c])

        return True

```

### Alternate Solution
```python
class Solution(object):
    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """

        # column check

        h = {}

        i, j = 0,0
    
        while j < 9:
            if board[i][j] == '.':
                i += 1
            elif h.get(board[i][j]) is None:
                h[board[i][j]] = True
                i += 1
            else:
                return False
            if i == 9:
                h = {}
                i = 0
                j += 1
        
        # row check

        h = {}

        i, j = 0,0
    
        while i < 9:
            if board[i][j] == '.':
                j += 1
            elif h.get(board[i][j]) is None:
                h[board[i][j]] = True
                j += 1
            else:
                return False
            if j == 9:
                h = {}
                j = 0
                i += 1
        
        # 3X3 grid check
        h = {}

        i, j = 0,0
        start_i, start_j = 0, 0
    
        while start_i < 9 and start_j < 9:
            if board[i][j] == '.':
                j += 1
            elif h.get(board[i][j]) is None:
                h[board[i][j]] = True
                j += 1
            else:
                return False
            if i % 3 == 2 and j % 3 == 0:
                h = {}
                start_j += 3
                if j == 9:
                    start_j = 0
                    start_i += 3
                i, j = start_i, start_j 
            elif j % 3 == 0:
                j = start_j
                i += 1

        return True
```

---
### Things to note:
- Be careful of `i` and `j` *boundary* conditions