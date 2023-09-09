//song list
let All_song = [
    {
      name: "Twelve - Walk My Walk (Lyrics)",
      artist: "SauceOnly",
      src: "music-7"
    },
    {
      name: "Ikson Anywhere – Ikson",
      artist: "Audio Library",
      src: "music-2"
    },
    {
      name: "Beauz & Jvna - Crazy",
      artist: "Beauz & Jvna",
      src: "music-3"
    },
    {
      name: "Hardwind - Want Me",
      artist: "Mike Archangelo",
      src: "music-4"
    },
    {
      name: "Jim - Sun Goes Down",
      artist: "Jim Yosef x Roy",
      src: "music-5"
    },
    {
      name: "Lost Sky - Vision NCS",
      artist: "NCS Release",
      src: "music-6"
    },
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="images/${All_song[i].src}.jpg"/>
       </div>
       <div class="more">
       <audio src="music/${All_song[i].src}.mp3" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].artist}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
 /*please follow all the rules so that you do not face any problem*/