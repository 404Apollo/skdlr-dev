
more_tasks = ["hello", "12", "14"]

with open('Tasklist.txt', 'a') as f:
    f.writelines('\n'.join(more_tasks))