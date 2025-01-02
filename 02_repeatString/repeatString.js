const repeatString = function(value,num) {
    temp =''; i =0;
    while (i<num){
        temp += value; i++;
    }
    if (num<0){return "ERROR"}
    return temp
};

// Do not edit below this line
module.exports = repeatString;