require(['28-06-HomeTask/requirejs-master/tests/plugins/complexNormalize/sub/modA1', 'sub/plugin!modB1'], function (modAName, modBName) {
    doh.register(
        'pluginComplexNormalize',
        [
            function pluginComplexNormalize(t){
                t.is(true, /normalized/i.test(modAName));
                t.is(true, /normalized/i.test(modBName));
            }
        ]
    );
    doh.run();
});
