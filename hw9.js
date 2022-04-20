function protectEmail(emailAdd) {

    let splitted = emailAdd.split("@");
    let part1 = splitted[0];
    let avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    let part2 = splitted[1];
    return part1 + "...@" + part2;
};
console.log(protectEmail("fsalimi777@gmail.com"));
