define(["require", "exports", "TerminalJs"], function (require, exports, TerminalJs) {
    TerminalJs.terminalJs.AddState("main", "view/index.html", function (value, isBack) {
        // loadPage(value)
    });
    TerminalJs.terminalJs.AddState("testArr", ["a,b", "c,d"], function (arr, isBack) {
        // processAttr(arr)
    }, true, TerminalJs.terminalJs.StateTypes.Array);
    TerminalJs.terminalJs.AddState("title", "TerminalJs", function (value, isBack) {
        document.getElementById("title").innerHTML = value;
    });
    TerminalJs.terminalJs.AddState("testObj", { a: { b: ["123"] } }, function (v) {
        console.log(v);
    });
    setTimeout(function () {
        TerminalJs.terminalJs.ExeCmd("$testObj/a.b/+234");
    }, 3000);
    TerminalJs.terminalJs.MonitorUrl().MonitorDom().Init();
});

