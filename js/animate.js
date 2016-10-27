/**
 * Created by vitalik on 26.10.16.
 */
/**
 *@function wow.init()- function for animate in site
 *@param {object}
 */
wow = new WOW(
    {
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
wow.init();


