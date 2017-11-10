(function () {
    AmpCa.utils = new AmpCa.Utils();

    AmpCa.initAllSalesforce = function(){
        //Init sliders
        var $sliders = document.querySelectorAll(".js_slider");
        var slidersArr = Array.prototype.slice.call($sliders);
        if (slidersArr.length > 0) {
            loryHelpers.initSliders($sliders);
            AmpCa.utils.postProcessing.exec('slider', {});
        }

        //Video fixes
        var videosArr = Array.prototype.slice.call(document.querySelectorAll(".amp-ca-video"));
        if (videosArr.length > 0) {
            AmpCa.utils.postProcessing.exec('video');
        }

        //Text html converter
        var converter = new showdown.Converter({
            noHeaderId: true,
            simpleLineBreaks: true
        });
        var textArr = Array.prototype.slice.call(document.querySelectorAll('.amp-ca-text'));
        textArr.forEach(function (v) {
            var html = v.innerHTML;
            var text = converter.makeHtml(html);
            v.innerHTML = text
        });
    }

}());