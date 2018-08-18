import RenderUtils from './renderUtils';

class Utils extends RenderUtils {
  
  scrollTo(element, to, duration, isHorizontal, callback) {

    if (this.isMobile()) {
      duration = 0; //do not animate scroll on mobile (looks jumpy and buggy)
    }

    var easeInOutQuad = function easeInOutQuad(currentTime, start, change, duration) {
      //t = current time
      //b = start value
      //c = change in value
      //d = duration
      if (duration === 0) {
        return change + start;
      }

      currentTime /= duration / 2;
      if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
      }
      currentTime--;
      return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    };

    var start = isHorizontal ? element.scrollLeft : element.scrollTop;
    var change = to - start;
    var currentTime = 0;
    var increment = 20;

    var animateScroll = function animateScroll() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        element.setAttribute('data-scrolling', '');
        if (typeof callback === 'function') {
          callback();
        }
      }

      if (isHorizontal) {
        element.scrollLeft = val;
      } else {
        element.scrollTop = val;
      }
    };

    element.setAttribute('data-scrolling', 'true');
    animateScroll();
  }
}


export default new Utils();
