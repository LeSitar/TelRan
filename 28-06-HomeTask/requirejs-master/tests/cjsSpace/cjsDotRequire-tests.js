require({
        baseUrl: './'
    },
    ['28-06-HomeTask/requirejs-master/tests/plugins/a', 'c'],
    function(a, c) {
        doh.register(
            'cjsDotRequire',
            [
                function cjsDotRequire(t){
                    t.is('a', a.name);
                    t.is('b', a.b.name);
                    t.is('c', c.name);
                }
            ]
        );
        doh.run();
    }
);
