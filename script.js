var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    })(456);
})(123);



function OuterFunction() {
    let length = 20;
    function InnerFunction() {
        let breadth=50;
        console,console.log(`The area of the rectangle is:->`,length*breadth);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();