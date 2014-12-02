angular.module('overlay', [])
.directive('itemOverlay', function () {
    return {
        restrict: 'AE',
        templateUrl: "templates/overlay.html",
        compile: function(element, attrs) {

                attrs.color = (!attrs.color) ? '#000' : attrs.color;
                attrs.opacity = (!attrs.opacity) ? '0.4' : attrs.opacity;

                element.css({
                    'position':'absolute',
                    'top':'0',
                    'left':'0',
                    'right':'0',
                    'bottom':'0',
                    'z-index':'100',
                    'visibility':'hidden',
                    'opacity':attrs.opacity,
                    'background-color':attrs.color
                });

                return {
                 post: function(scope, element){
                    element.parent().bind("mouseenter", function(){
                      element.css({'visibility':'visible'});
                    });

                    element.parent().bind("mouseleave", function(){
                      element.css({'visibility':'hidden'});
                    });
                 }
               }
        }
    };
});
