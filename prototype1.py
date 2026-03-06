from rich import print
from rich.text import Text

count = int(input()) + 1
tr_pascal = []
for i in range(1, count):
    step = []
    string = Text("" + (" " * (count-i)))
    for n in range(0, i):
        if n == 0:
            step.append(1)
        elif n == i - 1:
            step.append(1)
        else:
            step.append((tr_pascal[i-2][n-1]+tr_pascal[i-2][n]) % 2)
        element = Text(f"{step[n]} ")
        element.stylize("red") if step[n] % 2 == 0 else element.stylize("green")
        string += element
    print(string)
    tr_pascal.append(step)
