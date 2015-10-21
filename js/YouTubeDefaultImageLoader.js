// Load & insert into DOM Youtube iframe_api
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* Create Player */
var player;
 
function onYouTubeIframeAPIReady() {
  
  console.log('Api Loaded');

}

  $(".youtubeVideoLoader").each(function() {
    // Set the BG image from the youtube ID
    $(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');
    
      // Click the video div
      $(document).delegate('#' + this.id, 'click', function() {
        // Vemos le id del video
        console.log(this.id);
        
        // Create new instance of player 
        player = new YT.Player('videoModalContainer', {
          videoId: this.id,
          events: {
            'onReady': OpenModal,
            'onStateChange': console.log('Changed')
          }
        });

        // Show Modal
        function OpenModal() {
          $("#youtubeModal").modal({backdrop: "static"});
          // Set Highres
          player.setPlaybackQuality('highres');
          // Play Video
          player.playVideo();
        };
      });// /click

  }); // /each video

  // Add a Lisener to Modal CLose Button
  $('#CloseModalButton').click(function(){
        console.log('Stop Preset');
        player.destroy();
        //player.stopVideo();
      });
