
# Problem 1 – Prices Trends

You are given a **list of prices**. Your task is to **print them in a HTML table** : the first column holds a **price** ; the second column holds a **trend**. The trend is either fixed (no change) or moving up or moving down. **Fixed** is the trend of the first price and when the previous price is the same as the current price (after rounding). **Moving up** is when the current price is greater than the previous price (after rounding). **Moving down** is when the current price is less than the previous price (after rounding). All numbers are **rounded to 2 digits after the decimal point**. See the examples below for better understanding.

### Input

The input is passed to the first JavaScript function found in your code as **array of strings** holding the input numbers.The input data will always be valid and in the format described. There is no need to check it explicitly.

### Output

Print at the console the prices / trends HTML table following the examples below. The table has a fixed header defining 2 columns: **Price** and **Trend**. The prices column should hold the price, **rounded to 2 decimal places**. The trend is calculated **after rounding** (with 2 decimal places) and can be &quot; **fixed**&quot;, &quot; **up**&quot; or &quot; **down**&quot;. **Whitespace** and character **casing** are important, so please use the same as in the below examples.

### Constraints

- The **count** of input numbers is in the range [0…1 000].
- All **input numbers** are in the range [0…1 000 000].
- Allowed working time: 0.2 seconds. Allowed memory: 16 MB.

### Examples

####  Input #1 ####
```
50
60
```
#### Output #1 ####
```
<table>
<tr><th>Price</th><th>Trend</th></tr>
<tr><td>50.00</td><td><img src="fixed.png"/></td></tr>
<tr><td>60.00</td><td><img src="up.png"/></td></tr>
</table>
```

#### Input #2 ####
```
 36.333
 36.5
 37.019
 35.435
 35.001
 36.225 
```
#### Output #2 ####
```
<table>
<tr><th>Price</th><th>Trend</th></tr>
<tr><td>36.33</td><td><img src="fixed.png"/></td></tr>
<tr><td>36.50</td><td><img src="up.png"/></td></tr>
<tr><td>37.02</td><td><img src="up.png"/></td></tr>
<tr><td>35.40</td><td><img src="down.png"/></td></tr>
<tr><td>35.00</td><td><img src="down.png"/></td></tr>
<tr><td>35.00</td><td><img src="fixed.png"/></td></tr>
<tr><td>36.23</td><td><img src="up.png"/></td></tr>
</table>
```