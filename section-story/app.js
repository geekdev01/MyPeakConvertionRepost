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






