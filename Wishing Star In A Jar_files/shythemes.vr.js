// video resizing script by shythemes
$(document).ready(function(){
   resizeVideos();
});
function resizeVideos() {
   $('.video iframe:not(.tumblr_video_iframe)').each(function(){
       var vw = $(this).width();
       var vh = $(this).height();
       var scale = $(this).parents('.video').width() / vw;
       $(this).attr({
           width: Math.floor($(this).attr('width') * scale),
           height: Math.floor($(this).attr('height') * scale)
       });
   });
   $('.tumblr_video_iframe').each(function(){
       var vw = $(this).width();
       var vh = $(this).height();
       var scale = $(this).parents('.video').width() / vw;
       $(this).css({
           'transform': 'scale(' + scale + ')',
           'margin': vh * (scale - 1) / 2 + 'px ' + vw * (scale - 1) / 2 + 'px'
       });
       $(this).parents('.tumblr_video_container').css({
           width: Math.floor(vw * ( scale + 1 ) / 2),
           height: Math.floor(vh * ( scale + 1 ) / 2)
       });
   });
}