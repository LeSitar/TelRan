require({
    nodeIdCompat: true,
    packages: [{
        name: 'foo',
        location: 'node_modules/foo',
        main: 'lib/index'
    }]
}, ['28-06-HomeTask/requirejs-master/tests/specialDeps/foo'], function (foo) {

    doh.register(
        'packagesNode',
        [
            function packagesNode(t){
                t.is('foo', foo.name);
                t.is('bar', foo.bar.name);
                t.is('baz', foo.baz.name);
                t.is('bar', foo.baz.bar.name);
            }
        ]
    );
    doh.run();
});
