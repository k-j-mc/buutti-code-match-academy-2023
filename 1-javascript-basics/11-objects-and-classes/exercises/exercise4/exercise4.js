var computer = {
    name: "Buutti SuperCalculator 6000",
    cache: "96 GB",
    clockSpeed: 9001.0,
    overclock: function () {
        this.clockSpeed += 500;
    },
    savePower: function () {
        if (this.clockSpeed > 2000) {
            this.clockSpeed = 2000;
        }
        else {
            this.clockSpeed /= 2;
        }
    },
};
console.log(computer);
computer.overclock();
console.log(computer);
computer.savePower();
console.log(computer);
computer.savePower();
console.log(computer);
