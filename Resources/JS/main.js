const contentHeader = document.getElementById("header_text");
const contentText = document.getElementById("info_para");

const heianScreen = document.getElementById('heian_screen');
const heianPic = document.getElementById('heian_pic');
const heianUkiyo = document.getElementById('heian_ukiyo');
const iseShrine = document.getElementById('ise1_cont');
const iseCourt = document.getElementById('ise2_cont');
const iseMonogatari = document.getElementById('ise3_cont');

const allPictures = [heianScreen, heianPic, heianUkiyo, iseShrine, iseCourt, iseMonogatari];

const kyotoPictures = [heianScreen, heianPic, heianUkiyo];
const isePictures = [iseShrine, iseCourt, iseMonogatari]

let activePictures = [];


const checkToggleStatus = () => {

    let displayVisible = document.getElementById('info_kanban');

    if (displayVisible === "none") {
        return false;
    } else {
        return true;
    }

}

const hideAllPics = arr => {
    arr.forEach(element => element.style.display = 'none');
}

const showAllPics = arr => {
    arr.forEach(element => element.style.display = 'flex');
}



const showPylly = () => {

    let x = document.getElementById("info_kanban");

    if (activePictures.length != 0) {
        hideAllPics(activePictures);
    }

    activePictures = isePictures;

    x.style.display = "block";

    contentHeader.innerHTML = 'Isen pylly';
    contentText.innerHTML = 'This is where the tram stops';

    showAllPics(activePictures);

}

function showKyoto() {

    let x = document.getElementById("info_kanban");

    if (activePictures.length != 0) {
        hideAllPics(activePictures);
    }

    activePictures = kyotoPictures;

    x.style.display = "block";

    contentHeader.innerHTML = 'Kyoto';
    contentText.innerHTML = 'This is where the ancient capital was!';

    showAllPics(activePictures);


}