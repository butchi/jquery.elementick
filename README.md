jquery.elementick
=================

                提             供             

    ██╗  ██╗ █████╗ ██╗   ██╗ █████╗  ██████╗
    ██║ ██╔╝██╔══██╗╚██╗ ██╔╝██╔══██╗██╔════╝
    █████╔╝ ███████║ ╚████╔╝ ███████║██║     
    ██╔═██╗ ██╔══██║  ╚██╔╝  ██╔══██║██║     
    ██║  ██╗██║  ██║   ██║   ██║  ██║╚██████╗
    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝

    [http://www.kayac.com/](http://www.kayac.com/)


jQuery Element Ticker Plugin


## Sample

```

// tick comment in body's children
$('body').elementick();

// tick title text
$('head title').elementick({
    nodeType: document.TEXT_NODE,
});

// tick h1 text
$('h1').elementick({
    nodeType: document.TEXT_NODE,
    duration: 500
});

// tick .sample element's text
$('.sample').elementick({
    nodeType: document.TEXT_NODE,
    duration: 1000,
    position: 1,
    step: function(i, node, origVal) {
        if(i % 2) {
            node.data = origVal;
        } else {
            node.data = '';
        }
    },
});
```