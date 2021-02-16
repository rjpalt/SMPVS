const contentHeader = document.getElementById("header_text");
const contentText = document.getElementById("info_para");

const heianScreen = document.getElementById('heian_screen');
const heianPic = document.getElementById('heian_pic');
const heianUkiyo = document.getElementById('heian_ukiyo');
const iseShrine = document.getElementById('ise1_cont');
const iseCourt = document.getElementById('ise2_cont');
const iseMonogatari = document.getElementById('ise3_cont');

const pictures = [heianScreen, heianPic, heianUkiyo, iseShrine, iseCourt, iseMonogatari];




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


const showPylly = () => {

    let x = document.getElementById("info_kanban");

    console.log(x.style.display)


    if (!checkToggleStatus()) {
        hideAllPics(pictures);
        x.style.display = "block";
        contentHeader.innerHTML = 'Isen pylly';
        contentText.innerHTML = 'This is where the tram stops';
        iseShrine.style.display = 'flex';
        iseCourt.style.display = 'flex';
        iseMonogatari.style.display = 'flex';
    } else {
        hideAllPics(pictures);
        x.style.display = "block";
        contentHeader.innerHTML = 'Isen pylly';
        contentText.innerHTML = 'This is where the tram stops';
        iseShrine.style.display = 'flex';
        iseCourt.style.display = 'flex';
        iseMonogatari.style.display = 'flex';
    }

}

function showKyoto() {

    let x = document.getElementById("info_kanban");

    console.log(x.style.display)


    if (!checkToggleStatus()) {
        hideAllPics(pictures);
        x.style.display = "block";
        contentHeader.innerHTML = 'Kyoto';
        contentText.innerHTML = 'This is where the ancient capital was!';
        heian_screen.style.display = 'flex';
        heian_pic.style.display = 'flex';
        heian_ukiyo.style.display = 'flex';
    } else {
        hideAllPics(pictures);
        x.style.display = "block";
        contentHeader.innerHTML = 'Kyoto';
        contentText.innerHTML = 'This is where the ancient capital was!';
        heian_screen.style.display = 'flex';
        heian_pic.style.display = 'flex';
        heian_ukiyo.style.display = 'flex';
    }

}