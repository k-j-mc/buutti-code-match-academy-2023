const text3 = "monkeys " + 6 + 6;

// 1. Summing operands have left hand associativity, so it evaluates from left to right
// If the constant (or variant) would begin with numbers, it would then sum those numbers rather than print them out as a string

const fixedText3 = "monkeys " + (6 + 6);

console.log(fixedText3);
