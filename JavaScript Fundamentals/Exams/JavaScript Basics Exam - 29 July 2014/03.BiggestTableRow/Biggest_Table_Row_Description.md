# Problem 3 – Biggest Table Row

You are given a **HTML table** of 4 columns: **Town** , **Store1** , **Store2** and **Store3**. It consists of sequence of text lines: the &quot; **&lt;table&gt;**&quot; tag, the header row, several data rows, and **&quot;&lt;/table&gt;**&quot; tag (see the examples below). The **Store1** , **Store2** , and **Store3** columns hold either numbers or &quot; **-**&quot; (which means &quot; **no data**&quot;). Your task is to write a JavaScript function which parses the table data rows and finds the row with a **maximal sum** of its values.

## Input

The input is passed to the first JavaScript function found in your code as **array of strings** holding the table lines.The input data will always be valid and in the format described. There is no need to check it explicitly.

## Output

Print at the console a single line, holding the data row values with a **maximal sum** in format: &quot; **sum = value1 + values2 + …**&quot;. Print the values exactly as they were found in the input (no rounding, no reformatting). If all rows contain no data, print &quot; **no data**&quot;. If two rows have the **same maximal sum** , print the first of them.

### Constraints

- The **count** of input numbers is in the range [0…1 000].
- The columns **Store1** , **Store2** and **Store3** hold numbers in the range [-100 0000…100 000].
- There is **no whitespace** anywhere in the data rows.
- Allowed working time: 0.2 seconds. Allowed memory: 16 MB.

### Examples

### **Input #1** ###
```
<table>
<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>
<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>
<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>
<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>
<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>
</table>
```
### **Output #1** ###
```
65.3 = 11.2 + 18.00 + 36.10
```

### **Input #2** ###
```
<table>
<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>
<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>
</table>
```
### **Output #2** ###
```
no data
```

### **Input #3** ###
```
<table>
<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>
<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>
<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>
<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>
</table>
```
### **Output #3** ###
```
50000 = 50000.0
```
