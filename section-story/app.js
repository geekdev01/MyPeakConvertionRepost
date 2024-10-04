//Affichage du bouton de recherche lorsque l'on survole l'image avec la souris(effet hover)
//start
document.getElementById('div-main-image').addEventListener('mouseenter', () => {
    document.querySelector('.btn-main-image').style.display = 'block';
});

document.getElementById('div-main-image').addEventListener('mouseout', () => {
    document.querySelector('.btn-main-image').style.display = 'none';
});

document.querySelectorAll('.div-detail-image').forEach((elt, index) => {
    elt.addEventListener('mouseenter', () => {
        elt.lastElementChild.style.display = 'block';
    });
});

document.querySelectorAll('.div-detail-image').forEach((elt, index) => {
    elt.addEventListener('mouseout', () => {
        elt.lastElementChild.style.display = 'none';
    });
});

//start


//Affichage des images en grand format lorsque l'on clique dessus 
document.getElementById('div-main-image').addEventListener('click', () => {
    document.querySelector('.gallerie-image-cover').style.display = 'block';
});
document.querySelectorAll('.div-detail-image').forEach((elt, index) => {
    elt.addEventListener('click', () => {
        document.querySelector('.gallerie-image-cover').style.display = 'block';
    });
});

document.querySelector('.gallerie-image-cover').addEventListener('click', () => {
    document.querySelector('.gallerie-image-cover').style.display = 'none';
});



//Affichage de la video (la storie)
const thumbnails = document.querySelectorAll('.video-thumbnail');
const modal = document.getElementById('videoModal');
const video = modal.querySelector('video');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const videoSrc = thumbnail.querySelector('video').src;
        video.src = videoSrc;
        modal.style.display = 'block';
        video.play();

    });
});

document.querySelector('.tools-btn-out').addEventListener('click', () => {
    modal.style.display = 'none';
    video.src = '';
});

document.querySelector('.tools-btn-pause').addEventListener('click', () => {
    video.pause();
    document.querySelector('.tools-btn-pause').style.display = 'none';
    document.querySelector('.tools-btn-play').style.display = 'block';
});

document.querySelector('.tools-btn-play').addEventListener('click', () => {
    video.play();
    document.querySelector('.tools-btn-pause').style.display = 'block';
    document.querySelector('.tools-btn-play').style.display = 'none';
});

document.querySelector('.tools-btn-son').addEventListener('click', () => {
    video.muted=true;
    document.querySelector('.tools-btn-son').style.display = 'none';
    document.querySelector('.tools-btn-muted').style.display = 'block';
});

document.querySelector('.tools-btn-muted').addEventListener('click', () => {
    video.muted=false;
    document.querySelector('.tools-btn-muted').style.display = 'none';
    document.querySelector('.tools-btn-son').style.display = 'block';
});




