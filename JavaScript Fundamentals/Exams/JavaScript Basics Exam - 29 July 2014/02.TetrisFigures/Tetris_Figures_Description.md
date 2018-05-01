# Problem 2 – Tetris Figures
<p align="center">
<img src="https://raw.githubusercontent.com/emilia98/SoftwareUniversity/master/Professional%20Modules/JS%20Core/JavaScript%20Fundamentals/Exams/JavaScript%20Basics%20Exam%20-%2029%20July%202014/tetris_2.png" alt="Tetris"/>
</p>
In the classical Tetris game we have 7 Tetris figures (also called &quot; **tetriminos**&quot;), shown at the figure on the right: **I** , **L** , **J** , **O** , **Z** , **S** and **T**. You are given a rectangular Tetris **game field** consisting of full end empty cells. Your task is to write a JavaScript function to **count the number of each of these 7 tetriminos** (with overlapping, without rotations). For example, on the figure below we have a game field with 2 &quot; **I**&quot;, 1 &quot; **L**&quot;, 5 &quot; **J**&quot;, 3 &quot; **O**&quot;, 3 &quot; **Z**&quot;, 4 &quot; **S**&quot; and 3 &quot; **T**&quot; figures on it.

![Tetris Pieces](https://raw.githubusercontent.com/emilia98/SoftwareUniversity/master/Professional%20Modules/JS%20Core/JavaScript%20Fundamentals/Exams/JavaScript%20Basics%20Exam%20-%2029%20July%202014/tetris.png)
## Input

The input is passed to the first JavaScript function found in your code as **array of strings** holding the game field lines. Each game field line holds only two letters: &#39; **-**&#39; and &#39; **o**&#39; (empty and full cells). All game field lines have the same length. The input data will always be valid and in the format described. There is no need to check it explicitly.

## Output

Print at the console the number of **I** , **L** , **J** , **O** , **Z** , **S** and **T** tetriminos found in the game field (with overlapping and without rotations) as **JSON string** , in the same format like in the sample output below.

## Constraints

- The **size of the game field** is in the range [2…100].
- All **input lines** have the same length and consist only of &#39; **-**&#39; and &#39; **o**&#39; (empty and full cells).
- Allowed working time: 0.2 seconds. Allowed memory: 16 MB.

## Examples

### **Input #1** 
```
--o--o-
--oo-oo
ooo-oo-
-ooooo-
---oo--
```
### **Output #1**
```
{"I":2,"L":1,"J":5,"O":3,"Z":3,"S":4,"T":3}
```

### **Input #2**
```
-oo
ooo
ooo
```
### **Output #2** 
```
{"I":0,"L":1,"J":2,"O":3,"Z":1,"S":2,"T":1}
```
