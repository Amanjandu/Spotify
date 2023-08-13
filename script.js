console.log("Welcome to spotify")


//Instilalise the variables  
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    { songName: "Ocean Eyes - Amrinder Gill", filePath: "songs/1.mp3", coverPath: "covers/Ocean Eyes.jpeg" },
    { songName: "Cheque - Shubh", filePath: "songs/2.mp3", coverPath: "covers/Cheque.jpeg" },
    { songName: "Tera Canada - Himmat Sandhu", filePath: "songs/3.mp3", coverPath: "covers/Tera Canada.jpg" },
    { songName: "Chorni - Sidhu Mossewala", filePath: "songs/4.mp3", coverPath: "covers/Chorni.jpeg" },
    { songName: "Fame - Nirvair Pannu", filePath: "songs/5.mp3", coverPath: "covers/Fame.jpg" },
    { songName: "Khayaal - Talwinder", filePath: "songs/6.mp3", coverPath: "covers/khayaal.jpeg" },
    { songName: "Rubicon Drill - Parmish Verma", filePath: "songs/7.mp3", coverPath: "covers/rubicon drill.jpeg" },
    { songName: "Tera Saath - Talwinder", filePath: "songs/8.mp3", coverPath: "covers/Tera sath.jpeg" },
    { songName: "Boss Walk - Nirvair Pannu", filePath: "songs/9.mp3", coverPath: "covers/Boss Walk.jpg" },
    { songName: "World Wide - Arjan Dhillon", filePath: "songs/10.mp3", coverPath: "covers/World Wide.jpeg" },
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to Event
audioElement.addEventListener('timeupdate', () => {


    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}       

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
         
       songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`songs/${songIndex +1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src =`songs/${songIndex +1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src =`songs/${songIndex +1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
