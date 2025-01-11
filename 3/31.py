
def convert_matrix(lines):
    matrix = []
    for line in lines:
        matrix.append([char for char in line if char != '\n'])
    return matrix

def movement(start_x, end_x, start_y, end_y, matrix) -> bool:
    for x in range( max(start_x, 0), min(len(matrix), end_x + 1)):
        for y in range(max(start_y, 0), min(len(matrix), end_y + 1)):
            if matrix[x][y] != '.' and not matrix[x][y].isnumeric():
                return True
    return False

def find_number(j, line):
    for k in range(j, len(line)):
        if not line[k].isdigit():
            return k - 1
    return j


file = open('test.txt', 'r')
# file = open('test1.txt', 'r')

matrix = convert_matrix(file.readlines())
solutions = []
sum = 0

for i in range(len(matrix)):
    j = 0
    while j < len(matrix):
        if matrix[i][j].isdigit():
            # Find numbers
            endIndex = find_number(j,matrix[i])
            # find number near to symbols
            for k in range(j, endIndex + 1):
                if movement(i - 1, i + 1, k - 1, k + 1, matrix):
                    sum += int(''.join(matrix[i][j:endIndex+1]))
                    break
            j = endIndex
        j += 1

print(sum)

file.close()