require({
    baseUrl: './',
    paths: {
        a: 'a1'
    },

    map: {
        'a': {
            c: 'c1'
        }
    }
});

require({
        map: {
            'a/sub/one': {
                'c': 'c2'
            }
        }
    },
    ['28-06-HomeTask/requirejs-master/tests/plugins/a', 'b', 'c', 'a/sub/one'],
    function(a, b, c, one) {
        doh.register(
            'mapConfig',
            [
                function mapConfig(t){
                    t.is('c1', a.c.name);
                    t.is('c1/sub', a.csub.name);
                    t.is('c2', one.c.name);
                    t.is('c2/sub', one.csub.name);
                    t.is('c', b.c.name);
                    t.is('c/sub', b.csub.name);
                    t.is('c', c.name);
                }
            ]
        );
        doh.run();
    }
);
