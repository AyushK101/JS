function closures(vv) {

    function hero() {
        function zwe() {
            setTimeout(function he() {
                console.log(vv);
            },4000);
        }
        return zwe();
    }
    return hero();
}

closures("hehe");