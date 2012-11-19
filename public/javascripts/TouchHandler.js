// This code uses the "exports" pattern to keep its namespace clean.
// This pattern is used widely in node.
// Contrast it, for example, with any of the prototypical objects like Ball.js.

var TouchHandler = (function() {
    var exports = {};
    var touchBalls = {};
    var page;
    exports.init = function(app) {
        var radius = 20;
        var canvas = app.canvas[0];
        page = app.page;

        function onTouchStart(e) {
            var i, ballConfig, touch, ballLocation;
            e.preventDefault();
            for (i = 0; i < e.changedTouches.length; i++) {
                touch = e.changedTouches[i];
                ballLocation = page.pageToCanvas(touch.pageX, touch.pageY);
                ballConfig = {'x': ballLocation.x,
                              'y': ballLocation.y,
                              'radius': radius,
                              'maxX': app.width,
                              'maxY': app.height,
                              'style': 'red'};
                touchBalls[touch.identifier] = new Ball(ballConfig);
            }
        }

        function onTouchMove(e) {
            var i, touch, ballLocation;
            e.preventDefault();
            for (i = 0; i < e.changedTouches.length; i++) {
                touch = e.changedTouches[i];
                ballLocation = page.pageToCanvas(touch.pageX, touch.pageY);
                if (touchBalls[touch.identifier] !== undefined) {
                  touchBalls[touch.identifier].x = ballLocation.x;
                  touchBalls[touch.identifier].y = ballLocation.y;
                }
            }
        }

        function onTouchCancel(e) {
            // called when browser loses focus (eg, on iOS when it recognizes a gesture)
            touchBalls = [ ];
        }
        
        function onTouchEnd(e) {
            for (i = 0; i < e.changedTouches.length; i++) {
                touch = e.changedTouches[i];
                delete touchBalls[touch.identifier];
            }
        }

        canvas.addEventListener('touchstart', onTouchStart);
        canvas.addEventListener('touchmove', onTouchMove);
        canvas.addEventListener('touchend', onTouchEnd);
        canvas.addEventListener('touchcancel', onTouchCancel);
    }

    exports.drawBalls = function() {
      for (id in touchBalls) {
        ball = touchBalls[id];
        ball.draw.bind(ball)(page)
      }
    };

    return exports;
})();
