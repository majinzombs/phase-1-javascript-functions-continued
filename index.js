// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
};

function mondayWork(goto ='go to the office'){
    return (`This Monday, I will ${goto}.`)
}


function wrapAdjective (wrap =' * '){
    const inner = function(wrap2 = 'special'){
        return(`You are ${wrap}${wrap2}${wrap}!`);
    }
    return inner
}