console.log("welcome to Spotify");
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let songs =[
    
    {songName:"Rockstar",filePath:"1.mp3",coverpath:"1.jpg"},
    {songName:"Rockstar",filePath:"1.mp3",coverpath:"1.jpg"},
    {songName:"Rockstar",filePath:"1.mp3",coverpath:"1.jpg"},
    {songName:"Rockstar",filePath:"1.mp3",coverpath:"1.jpg"},
    {songName:"Rockstar",filePath:"1.mp3",coverpath:"1.jpg"},
    {songName:"Rockstar",filePath:"1.mp3",coverpath:"1.jpg"},
    {songName:"Rockstar",filePath:"1.mp3",coverpath:"1.jpg"},
    {songName:"Rockstar",filePath:"1.mp3",coverpath:"1.jpg"},
    {songName:"Rockstar",filePath:"1.mp3",coverpath:"1.jpg"},
    {songName:"Rockstar",filePath:"1.mp3",coverpath:"1.jpg"},
    
] 

// audioElement.play();

// Handle play /pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }

})

// Listen to Events
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})