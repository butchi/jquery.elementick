/*
 *  jquery.elementick
 *  author: IWABUCHI Yu(u)ki
 */

;(function($) {
    'use strict';

    /**
     *  option.duration
     *  option.nodeType
     *  option.step {function} callback called for every speps
     *  option.position {number} action target index in node
     */
    $.fn.elementick = function(option) {
        var opts = $.extend({}, $.fn.elementick.defaults, option);

        var $elm = $(this);

        var $node = $elm.contents().filter(function() {
            return this.nodeType === opts.nodeType;
        });

        function tick(i, node) {
            var cnt = 0;
            var origVal = node.data; // node's initial data

            var timerId = window.setInterval(function() {
                opts.step(cnt, node, origVal);
                cnt++;
            }, opts.duration);
        }

        if(typeof opts.position === 'number') {
            tick(0, $node.get(opts.position));
        } else {
            $node.each(tick);
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
