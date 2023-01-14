console.log("welcome to Spotify")
// initialise the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songs = [
    {songNmae : "Middle of the night", filePath: "/1.mp3",coverPath: "cover.jpj"},
    {songNmae : "Beliver", filePath: "/1.mp3",coverPath: "cover.jpj"},
    {songNmae : "Let me love you", filePath: "/1.mp3",coverPath: "cover.jpj"},
    {songNmae : "Unholy", filePath: "/1.mp3",coverPath: "cover.jpj"},
    {songNmae : "Shape of You", filePath: "/1.mp3",coverPath: "cover.jpj"},
    {songNmae : "Ignite", filePath: "/1.mp3",coverPath: "cover.jpj"},
    {songNmae : "Willow", filePath: "/1.mp3",coverPath: "cover.jpj"},
]


// audioElement.play();

//Play/Pulse Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})
document.getElementsByClassName('songItemPlay').forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e);
    })
})
