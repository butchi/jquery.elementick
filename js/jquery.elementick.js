/*
 *  jquery.elementick
 *  author: IWABUCHI Yu(u)ki
 */

;(function($) {
    'use strict';

    $.fn.elementick = function(option) {
        var opts = $.extend({}, $.fn.elementick.defaults, option);

        var $elm = $(this);

        var $node = $elm.contents().filter(function() {
            return this.nodeType === opts.nodeType;
        });

        function tick(i, node) {
            var cnt = 0;
            var origVal = node.data;

            var timerId = window.setInterval(function() {
                opts.step(cnt, node, origVal);
                cnt++;
            }, opts.duration);
        }

        if(opts.position === null || opts.position === undefined) {
            $node.each(tick);
        } else {
            tick(0, $node.get(opts.position));
        }

        return this;
    };

    $.fn.elementick.defaults = {
        duration: 300,
        nodeType: document.COMMENT_NODE,
        step: function(cnt, node, origVal) {
            node.data = node.data.slice(1) + node.data[0];
        }
    };

}(jQuery));
