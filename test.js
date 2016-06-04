//HTML

<div class="terminal-window">
    <header>
    </header>
    <section class="terminal">
    <div class="history"></div>
    &nbsp;<span class="prompt"></span>
    <span class="typed-cursor"></span>

    </section>
    </div>
    <!-- data -->
    <div class="terminal-data mimik-run-output">
    <br>life.js<br>
    ----------------------------------------------<br>

while (alive) {
<br>&nbsp;&nbsp;if (day === dayOfWeek[4] || dayOfWeek[5]) {
    <br>&nbsp;&nbsp;&nbsp;if (!work) {
        <br>&nbsp;&nbsp;&nbsp;&nbsp;drinkBeer();
        <br>&nbsp;&nbsp;} else {
        <br>&nbsp;&nbsp;&nbsp;write(function(noMoreWorkPlease, workDone) {
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (noMoreWorkPlease) return drinkBeer();
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert(workDone);
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;drinkBeer();
                <br>&nbsp;&nbsp;&nbsp;&nbsp;});
        <br>&nbsp;&nbsp;&nbsp;}
    <br>&nbsp;&nbsp;} else {
    <br>&nbsp;&nbsp;&nbsp;write();
    <br>&nbsp;&nbsp;&nbsp;read();
    <br>&nbsp;}
<br>}

</div>


/////Javascript:
$(function() {
    var data = [
        {
            action: 'type',
            strings: ["david@WindUpDurb-Ubuntu:~$ gedit life.js"],
            output: '',
            postDelay: 1000
        },
        {
            action: 'type',
            //clear: true,
            strings: [''],
            output: $('.mimik-run-output').html()
        },
        {
            action: 'type',
            strings: ["david@WindUpDurb-Ubuntu:~$ node life.js"],
            output: ' ',
            postDelay: 1000
        },


    ];
    runScripts(data, 0);
});

function runScripts(data, pos) {
    var prompt = $('.prompt'),
        script = data[pos];
    if(script.clear === true) {
        $('.history').html('');
    }
    switch(script.action) {
        case 'type':
            // cleanup for next execution
            prompt.removeData();
            $('.typed-cursor').text('');
            prompt.typed({
                strings: script.strings,
                typeSpeed: 30,
                callback: function() {
                    var history = $('.history').html();
                    history = history ? [history] : [];
                    history.push('$ ' + prompt.text());
                    if(script.output) {
                        history.push(script.output);
                        prompt.html('');
                        $('.history').html(history.join('<br>'));
                    }
                    // scroll to bottom of screen
                    $('section.terminal').scrollTop($('section.terminal').height());
                    // Run next script
                    pos++;
                    if(pos < data.length) {
                        setTimeout(function() {
                            runScripts(data, pos);
                        }, script.postDelay || 1000);
                    }
                }
            });
            break;
        case 'view':

            break;
    }
}






























