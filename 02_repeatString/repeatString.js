const repeatString = function(value,num) {
    temp =''
    for (i=0;i<num;i++){
        temp += value;
    }
    if (num<0) {return "ERROR"};
    return temp;
};

// Do not edit below this line
module.exports = repeatString;