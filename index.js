function receivesAFunction(cb){
    return cb();
}

const someName = function() {
    console.log("something")
}

function returnsANamedFunction(){
    return someName;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("something else");
    }
}