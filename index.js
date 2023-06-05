var compose = function(functions) {
    let stack = functions
	return function(x) {
        return stack.reverse().reduce((acc, cur) => cur(acc), x)
    }
};

