function walk() {
    console.log("walking");
run();
}

function run(){
    console.log("running");
    setTimeout(()=>{
        console.log("drinkimg water");
    },2000);
    rest();
}

function rest() {
    console.log("rest");
}

walk();

