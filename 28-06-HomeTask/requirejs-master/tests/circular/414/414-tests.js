require({
        baseUrl: requirejs.isBrowser ? './' : './circular/414'
    },
    ["28-06-HomeTask/requirejs-master/tests/circular/414/MyClass"],
    function(MyClass) {
        doh.register(
            "circular414",
            [
                function circularComplexPlugin(t) {
                    t.is("MyClass,A,B,C:MyClass,A,B,C:MyClass,A,B,C:MyClass,A,B,C", MyClass.sayAll());
                 }
            ]
        );
        doh.run();
    }
);
