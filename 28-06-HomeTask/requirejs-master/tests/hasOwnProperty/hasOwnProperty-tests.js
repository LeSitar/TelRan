require(["28-06-HomeTask/requirejs-master/tests/hasOwnProperty/toString", "hasOwnProperty", "prototype"], function(toString, hop, p) {
        doh.register(
            "hasOwnPropertyTests",
            [
                function hasOwnPropertyTests(t){
                    t.is("toString", toString.name);
                    t.is("hasOwnProperty", hop.name);
                    t.is("prototype", p.name);
                }
            ]
        );
        doh.run();
    }
);
