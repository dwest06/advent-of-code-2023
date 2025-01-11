from pprint import pprint 


def read_numbers(line):
    listas = line.split(":")[1].strip().replace("  ", " ").split(" | ")
    g1 = listas[0].strip().split(" ")
    g2 = listas[1].strip().split(" ")

    return g1, g2

def readlines(lines):
    count = 0
    for line in lines:
        table = {}
        winners = 0
        count_line = 0
        g1, g2 = read_numbers(line)

        for winner in g1:
            table[winner] = True

        for num in g2:
            if num in table:
                winners += 1
        count_line = 2 ** (winners - 1) if winners > 0 else 0
        count += count_line
    return count


def part2(lines):
    cards = [0 for i in range(len(lines))]

    for number, line in enumerate(lines):
        table = {}
        winners = 0
        g1, g2 = read_numbers(line)

        for winner in g1:
            table[winner] = True

        for num in g2:
            if num in table:
                winners += 1

        cards[number] += 1
        for i in range(winners):
            cards[number + i + 1] += cards[number]

    # pprint(cards)
    return sum(cards)



# file = open('test.txt', 'r')
file = open('test1.txt', 'r')
# file = open('test2.txt', 'r')

# print("Final Count: " , readlines(file.readlines()))
print("Final count Part2: ", part2(file.readlines()))


file.close()