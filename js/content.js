/* Variables */
//couleur
const greyBackgroundColorDay = '#F2F2F2';
const bleuBackgroundColorNigth = '#05042A';
const whiteBackgroundNav = 'rgba(#FFFFFF, 0.28)';
const whiteBackgroundFooterNight = 'rgba(#FFFFFF, 0.16)';
const whiteColorLinkNav = '#FFFFFF';
const greyColorParaandTitleDay = "#333333";
const greyA = "#999999";
const blueDomWeb = '#5592E8'; 
const blueDomWebDark = '#443E9B';
const blueDomWebMoyen = '#3C55EF';
const greenDomWeb = '#6EF6C6';
const greenDomWebDark = '#33CD6C';
const greenDark = ' #009455';
const yellowDomWeb = '#FFB338';
const redDomWeb = '#BB1600';
const pinkDomWeb = '#FCCEE8';

//pictures
const pictureDay = "url('assets/photos/road-1245901_1920.jpg')";
const pictureNight = "url('assets/photos/tree-736881_1280.jpg')";
const pictureThirdGalleryDvlDay = "url('assets/photos/grand-format/hilly-2572197_1920.jpg')";
const pictureThirdGalleryDvlNight = "url('assets/photos/grand-format/ocean-3605547_1920.jpg')";

const logoDay = "assets/logos/Logo-Dom-Quaintenne-Web-Couleur.png";
const logoNight = "assets/logos/Logo-Dom-Quaintenne-Web-Origin-vb.png";

const mockupPresentationDay = "assets/photos/smartmockups_ke44y6t8.jpg";
const mockupPresentationNight = "assets/photos/smartmockups_ke44x6j6.jpg";
const picturePersonnalityDay = "assets/photos/beach-blur-clouds-dawn-462030.jpg";
const picturePersonnalityNight = "assets/photos/woman-holding-a-moon-3622517.jpg";
const pictureSecondSectionDvlDay = "assets/photos/smartmockups_kea0ogyp.jpg";
const pictureSecondSectionDvlNight = "assets/photos/developpeur-web.jpg";
const pictureThirdSectionDvlDay = "assets/photos/pexels-alex-knight-2599244.jpg";
const pictureThirdSectionDvlNight = "assets/photos/pexels-zachary-debottis-4306929.jpg";
const picturePresWebDesignDay = "assets/photos/pexels-picjumbocom-196644.jpg";
const picturePresWebDesignNight = "assets/photos/silver-imac-displaying-collage-photos-1779487.jpg";
const pictureGalleryDay1 = "assets/photos/smartmockups_kea0pv5y.jpg";
const pictureGalleryDay6 = "assets/photos/Maquette_DevWeb.jpg";
const pictureGalleryDay3 = "assets/icones/icones_XD.png";
const pictureGalleryDay4 = "assets/icones/icones_sass.png"
const pictureGalleryDay5 = "assets/icones/icones_JS.png";
const pictureGalleryNight1 = "assets/photos/smartmockups_kea0qjh8.jpg";
const pictureGalleryNight2 = "assets/photos/smartmockups_kea0nd75.jpg";
const pictureGalleryNight6 = "assets/photos/Maquette_DevWeb-version-nuit.jpg";
const picture1OptiSEODay = "assets/photos/pexels-fauxels-3184287.jpg";
const picture1OptiSEONight = "assets/photos/pexels-pragyan-bezbaruah-1844228.jpg";
const picture1DayGallerySEO = "assets/photos/pexels-cottonbro-3826655.jpg";
const picture1NightGallerySEO = "assets/photos/pexels-isaac-taylor-1557251.jpg";
const picture2DayGallerySEO = "assets/photos/pexels-pixabay-51159.jpg";
const picture2NightGallerySEO = "assets/photos/white-painted-papers-51343.jpg";
const picture3DayGallerySEO = "assets/photos/pexels-daria-shevtsova-1030920.jpg";
const picture3NightGallerySEO = "assets/photos/pexels-ivan-samkov-4238517.jpg";
const picture1DaySecPartSEO = "assets/photos/pexels-david-bares-204511.jpg";
const picture1NightSecPartSEO = "assets/photos/pexels-pixabay-372748.jpg";
const picturePresPassionsDay = "assets/photos/ball-ball-shaped-blur-bubble-302743.jpg";
const picturePresPassionsNight = "assets/photos/ocean-3605547_1920.jpg";
const pictureAstroPassionsNight = "assets/photos/silhouette-of-person-holding-glass-mason-jar-1274260.jpg";
const pictureChantPassionsDay = "assets/photos/pexels-skitterphoto-675960.jpg";
const pictureChantPassionsNight = "assets/photos/music-1290100_1280.jpg";
const picturePaysagePassionsDay = "assets/photos/ship-4925142_1280.jpg";
const picturePaysagePassionsNight = "assets/photos/milkyway-4993930_1280.jpg";
const picturePhotoPassionsDay = "assets/photos/pexels-kaboompics-com-6112.jpg";
const picturePhotoPassionsNight = "assets/photos/pexels-freestocksorg-410734.jpg";

//date et moment de la journée
let dateNow = new Date();
let numDay = dateNow.getDay();
let day = dateNow.getDate();
let numMonth = dateNow.getMonth();
let year = dateNow.getFullYear();
let dayMoment = true;

/* Fonctions de gestion du temps */

function  getFrenchHours() {
    /* Permet de transformer l'heure reçue en heure exploitable */
    //let hours = 01; 
    //let minutes = 30;
    let hours = dateNow.getHours();
    let minutes = dateNow.getMinutes(); 

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let time = hours + "" + minutes;
    return time;
}

function getNameDayInFrench() {
    /* Permet d'afficher le nom du jour en français */
    let nameDayInFrench = "";
    let dayAlertMessage = "";
    switch (numDay) {
        case 0:
            nameDayInFrench = "dimanche";
            break;
        case 1 :
            nameDayInFrench = "lundi";
            break;
        case 2 :
            nameDayInFrench = "mardi";
            break;
        case 3 :
            nameDayInFrench = "mercredi";
            break;
        case 4 :
            nameDayInFrench = "jeudi";
            break;
        case 5 :
            nameDayInFrench = "vendredi";
            break;
        case 6 :
            nameDayInFrench = "samedi";
            break;
        default:
            dayAlertMessage = "Le jour n'a pas été transmis ou reconnu !!";
            break;
    }

    if (nameDayInFrench == null) {
        return dayAlertMessage;
    } else {
       return nameDayInFrench; 
    }
}

function getNameMonthInFrench() {
    /* Permet d'afficher le nom du mois en français */
    let nameMonthInFrench = "";
    let monthAlertMessage = "";

    switch (numMonth) {
        case 0:
            nameMonthInFrench = "janvier";
            break;
        case 1:
            nameMonthInFrench = "fevrier";
            break;
        case 2:
            nameMonthInFrench = "mars";
            break;
        case 3:
            nameMonthInFrench = "avril";
            break;
        case 4:
            nameMonthInFrench = "mai";
            break;
        case 5:
            nameMonthInFrench = "juin";
            break;
        case 6:
            nameMonthInFrench = "juillet";
            break;
        case 7:
            nameMonthInFrench = "aout";
            break;
        case 8:
            nameMonthInFrench = "septembre";
            break;
        case 9:
            nameMonthInFrench = "octobre";
            break;
        case 10:
            nameMonthInFrench = "novembre";
            break;
        case 11:
            nameMonthInFrench = "decembre";
            break;
        default:
            monthAlertMessage = "Le mois n'a pas été transmis ou reconnu !!";
            break;
    }

    if (nameMonthInFrench == null ) {
        return monthAlertMessage;
    } else {
        return nameMonthInFrench;
    }
}

function getMomentOfTheDay() {
    /* Permet de déterminer si nous sommes le jours ou la nuit */
    
    if (getNameMonthInFrench() == "janvier") {
        if (getFrenchHours() >= 0840 && getFrenchHours() < 1719) {
            dayMoment = true;
        } else {
            dayMoment = false;
        }

    } else if(getNameMonthInFrench() == "fevrier") {
        if (getFrenchHours() >= 0801 && getFrenchHours() < 1806) {
            dayMoment = true;
        } else {
            dayMoment = false;
        }
    } else if (getNameMonthInFrench() == "mars") {
        if (getFrenchHours() >= 0702 && getFrenchHours() < 1854) {
            dayMoment = true;
        } else {
            dayMoment = false;
        }
    } else if (getNameMonthInFrench() == "avril") {
        if (getFrenchHours() >= 0700 && getFrenchHours() < 2040) {
            dayMoment = true;
        } else {
           dayMoment = false;
        }
    } else if (getNameMonthInFrench() == "mai") {
        if (getFrenchHours() >= 0611 && getFrenchHours() < 2123) {
            dayMoment = true;
        } else {
            dayMoment = false;
        }
    } else if (getNameMonthInFrench() == "juin") {
        if (getFrenchHours() >= 0552 && getFrenchHours() < 2150) {
            dayMoment = true;
        } else {
            dayMoment = false;
        }
    } else if (getNameMonthInFrench() == "juillet") {
        if (getFrenchHours() >= 0610 && getFrenchHours() < 2142) {
            dayMoment = true;
        } else {
            dayMoment = false;
        }
    } else if (getNameMonthInFrench() == "aout") {
        if (getFrenchHours() >= 0650 && getFrenchHours() < 2058) {
            dayMoment = true;
        } else {
            dayMoment = false;
        }
    } else if (getNameMonthInFrench() == "septembre") {
        if (getFrenchHours() >= 0732 && getFrenchHours() < 1957) {
            dayMoment = true;
        } else {
            dayMoment = false;
        }
    } else if (getNameMonthInFrench() == "octobre") {
        if (getFrenchHours() >= 0817 && getFrenchHours() < 1854) {
            dayMoment = true;
        } else {
            dayMoment = false;
        }
    } else if (getNameMonthInFrench() == "novembre") {
        if (getFrenchHours() >= 0805 && getFrenchHours() < 1706) {
            dayMoment = true;
        } else {
            dayMoment = false;
        }
    } else if (getNameMonthInFrench() == "decembre") {
        if (getFrenchHours() >= 0841 && getFrenchHours() < 1642) {
            dayMoment = true;
        } else {
            dayMoment = false;
        }
    }
    return dayMoment;
}

/* Création d'éléments et attribution de style */

// Général 
function getStyleBodyAndContainer() {
    /* permet de créer et de changer l'apparence d'éléments en fonction du moment de la journée*/
    const elemBody = document.getElementsByTagName('body');
    const elemsContainer = document.getElementsByClassName('container');
    if (getMomentOfTheDay() == true) {
        elemBody[0].style.backgroundColor = whiteColorLinkNav;

        for (let index = 0; index < elemsContainer.length; index++) {
            const elemContainer = elemsContainer[index];
            elemContainer.style.backgroundColor = greyBackgroundColorDay;
        }

    } else if (getMomentOfTheDay() == false) {
        elemBody[0].style.backgroundColor = whiteColorLinkNav;
        

        for (let index = 0; index < elemsContainer.length; index++) {
            const elemContainer = elemsContainer[index];
            elemContainer.style.backgroundColor = bleuBackgroundColorNigth;
        }  
    }
}

// Header
function createHeader() {
    const elemHeader = document.querySelector('header');
    const elemLogo = document.querySelector('.header__banner__logo');
    const headerTitle = document.querySelector('h1');

    const headerPictureDay = pictureDay;
    const headerPictureNight = pictureNight;
    const headerLogoDay = logoDay;
    const headerLogoNight = logoNight

    if (getMomentOfTheDay() == true) {
        elemHeader.style.backgroundImage = headerPictureDay;
        elemLogo.innerHTML = "<img src=" + headerLogoDay + " alt='Logo de Dominique Quaintenne développeur front end, Wordpress, web designer' class='header__banner__logo__img'>";
            
    } else if (getMomentOfTheDay() == false) {
        elemHeader.style.backgroundImage = headerPictureNight;
        elemLogo.innerHTML = "<img src=" + headerLogoNight + " alt='Logo de Dominique Quaintenne développeur front end, Wordpress, web designer' class='header__banner__logo__img'>";
        
    }

    headerTitle.innerHTML = "Dominique Quaintenne développeur front end, Wordpress & web designer lavallois";

    if (getMomentOfTheDay() == true) {
        headerTitle.style.color = blueDomWebMoyen;
    } else if (getMomentOfTheDay() == false) {
        headerTitle.style.color = whiteColorLinkNav;
    }
    
}

function setStyleBreadCrumbNight() {
    const elemBreadcrumbSeparator = document.getElementsByClassName('breadcrumbSeparator');

    if (getMomentOfTheDay() == false) {
        for (let index = 0; index < elemBreadcrumbSeparator.length; index++) {
        const separator = elemBreadcrumbSeparator[index];
        separator.style.color = yellowDomWeb;
        } 
    } 
}

// fonctions utilitaires
function counter1(count) {

    if (count <= 4) {
       setTimeout(() => {
           document.getElementById('counter1').innerHTML = '' + count + ''; 
           return counter1(count + 1);
        }, 200);
        
    }else{
        clearTimeout();
        return count = 4;
        
    }
};

function counter2(count) {

    if (count <= 1) {
       setTimeout(() => {
           document.getElementById('counter2').innerHTML = '' + count + ''; 
           return counter2(count + 1);
        }, 200);
        
    }else{
        clearTimeout();
        return count = 1;
        
    }
};

function counter3(count) {

    if (count <= 47) {
       setTimeout(() => {
           document.getElementById('counter3').innerHTML = '' + count + ''; 
           return counter3(count + 1);
        }, 200);
        
    }else{
        clearTimeout();
        return count = 47;
        
    }
};

// création d'éléments HTML

// Content Home
function createContentPresentationHome() {
    // Permet la création d'un message dynamique d'accueil
    const elemsPresentationH2 = document.getElementsByClassName('contentHome__firstSection__presentation__containerArticle__article__h2');
    const paragraphesFirstSection = document.getElementsByClassName('contentHome__firstSection__presentation__containerArticle__article__p');
    const spansBlue = document.getElementsByClassName('spanBlue');
    const spansGreen = document.getElementsByClassName('spanGreen');
    const pictures = document.getElementsByClassName('contentHome__firstSection__presentation__containerPicture');

    const mockupPresDay = mockupPresentationDay;
    const mockupPresNight = mockupPresentationNight;

    const presentationH2 = elemsPresentationH2[0];
    presentationH2.innerHTML = "Développeur Front End, Développeur CMS et Web Designer";

    for (let index = 0; index < paragraphesFirstSection.length; index++) {

        const welcomeElement = paragraphesFirstSection[0];
        const secondParagraphe = paragraphesFirstSection[1];
        const troisiemeParagraphe = paragraphesFirstSection[2];
       
        if (getFrenchHours() > 0500 && getFrenchHours() <= 1300) {
            welcomeElement.innerHTML = "<span class='spanBlue'>Bonjour</span>, vous avez besoin d'un <span class='spanBlue'>développeur front end</span>, d'un <span class='spanBlue'>concepteur de site sur CMS Wordpress</span> et/ou d'un <span class='spanBlue'>web designer</span>, je peux répondre à vos attentes. Je m'appelle <span class='spanBlue'>Dominique Quaintenne</span> et je suis <span class='spanBlue'>concepteur front end polyvalent</span>. En ce " + getNameDayInFrench() + ", je souhaite vous présenter mon activité, mon projet professionnel et ma personnalité en attendant <span class='spanBlue'>une prochaine collaboration fructueuse.</span>";
            if (typeof secondParagraphe !== 'undefined') {
                secondParagraphe.innerHTML = "<span class='spanGreen'>Habitant à proximité immédiate de Laval en Mayenne</span> je suis à votre service dans le nord des pays de la Loire. À <span class='spanGreen'>Laval</span> bien sûr, mais aussi <span class='spanGreen'>au Mans</span>, à <span class='spanGreen'>Angers</span>, ainsi qu’à <span class='spanGreen'>Rennes</span> et son immédiate agglomération, en CDI pour du long terme, en CDD autour d’une mission.";
            }
            if (typeof troisiemeParagraphe !== 'undefined') {
                troisiemeParagraphe.innerHTML = "<span class='spanBlue'>Désireux dans savoir plus</span>, alors <span class='spanBlue'>cliquez</span> sur la partie qui vous intéresse.";
            } 
        } else if (getFrenchHours() > 1300 && getFrenchHours() <= 1830) {
            welcomeElement.innerHTML = "<span class='spanBlue'>Bon après-midi</span>, vous avez besoin d'un <span class='spanBlue'>développeur front end</span>, d'un <span class='spanBlue'>concepteur de site sur CMS Wordpress</span> et/ou d'un <span class='spanBlue'>web designer</span>, je peux répondre à vos attentes. Je m'appelle <span class='spanBlue'>Dominique Quaintenne</span> et je suis <span class='spanBlue'>concepteur front end polyvalent</span>. En ce " + getNameDayInFrench() + ", je souhaite vous présenter mon activité, mon projet professionnel et ma personnalité en attendant <span class='spanBlue'>une prochaine collaboration fructueuse.</span>";
            if (typeof secondParagraphe !== 'undefined') {
                secondParagraphe.innerHTML = "<span class='spanGreen'>Habitant à proximité immédiate de Laval en Mayenne</span> je suis à votre service dans le nord des pays de la Loire. À <span class='spanGreen'>Laval</span> bien sûr, mais aussi <span class='spanGreen'>au Mans</span>, à <span class='spanGreen'>Angers</span>, ainsi qu’à <span class='spanGreen'>Rennes</span> et son immédiate agglomération, en CDI pour du long terme, en CDD autour d’une mission.";
            }
            if (typeof troisiemeParagraphe !== 'undefined') {
                troisiemeParagraphe.innerHTML = "<span class='spanBlue'>Désireux dans savoir plus</span>, alors <span class='spanBlue'>cliquez</span> sur la partie qui vous intéresse.";
            } 
        } else if (getFrenchHours() > 1830 && getFrenchHours() <= 2230) {
            welcomeElement.innerHTML = "<span class='spanBlue'>Bonsoir</span>, vous avez besoin d'un <span class='spanBlue'>développeur front end</span>, d'un <span class='spanBlue'>concepteur de site sur CMS Wordpress</span> et/ou d'un <span class='spanBlue'>web designer</span>, je peux répondre à vos attentes. Je m'appelle <span class='spanBlue'>Dominique Quaintenne</span> et je suis <span class='spanBlue'>concepteur front end polyvalent</span>. En ce " + getNameDayInFrench() + ", je souhaite vous présenter mon activité, mon projet professionnel et ma personnalité en attendant <span class='spanBlue'>une prochaine collaboration fructueuse.</span>";
            if (typeof secondParagraphe !== 'undefined') {
                secondParagraphe.innerHTML = "<span class='spanGreen'>Habitant à proximité immédiate de Laval en Mayenne</span> je suis à votre service dans le nord des pays de la Loire. À <span class='spanGreen'>Laval</span> bien sûr, mais aussi <span class='spanGreen'>au Mans</span>, à <span class='spanGreen'>Angers</span>, ainsi qu’à <span class='spanGreen'>Rennes</span> et son immédiate agglomération, en CDI pour du long terme, en CDD autour d’une mission.";
            }
            if (typeof troisiemeParagraphe !== 'undefined') {
                troisiemeParagraphe.innerHTML = "<span class='spanBlue'>Désireux dans savoir plus</span>, alors <span class='spanBlue'>cliquez</span> sur la partie qui vous intéresse.";
            } 
        } else if ((getFrenchHours() > 2230 && getFrenchHours() <= 2359) ||(getFrenchHours() >= 0000 && getFrenchHours() <= 0500)) {
            welcomeElement.innerHTML = "<span class='spanBlue'>Bonne nuit</span>, vous avez besoin d'un <span class='spanBlue'>développeur front end</span>, d'un <span class='spanBlue'>concepteur de site sur CMS Wordpress</span> et/ou d'un <span class='spanBlue'>web designer</span>, je peux répondre à vos attentes. Je m'appelle <span class='spanBlue'>Dominique Quaintenne</span> et je suis <span class='spanBlue'>concepteur front end polyvalent</span>. En ce " + getNameDayInFrench() + ", je souhaite vous présenter mon activité, mon projet professionnel et ma personnalité en attendant <span class='spanBlue'>une prochaine collaboration fructueuse.</span>";
            if (typeof secondParagraphe !== 'undefined') {
                secondParagraphe.innerHTML = "<span class='spanGreen'>Habitant à proximité immédiate de Laval en Mayenne</span> je suis à votre service dans le nord des pays de la Loire. À <span class='spanGreen'>Laval</span> bien sûr, mais aussi <span class='spanGreen'>au Mans</span>, à <span class='spanGreen'>Angers</span>, ainsi qu’à <span class='spanGreen'>Rennes</span> et son immédiate agglomération, en CDI pour du long terme, en CDD autour d’une mission.";
            }
            if (typeof troisiemeParagraphe !== 'undefined') {
                troisiemeParagraphe.innerHTML = "<span class='spanBlue'>Désireux dans savoir plus</span>, alors <span class='spanBlue'>cliquez</span> sur la partie qui vous intéresse.";
            } 
        } else {
            welcomeElement.innerHTML = "Bienvenue sur mon site !";
            if (typeof secondParagraphe !== 'undefined') {
                secondParagraphe.innerHTML = "<span class='spanGreen'>Habitant à proximité immédiate de Laval en Mayenne</span> je suis à votre service dans le nord des pays de la Loire. À <span class='spanGreen'>Laval</span> bien sûr, mais aussi <span class='spanGreen'>au Mans</span>, à <span class='spanGreen'>Angers</span>, ainsi qu’à <span class='spanGreen'>Rennes</span> et son immédiate agglomération, en CDI pour du long terme, en CDD autour d’une mission.";
            }
            if (typeof troisiemeParagraphe !== 'undefined') {
                troisiemeParagraphe.innerHTML = "<span class='spanBlue'>Désireux dans savoir plus</span>, alors <span class='spanBlue'>cliquez</span> sur la partie qui vous intéresse.";
            } 
        }   
    }

    if (getMomentOfTheDay() == true) {
        presentationH2.style.color = blueDomWeb;

        for (let index = 0; index < paragraphesFirstSection.length; index++) {
            const paragrapheFirstSection = paragraphesFirstSection[index];
            paragrapheFirstSection.style.color = greyColorParaandTitleDay;
        }

        for (let index = 0; index < spansBlue.length; index++) {
            const spanBlue = spansBlue[index];
            spanBlue.style.color = blueDomWeb;
            spanBlue.style.fontWeight = 'bold';
        }

        for (let index = 0; index < spansGreen.length; index++) {
            const spanGreen = spansGreen[index];
            spanGreen.style.color = greenDomWebDark;
            spanGreen.style.fontWeight = 'bold';
        }

        for (let index = 0; index < pictures.length; index++) {
            const picturePresentation = pictures[0];
            picturePresentation.innerHTML = '<img src='+ mockupPresDay +' alt="Mockup illustrant mon activité en l\'occurrence la page d\'accueil du site soufflespositifs.com développé en 2020" class="contentHome__firstSection__presentation__containerPicture__img">';
        }

    } else if (getMomentOfTheDay() == false) {
        presentationH2.style.color = yellowDomWeb;

        for (let index = 0; index < paragraphesFirstSection.length; index++) {
            const paragrapheFirstSection = paragraphesFirstSection[index];
            paragrapheFirstSection.style.color = whiteColorLinkNav;
        }

        for (let index = 0; index < spansBlue.length; index++) {
            const spanBlue = spansBlue[index];
            spanBlue.style.color = blueDomWeb;
            spanBlue.style.fontWeight = 'bold';
        }

        for (let index = 0; index < spansGreen.length; index++) {
            const spanGreen = spansGreen[index];
            spanGreen.style.color = greenDomWebDark;
            spanGreen.style.fontWeight = 'bold';
        }

        for (let index = 0; index < pictures.length; index++) {
            const picturePresentation = pictures[0];
            picturePresentation.innerHTML = '<img src='+ mockupPresNight +' alt="Mockup illustrant mon activité en l\'occurrence la page d\'accueil du site soufflespositifs.com développé en 2020" class="contentHome__firstSection__presentation__containerPicture__img">';
        }
    }
}

function createContentCallToActionHome() {
    const containersCallToAction = document.getElementsByClassName('contentHome__firstSection__callToAction__containerCallToAction');
    for (let index = 0; index < containersCallToAction.length; index++) {
        const containerCallToAction = containersCallToAction[0];
        containerCallToAction.innerHTML = "<ul class='contentHome__firstSection__callToAction__containerCallToAction__list'>" +
        "<li class='contentHome__firstSection__callToAction__containerCallToAction__list__element'>" +
            "<a href='http://dquaintenne.fr/développement-web' class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien'>" +
                "<img src='assets/icones/ic-coding.png' alt='Icone illustrant l\'activité de développeur front end et Wordpress' class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__img'>" +
                "<h3 class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__h3'>Développement Web</h3>" +
                "<p class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__p'>Front end & CMS Wordpress</p>" +
            "</a>" +
        "</li>" +
        "<li class='contentHome__firstSection__callToAction__containerCallToAction__list__element'>" +
            "<a href='http://dquaintenne.fr/web-design' class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien'>" +
                "<img src='assets/icones/ic-webdesign.png' alt='Icone illustrant l\'activité de web designe' class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__img'>" +
                "<h3 class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__h3'>Web Design</h3>" +
                "<p class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__p'>Ergonomie du Web</p>" +
            "</a>" +
        "</li>" +
        "<li class='contentHome__firstSection__callToAction__containerCallToAction__list__element'>" +
            "<a href='http://dquaintenne.fr/optimisation-seo' class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien'>" +
                "<img src='assets/icones/ic-redaction.png' alt='Icone illustrant l\'activité d'optimisation SEO' class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__img'>" +
                "<h3 class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__h3'>Optimisation SEO</h3>" +
                "<p class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__p'>Améliorer le référencement</p>" +
            "</a>" +
        "</li>" +
        "<li class='contentHome__firstSection__callToAction__containerCallToAction__list__element'>" +
            "<a href='#box' class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien'>" +
                "<img src='assets/icones/ic-mail.png' alt='Icone d\'ancre vers le bloc contact' class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__img'>" +
                "<h3 class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__h3'>Contact</h3>" + 
                "<p class='contentHome__firstSection__callToAction__containerCallToAction__list__element__lien__p'>Laissez moi un message</p>" +
            "</a>" +
        "</li>" +
    "</ul>";
    } 
}

function createElementAlertMessageHome() {
    const elementAlertMessage = document.getElementById('alertMessage');
    const contentAlertMessage = "En raison de l'épidémie de COVID-19 je suis susceptible de travailler uniquement en télétravail, merci de votre compréhension.";
    elementAlertMessage.innerHTML = contentAlertMessage;
    elementAlertMessage.style.color = whiteColorLinkNav;
    elementAlertMessage.style.backgroundColor = redDomWeb;
    elementAlertMessage.style.fontSize = 'small';
    elementAlertMessage.style.fontWeight = 'bold';
    elementAlertMessage.style.padding = '10px';
    elementAlertMessage.style.borderRadius = '3px';
    setInterval(() => {
       elementAlertMessage.style.visibility = (elementAlertMessage.style.visibility == 'hidden' ? '' : 'hidden');
    }, 2500); 
}

function createElementsMessageInfoHome() {
    const iconesButton = document.getElementsByClassName('contentHome__thirdSection__appelInfo__icone');
    for (let index = 0; index < iconesButton.length; index++) {
        const iconeButton = iconesButton[0];
        iconeButton.innerHTML = "<img src='assets/icones/icone-info.png' alt='icone d\'accès à une information' class='contentHome__thirdSection__appelInfo__icone__img' id='iconeButton'>";
    }
    const imgIconeButton = document.getElementById('iconeButton');
    const messageInfo = document.getElementById('messageInfo');
    messageInfo.style.opacity = '0';
    imgIconeButton.addEventListener('mouseover', function() {
        messageInfo.innerHTML = "Ce site est réalisé intégralement par mes soins en HTML5, SCSS, JavaScript et PHP. Je n'utilise pas Angular pour réaliser ce dernier en raison de la difficulté à y intégrer du PHP.";
        messageInfo.style.opacity = '1';
    });
    imgIconeButton.addEventListener('mouseout', function() {
        messageInfo.innerHTML = "";
        messageInfo.style.opacity = '0';
    });
}

function createElementsPersonalityHome() {
    const fourthSections = document.getElementsByClassName('contentHome__fourthSection');
    const picturesPersonality = document.getElementsByClassName('contentHome__fourthSection__presentation__containerPicture');
    const elementsTitleH2 = document.getElementsByClassName('contentHome__fourthSection__presentation__containerArticle__article__h2');
    const elementsTitleH3 = document.getElementsByClassName('contentHome__fourthSection__presentation__containerArticle__article__h3');
    const elementsParagraph = document.getElementsByClassName('contentHome__fourthSection__presentation__containerArticle__article__p');

    const picturePersoDay = picturePersonnalityDay;
    const picturePersoNight = picturePersonnalityNight;

    for (let index = 0; index < elementsTitleH2.length; index++) {
        const elementTitleH2 = elementsTitleH2[0];
        elementTitleH2.innerHTML = "Afin de mieux me connaître";

        if (getMomentOfTheDay() == true) {
            elementTitleH2.style.color = blueDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementTitleH2.style.color = whiteColorLinkNav;
        }
    }

    for (let index = 0; index < elementsTitleH3.length; index++) {
        const elementTitleH3 = elementsTitleH3[0];
        elementTitleH3.innerHTML = "La communication online avant tout";
    }

    for (let index = 0; index < elementsParagraph.length; index++) {
        const elementParagraph1 = elementsParagraph[0];
        const elementParagraph2 = elementsParagraph[1];
        const elementParagraph3 = elementsParagraph[2];
        const elementParagraph4 = elementsParagraph[3];

        elementParagraph1.innerHTML = " Si je devais retenir un mot pour exprimer mes souhaits autant sur le plan personnel que professionnel, ce serait: <span>Harmonie</span> ." +
        " Quel grand mot! Qui peut dire, je souhaite de la disharmonie dans ma vie professionnelle et personnelle ?" + " Bien sûr ! Mais je tiens à souligner ma détestation du conflit, d'un rapport de forces trop rigide, d'un rapport qui conduit à l'irrespect entre les personnes, une domination excessive d'une personne sur l'autre ."; 
        
        elementParagraph2.innerHTML = " J'ai en effet parmi d'autres softs skills un fort leadership <span>collaboratif</span> .<br>" + "Ce qui me caractérise c'est un fort esprit de cohésion d'équipe, accueil et intégration apaisante des nouveaux, soutiens aux personnes en difficultés et aux personnes qui tirent l'ensemble de l'équipe vers le haut .<br>" +
        " Mon objectif est que chaque personne d'une équipe se sente le mieux possible et par conséquent amène le meilleur de soi et le meilleur de ses capacités au service de l'équipe." + 
        " Et ce, que ce soit dans un club sportif comme <a href='http://judo-change53.fr/'>l' US Changé Judo</a> où je pratique le Taïso, une association comme <a href='https://dondusangchange53.wixsite.com/monsite'>l'Association des Donneurs de Sang Bénévoles de Changé</a> dont j'ai été le trésorier durant 3 ans et dont je suis aujourd'hui trésorier adjoint et animateur de la page facebook, " + 
        "et également sur le plan plus professionnel, comme avec Sandrina Perrin qui anime l'entreprise <a href='http://www.soufflespositifs.com/'>Souffles Positifs</a> pour laquelle j'ai créé le site avec le CMS Wordpress."; 
        elementParagraph3.innerHTML = " J'ai tenu à m'adapter à ses goûts, son budget, le futur de son site; à être à son écoute, à m'adapter sur le plan technique et être hyperréactif lorsqu'elle exprimait un besoin. " + 
        "C'est ainsi que je me projette professionnellement, être <span>hyperréactif</span>, <span>m'adapter</span> au maximum aux attentes, être <span>curieux</span>, <span>rechercher toujours une solution</span> et tout faire pour l'apprivoiser et la mettre en application. " + 
        "En retour j'y espère une pression mesurée, de la bienveillance au sein de l'équipe et avec le demandeur. Car je dois être serein pour exploiter pleinement mes compétences.";

        elementParagraph4.innerHTML = "Titulaire d'un BTS communication des entreprises et ayant tout d'abord travaillé dans la conception graphique off-line pour la communication, je me suis orienté progressivement à partir de 2008 vers la communication des entreprises sur le web. Vous êtes une entreprise de l'économie sociale et solidaire, une entreprise de l'économie plus classique et l'éthique et la bienveillance sont au coeur de votre fonctionnement alors je suis vivement intéressé."; 
    }

    if (getMomentOfTheDay() == true) {
        
        for (let index = 0; index < fourthSections.length; index++) {
            const fourthSection = fourthSections[0];
            fourthSection.style.backgroundColor = greenDomWeb;
        }

        for (let index = 0; index < picturesPersonality.length; index++) {
            const picturePersonality = picturesPersonality[0];
            picturePersonality.innerHTML = '<img src='+ picturePersoDay +' alt="Photo montrant une guirlande lumineuse dans un bocale sur un place au soleil couchant et exprimant l\'harmonie." class="contentHome__fourthSection__presentation__containerPicture__img">';
        }
    } else if (getMomentOfTheDay() == false) {
        for (let index = 0; index < fourthSections.length; index++) {
            const fourthSection = fourthSections[0];
            fourthSection.style.backgroundColor = blueDomWeb;
        }

        for (let index = 0; index < picturesPersonality.length; index++) {
            const picturePersonality = picturesPersonality[0];
            picturePersonality.innerHTML = '<img src='+ picturePersoNight +' alt="Photo montrant une personne tenant dans ses mains la lune et exprimant l\'harmonie." class="contentHome__fourthSection__presentation__containerPicture__img">';
        }
    }
}

// Content Devl Web

function createContentPresentationDvl() {
    const elementsH2 = document.getElementsByClassName('contentDevl__firstSection__presentation__containerArticle__article__h2');
    const elementsH3 = document.getElementsByClassName('contentDevl__firstSection__presentation__containerArticle__article__h3');
    const elementsH4 = document.getElementsByClassName('contentDevl__firstSection__presentation__containerArticle__article__h4');
    const elementsP = document.getElementsByClassName('contentDevl__firstSection__presentation__containerArticle__article__p');
    const elementsContainerPicturePresentation = document.getElementsByClassName('contentDevl__firstSection__presentation__containerPicture');
    const elementsPresentationGallery = document.getElementsByClassName('contentDevl__firstSection__gallery');
    const elementsAPresentationDvl = document.getElementsByClassName('contentDevl__firstSection__presentation__containerArticle__article__p__a');

    const mockupDay = mockupPresentationDay;
    const mockupNight = mockupPresentationNight;

    for (let index = 0; index < elementsH2.length; index++) {
        const elementH2PresentationDvl = elementsH2[0];

        elementH2PresentationDvl.innerHTML = 'Développeur front end et concepteur CMS avant tout';
    
        if (getMomentOfTheDay() == true) {
            elementH2PresentationDvl.style.color = blueDomWeb;
        
        } else if (getMomentOfTheDay() == false) {
            elementH2PresentationDvl.style.color = yellowDomWeb;
        
        }
    }

    for (let index = 0; index < elementsH3.length; index++) {
        const elementH31Devl = elementsH3[0];
        const elementH32DEvl = elementsH3[1];

        elementH31Devl.innerHTML = "Front end ? Back end ? What is it ?!!";
        elementH32DEvl.innerHTML = "Mes langages et CMS pour vous accompagner en front end";

        if (getMomentOfTheDay() == true) {
            elementsH3[index].style.color = blueDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementsH3[index].style.color = yellowDomWeb;
        }
        
    }

    for (let index = 0; index < elementsH4.length; index++) {
        const elementH41Devl = elementsH4[0];
        const elementH42Devl = elementsH4[1];

        elementH41Devl.innerHTML = "Oui mais alors c'est quoi le back end ?";
        elementH42Devl.innerHTML = "Et côté CMS?";

        if (getMomentOfTheDay() == true) {
            elementsH4[index].style.color = blueDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementsH4[index].style.color = yellowDomWeb;
        }
        
    }

    for (let index = 0; index < elementsP.length; index++) {
        const elementP1PresentationDvl = elementsP[0];
        const elementP2PresentationDvl = elementsP[1];
        const elementP3PresentationDvl = elementsP[2];
        const elementP4PresentationDvl = elementsP[3];
        const elementP5PresentationDvl = elementsP[4];
        const elementP6PresentationDvl = elementsP[5];
        const elementP7PresentationDvl = elementsP[6];
        const elementP8PresentationDvl = elementsP[7];
        const elementP9PresentationDvl = elementsP[8];
        const elementP10PresentationDvl = elementsP[9];
        const elementP11PresentationDvl = elementsP[10];
        const elementP12PresentationDvl = elementsP[11];
        const elementP13PresentationDvl = elementsP[12];
        const elementP14PresentationDvl = elementsP[13];
        const elementP15PresentationDvl = elementsP[14];
        const elementP16PresentationDvl = elementsP[15];
        const elementP17PresentationDvl = elementsP[16];

        elementP1PresentationDvl.innerHTML = "Je suis <strong><span class=\"contentDevl__firstSection__presentation__containerArticle__article__p__spanGreen\">développeur front end</span></strong> et <strong><span class=\"contentDevl__firstSection__presentation__containerArticle__article__p__spanGreen\">concepteur de site sur CMS Wordpress</span></strong> avant tout.";
        elementP2PresentationDvl.innerHTML = "Lorsque je dis avant tout, ce n'est pas au regard de mon autre activité de web designer, mais par rapport au développement back end.";
        elementP3PresentationDvl.innerHTML = "Pour ceux qui ne connaissent pas grand-chose sur le fonctionnement d'un site dynamique, je vais essayer d'être le plus clair possible.";
        elementP4PresentationDvl.innerHTML = "Il y a ce qu'il se passe du côté de votre navigateur, celui que vous utilisez pour voir un site : 'Edge, Chrome, Firefox, Opera, Safari...' ça c'est le front end.";
        elementP5PresentationDvl.innerHTML = "Ainsi la mise en forme visuelle d'un site, le positionnement, les couleurs constituent une part de mon travail.";
        elementP6PresentationDvl.innerHTML = "<span class=\"contentDevl__firstSection__presentation__containerArticle__article__p__spanBlue\">Mais ce n'est pas tout!</span>";
        elementP7PresentationDvl.innerHTML = "Ainsi le texte que vous êtes en train de lire est généré dynamiquement depuis un script que j'ai écrit. De même que le carrousel que vous avez vu en page d'<a href=\"\" class=\"contentDevl__firstSection__presentation__containerArticle__article__p__a\">accueil</a>, ou le changement d'apparence du site qu'il fasse jour ou nuit... et bien d'autres choses.";
        elementP8PresentationDvl.innerHTML = "<span class=\"contentDevl__firstSection__presentation__containerArticle__article__p__spanGreen\">Mon job:</span><span style=\"font-weight:bold;\"> Traduire en code le travail du Web Designer pour rendre le site que vous visitez, attrayant, fonctionnel et dynamique.</span>";
        elementP9PresentationDvl.innerHTML = "Pour reprendre la phrase d'un confrère qui fait un cours sur <a href=\"https://openclassrooms.com/fr/courses/6817086-decouvrez-les-metiers-de-developpeur\" class=\"contentDevl__firstSection__presentation__containerArticle__article__p__a\">OpenClassrooms</a> : \"Le front-end est le pont entre les UI/UX designers (web designer) et les développeurs back-end.\"";
        elementP10PresentationDvl.innerHTML = "Le back end, c'est tout ce que je ne fais pas, car je ne le maitrise pas aussi bien et surtout que j'aime voir directement ce que je fais.";
        elementP11PresentationDvl.innerHTML = "Le back end, c'est tout ce qui se passe du côté des serveurs qui hébergent les sites. C'est entre autres la gestion, la sécurisation et la récupération des données que vous, visiteurs, laissez quand vous visitez un site. Par exemple vos précédentes commandes ou vos envies sur un site d'e-commerce.";
        elementP12PresentationDvl.innerHTML = "Pour vous accompagner dans l'aspect front end de votre site ou application, je maitrise plusieurs langages de programmation et de description: <strong><span class=\"contentDevl__firstSection__presentation__containerArticle__article__p__spanGreen\">HTML5</span></strong>, <strong><span class=\"contentDevl__firstSection__presentation__containerArticle__article__p__spanGreen\">JavaScript</span></strong> <span style=\"font-size:0.8em;\">(à ne surtout pas confondre avec Java)</span>, mais aussi <strong><span class=\"contentDevl__firstSection__presentation__containerArticle__article__p__spanGreen\">CSS3</span></strong> et <strong><span class=\"contentDevl__firstSection__presentation__containerArticle__article__p__spanGreen\">SASS.</span></strong>";
        elementP13PresentationDvl.innerHTML = "Tout d'abord, pour ceux qui ne sauraient pas ce qu'est un CMS (Content Management System), ";
        elementP14PresentationDvl.innerHTML = "<span class=\"contentDevl__firstSection__presentation__containerArticle__article__p__spanBlue\">Et en français républicain ça donne quoi ?</span>";
        elementP15PresentationDvl.innerHTML = "Oui, je vous comprends, moi aussi je ne suis pas fan des termes anglophones!<br> Les CMS sont des Systemes de Gestion de Contenus. Cela permet de créer un site vitrine, un site d'e-commerce ou une application, sans savoir coder. C'est en fait du code créé par d'autres (des confrères à moi), qui constitue un ensemble de boîtes mis à disposition et qu'il ne reste plus qu'à utiliser ou non en mettant à l'intérieur d'elles du contenu (texte, image, éléments dynamiques ex: des boutons etc.)";
        elementP16PresentationDvl.innerHTML = "Pour ma part, je suis aussi <strong><span class=\"contentDevl__firstSection__presentation__containerArticle__article__p__spanGreen\">concepteur de site sur CMS</span></strong>, et plus particulièrement sur <strong><span class=\"contentDevl__firstSection__presentation__containerArticle__article__p__spanGreen\">WordPress</span></strong> le leader du marché.<br> Sur celui-ci, j'ai ainsi créé le site de la société <a href=\"http://www.soufflespositifs.com/\" class=\"contentDevl__firstSection__presentation__containerArticle__article__p__a\">souffles positifs</a> entreprise qui propose, aux particuliers mais aussi aux organisations, des accompagnements en psychologie positive.";
        elementP17PresentationDvl.innerHTML = "Mais comme je maitrise le codage front end et par conséquent je suis un vrai développeur, j'ai choisi de développer mon site de A à Z (y compris en faisant une petite partie de back-end avec PHP) et non de passer par un CMS. Mais sachez, que je suis à votre disposition sur les deux technologies, dans l'harmonie et la bienveillance."
        if (getMomentOfTheDay() == true) {
            elementsP[index].style.color = greyColorParaandTitleDay;
        
        } else if (getMomentOfTheDay() == false) {
            elementsP[index].style.color = whiteColorLinkNav;
        
        }
    }

    if (getMomentOfTheDay() == true) {
        for (let index = 0; index < elementsContainerPicturePresentation.length; index++) {
            const elementImgPresentation = elementsContainerPicturePresentation[0];
            elementImgPresentation.innerHTML = '<img src='+ mockupDay +' alt="Mockup illustrant mon activité en l\'occurrence la page d\'accueil du site soufflespositifs.com développé en 2020" class="contentDevl__firstSection__presentation__containerPicture__img">';
        }

        for (let index = 0; index < elementsAPresentationDvl.length; index++) {
            const elementAPresentationDvl = elementsAPresentationDvl[index];
            elementAPresentationDvl.style.color = blueDomWeb;
        }
    } else if (getMomentOfTheDay() == false) {
        for (let index = 0; index < elementsContainerPicturePresentation.length; index++) {
            const elementImgPresentation = elementsContainerPicturePresentation[0];
            elementImgPresentation.innerHTML = '<img src='+ mockupNight +' alt="Mockup illustrant mon activité en l\'occurrence la page d\'accueil du site soufflespositifs.com développé en 2020" class="contentDevl__firstSection__presentation__containerPicture__img">';
        }

        for (let index = 0; index < elementsAPresentationDvl.length; index++) {
            const elementAPresentationDvl = elementsAPresentationDvl[index];
            elementAPresentationDvl.style.color = greenDomWeb;
        }
    }

    for (let index = 0; index < elementsPresentationGallery.length; index++) {
        const elementGallery = elementsPresentationGallery[0];
        elementGallery.innerHTML = '<ul class="contentDevl__firstSection__gallery__ul">' +
            '<li class="contentDevl__firstSection__gallery__ul__li">' +
                '<img src="assets/icones/icones_JS.png" alt="icone du langage JavaScript" class="contentDevl__firstSection__gallery__ul__li__img">' +
                '<h3 class="contentDevl__firstSection__gallery__ul__li__h3">JavaScript</h3>'+
            '</li>' +
            '<li class="contentDevl__firstSection__gallery__ul__li">' +
                '<img src="assets/icones/icones_HTML5.png" alt="icone du langage HTML5" class="contentDevl__firstSection__gallery__ul__li__img">' +
                '<h3 class="contentDevl__firstSection__gallery__ul__li__h3">HTML5</h3>'+
            '</li>' +
            '<li class="contentDevl__firstSection__gallery__ul__li">' +
                '<img src="assets/icones/icones_CSS3.png" alt="icone du langage CSS3" class="contentDevl__firstSection__gallery__ul__li__img">' +
                '<h3 class="contentDevl__firstSection__gallery__ul__li__h3">CSS3</h3>'+
            '</li>' +
            '<li class="contentDevl__firstSection__gallery__ul__li">' +
                '<img src="assets/icones/icones_Wordpress.png" alt="icone du CMS Wordpress" class="contentDevl__firstSection__gallery__ul__li__img">' +
                '<h3 class="contentDevl__firstSection__gallery__ul__li__h3">CMS Wordpress</h3>'+
            '</li>' +
            '<li class="contentDevl__firstSection__gallery__ul__li">' +
                '<img src="assets/icones/icones_sass.png" alt="icone de la synthaxe SASS" class="contentDevl__firstSection__gallery__ul__li__img">' +
                '<h3 class="contentDevl__firstSection__gallery__ul__li__h3">SASS</h3>'+
            '</li>' +
        '</ul>';
    }
    
}

function createContentSecondeSectionDvl() {
    const elementsSecondSection = document.getElementsByClassName('contentDevl__secondSection');
    const elementsH2 = document.getElementsByClassName('contentDevl__secondSection__presentation__containerArticle__article__h2');
    const elementsH3 = document.getElementsByClassName('contentDevl__secondSection__presentation__containerArticle__article__h3');
    const elementsH4 = document.getElementsByClassName('contentDevl__secondSection__presentation__containerArticle__article__h4');
    const elementsP = document.getElementsByClassName('contentDevl__secondSection__presentation__containerArticle__article__p');
    const elementsContainerPictureSecondSection= document.getElementsByClassName('contentDevl__secondSection__presentation__containerPicture');
    const elementsSecondSectionGallery = document.getElementsByClassName('contentDevl__secondSection__gallery');
    const elementsCounterQuoi = document.getElementsByClassName('contentDevl__secondSection__parcours__quoi');
    const elementsCounterPrecision = document.getElementsByClassName('contentDevl__secondSection__parcours__precision');

    const pictureIllustrationDay = pictureSecondSectionDvlDay;
    const pictureIllustrationNight = pictureSecondSectionDvlNight;

    for (let index = 0; index < elementsSecondSection.length; index++) {
        const elementSecondSection = elementsSecondSection[0];
        if (getMomentOfTheDay() == true) {
            elementSecondSection.style.backgroundColor = greenDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementSecondSection.style.backgroundColor = blueDomWeb;
        }
    }

    for (let index = 0; index < elementsH2.length; index++) {
        const elementH2SecondSectionDvl = elementsH2[0];

        elementH2SecondSectionDvl.innerHTML = 'Les frameworks et bibliothèques<br> en appuis selon les circonstances';
    
        if (getMomentOfTheDay() == true) {
            elementH2SecondSectionDvl.style.color = whiteColorLinkNav;
        
        } else if (getMomentOfTheDay() == false) {
            elementH2SecondSectionDvl.style.color = yellowDomWeb;
        
        }
    }

    for (let index = 0; index < elementsH3.length; index++) {
        const elementH31SecondSectionDevl = elementsH3[0];
        const elementH32SecondSectionDevl = elementsH3[1];
        const elementH33SecondeSectionDevl = elementsH3[2];

        elementH31SecondSectionDevl.innerHTML = "Angular comme framework JavaScript de prédilection";
        elementH32SecondSectionDevl.innerHTML = "JQuery une bibliothèque qui me facilite grandement la tâche";
        elementH33SecondeSectionDevl.innerHTML = "Bootstrap le framework de la mise en page";

        if (getMomentOfTheDay() == true) {
            elementsH3[index].style.color = whiteColorLinkNav;
        } else if (getMomentOfTheDay() == false) {
            elementsH3[index].style.color = yellowDomWeb;
        }
        
    }

    for (let index = 0; index < elementsH4.length; index++) {
        const elementH41SecondSectionDevl = elementsH4[0];
         
        elementH41SecondSectionDevl.innerHTML = "Alors pourquoi je ne l'utilise pas tout le temps ?";
    
        if (getMomentOfTheDay() == true) {
            elementsH4[index].style.color = whiteColorLinkNav;
        } else if (getMomentOfTheDay() == false) {
            elementsH4[index].style.color = yellowDomWeb;
        }
        
    }

    for (let index = 0; index < elementsP.length; index++) {
        const elementP1SecondSectionDvl = elementsP[0];
        const elementP2SecondSectionDvl = elementsP[1];
        const elementP3PresentationDvl = elementsP[2];
        const elementP4PresentationDvl = elementsP[3];
        const elementP5PresentationDvl = elementsP[4];
        const elementP6PresentationDvl = elementsP[5];
        const elementP7PresentationDvl = elementsP[6];
        const elementP8PresentationDvl = elementsP[7];
        const elementP9PresentationDvl = elementsP[8];
        const elementP10PresentationDvl = elementsP[9];
        const elementP11PresentationDvl = elementsP[10];
        
        elementP1SecondSectionDvl.innerHTML = "Dans le cadre de projets, en premier lieu, applicatifs, je peux utiliser différents frameworks et/ou bibliothèques. ";
        elementP2SecondSectionDvl.innerHTML = "Toutefois, j'avoue aimer m'en passer sur le développement de site vitrine, pour plus de liberté et notamment dans l'intégration d'éléments back end en PHP. ";
        elementP3PresentationDvl.innerHTML = "Après un premier abord d'Angular assez négatif, des mises à niveau majeures arrivant trop régulièrement, je me suis mis à aimer vraiment ce framework. ";
        elementP4PresentationDvl.innerHTML = "Si j'utilise exclusivement Angular pour du front end, j'aime réellement la gestion de routing embarqué directement et non à ajouter comme sur un de ses concurrents React. " + 
        "J'aime aussi beaucoup sa facilité d'utilisation (sauf sur la partie back-end) la possibilité d'utiliser des \"services\" pour centraliser du code et le réutiliser dans toutes les parties de l'application qui en ont l'utilité, " +
        "la structuration en component qui permet une grande modularité de l'application ainsi que les modèles.";
        elementP5PresentationDvl.innerHTML = "Je ne vais pas entrer ici dans le débat, JQuery est-elle une bibliothèque? JQuery est-il un framework? Cela fait partie des discussions qui pour moi n'ont que très peu d'intérêt.";
        elementP6PresentationDvl.innerHTML = "Même si j'utilise peu JQuery dans le site que vous êtes en train de parcourir c'est une bibliothèque ou un framework qui me facilite grandement la tâche par une syntaxe plus concise que le JavaScript auquel elle se rapporte. Par ailleurs, elle permet une utilisation facilitée des fonctions.";
        elementP7PresentationDvl.innerHTML = "Il faut savoir que JQuery est une bibliothèque riche et donc assez lourde à charger (même si c'est optimisé). Lorsque je code du JavaScript même s'il peut y avoir des redites, je n'embarque que ce que j'utilise.";
        elementP8PresentationDvl.innerHTML = "Par ailleurs, et cela va avec mon package empathie, bienveillance et bonhommie, j'aime bien faire fonctionner mon cerveau, donc fouiner dans du JavaScript ou du SASS pour créer des éléments et/ou les mettre en forme est un plaisir surtout quand je trouve.";
        elementP9PresentationDvl.innerHTML = "Il en va de même quand je m'inspire d'un script existant pour réaliser une tâche, utiliser sans comprendre ne sert à rien!!";
        elementP10PresentationDvl.innerHTML = "Bootstrap est probablement le framework que j'utilise le moins, bien que je sache le faire. Au même titre que JQuery j'aime chercher, comprendre et arriver à une solution satisfaisante et donc parfois j'aime sortir des sentiers battus.";
        elementP11PresentationDvl.innerHTML = "Mais Bootstrap permet de gagner du temps notamment dans les aspects déterminant aujourd'hui du design responsive. C'est-à-dire rendre un site, une application, aisément utilisable sur n'importe quel support digital. Smartphone, tablette, ordinateur et télévision connectée.";
       
        if (getMomentOfTheDay() == true) {
            elementsP[index].style.color = greyColorParaandTitleDay;
        
        } else if (getMomentOfTheDay() == false) {
            elementsP[index].style.color = whiteColorLinkNav;
        
        }
    }

    if (getMomentOfTheDay() == true) {
        for (let index = 0; index < elementsContainerPictureSecondSection.length; index++) {
            const elementImgSecondSection = elementsContainerPictureSecondSection[0];
            elementImgSecondSection.innerHTML = '<img src='+ pictureIllustrationDay +' alt="mockup de la page d\'accueil de mon site tel qu\'il devrait apparaître après développement sur un écran d\'ordinateur de bureau." class="contentDevl__firstSection__presentation__containerPicture__img">';
        }
    } else if (getMomentOfTheDay() == false) {
        for (let index = 0; index < elementsContainerPictureSecondSection.length; index++) {
            const elementImgSecondSection = elementsContainerPictureSecondSection[0];
            elementImgSecondSection.innerHTML = '<img src='+ pictureIllustrationNight +' alt="photo montrant une personne entrain de développer une application" class="contentDevl__firstSection__presentation__containerPicture__img">';
        }
    }

    for (let index = 0; index < elementsSecondSectionGallery.length; index++) {
        const elementGallery = elementsSecondSectionGallery[0];
        elementGallery.innerHTML = '<ul class="contentDevl__secondSection__gallery__ul">' +
            '<li class="contentDevl__secondSection__gallery__ul__li">' +
                '<img src="assets/icones/icones_Jquery.png" alt="icone de la bibliothèque JQuery" class="contentDevl__secondSection__gallery__ul__li__img">' +
                '<h3 class="contentDevl__secondSection__gallery__ul__li__h3">JQuery</h3>'+
            '</li>' +
            '<li class="contentDevl__secondSection__gallery__ul__li">' +
                '<img src="assets/icones/icones_Angular.png" alt="icone du framework Angular" class="contentDevl__secondSection__gallery__ul__li__img">' +
                '<h3 class="contentDevl__secondSection__gallery__ul__li__h3">Angular</h3>'+
            '</li>' +
            '<li class="contentDevl__secondSection__gallery__ul__li">' +
                '<img src="assets/icones/icones_bootstrap.png" alt="icone du framework Bootstrap" class="contentDevl__secondSection__gallery__ul__li__img">' +
                '<h3 class="contentDevl__secondSection__gallery__ul__li__h3">Bootstrap</h3>'+
            '</li>' +
        '</ul>';
    }
    
    for (let index = 0; index < elementsCounterQuoi.length; index++) {
        const elementQuoi1 = elementsCounterQuoi[0];
        const elementQuoi2 = elementsCounterQuoi[1];
        const elementQuoi3 = elementsCounterQuoi[2];

        elementQuoi1.innerHTML = "parcours suivis";
        elementQuoi2.innerHTML = "certificat de collections de cours obtenu";
        elementQuoi3.innerHTML = "certificats de suivi de cours obtenus";
        
    }

    for (let index = 0; index < elementsCounterPrecision.length; index++) {
        const elementPrecision1 = elementsCounterPrecision[0];
        const elementPrecision2 = elementsCounterPrecision[1];
        const elementPrecision3 = elementsCounterPrecision[2];
        
        elementPrecision1.innerHTML =   "<ul class='contentDevl__secondSection__parcours__precision__ul'>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>Développeur Web</li>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>Développeur Front End</li>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>Web Designer</li>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>Community Manager</li>" +
                                        "</ul>";
        elementPrecision2.innerHTML =   "<ul class='contentDevl__secondSection__parcours__precision__ul'>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>Intégrateur Web</li>" +
                                        "</ul>";
        elementPrecision3.innerHTML =   "<ul class='contentDevl__secondSection__parcours__precision__ul'>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>HMTL 5 et CSS3</li>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>JavaScript</li>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>CMS Wordpress</li>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>JQuery</li>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>SASS</li>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>Animation CSS</li>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>Angular</li>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>Bootstrap</li>" +
                                            "<li class='contentDevl__secondSection__parcours__precision__ul__li'>...</li>" +
                                        "</ul>";

        if (getMomentOfTheDay() == true) {
            elementsCounterPrecision[index].style.color = greenDark;
        } else if (getMomentOfTheDay() == false) {
            elementsCounterPrecision[index].style.color = blueDomWebDark;
        }                                
    }

    
}

function createContentThirdSectionDvl() {

    const elementsH2ThirdSectionDvl = document.getElementsByClassName('contentDevl__thirdSection__presentation__containerArticle__article__h2');
    const elementsPThirdSectionDvl = document.getElementsByClassName('contentDevl__thirdSection__presentation__containerArticle__article__p');
    const elementsContainerPictureThird = document.getElementsByClassName('contentDevl__thirdSection__presentation__containerPicture');
    const elementsContainerGalleryThird = document.getElementsByClassName('contentDevl__thirdSection__footerBanner');

    const pictureThirdSectionDay = pictureThirdSectionDvlDay;
    const pictureThirdSectionNight = pictureThirdSectionDvlNight;
    const pictureThirdGalleryDay = pictureThirdGalleryDvlDay;
    const pictureThirdGalleryNight = pictureThirdGalleryDvlNight;

    for (let index = 0; index < elementsH2ThirdSectionDvl.length; index++) {
        const elementH2ThirdSectionDvl = elementsH2ThirdSectionDvl[0];
        elementH2ThirdSectionDvl.innerHTML = "Un futur possible dans la robotique ou l'ouverture au full stack";

        if (getMomentOfTheDay() == true) {
            elementH2ThirdSectionDvl.style.color = blueDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementH2ThirdSectionDvl.style.color = yellowDomWeb;
        }
    }

    for (let index = 0; index < elementsPThirdSectionDvl.length; index++) {
        const elementP1ThirdSectionDvl = elementsPThirdSectionDvl[0];
        const elementP2ThirdSectionDvl = elementsPThirdSectionDvl[1];
        const elementP3ThirdSectionDvl = elementsPThirdSectionDvl[2];
        const elementP4ThirdSectionDvl = elementsPThirdSectionDvl[3];
        
        elementP1ThirdSectionDvl.innerHTML = "Dans la révolution numérique que nous connaissons si je mise sur une durabilité salutaire, je crois que la robotique peut être le coeur de cette révolution.";
        elementP2ThirdSectionDvl.innerHTML = "Oui le coeur, car je crois en définitive que si l'on conçoit la <strong class='contentDevl__thirdSection__presentation__containerArticle__article__p__strongBlue'>robotique</strong> comme <strong class='contentDevl__thirdSection__presentation__containerArticle__article__p__strongGreen'>un appui à l'humain</strong>, une assistance et non une exclusive substitution, alors la <span class='contentDevl__thirdSection__presentation__containerArticle__article__p__strongBlue'>robotique</span> adossée aux <strong class='contentDevl__thirdSection__presentation__containerArticle__article__p__strongGreen'>énergies renouvelables</strong> a un futur grandiose, face auquel aucun développeur ne peut dire qu'il n'a pas envie d'accompagner ce futur.";
        elementP3ThirdSectionDvl.innerHTML = "Je fais évidemment partie de ceux qui sont vivement intéressés par ces questions";
        elementP4ThirdSectionDvl.innerHTML = "Une autre extension future possible d'activité serait la plus logique et la plus évidente. Il s'agirait de m'ouvrir au full stack en abordant ma dimension back-end et en l'accolant à mon activité front end. J'ai déjà quelques notions fondamentales en PHP et MySQL comme le montre ce site, mais j'avoue que j'aime voir la traduction immédiate de mes actions de programmations.";

        if (getMomentOfTheDay() == true) {
            elementsPThirdSectionDvl[index].style.color = greyColorParaandTitleDay;
        } else if (getMomentOfTheDay() == false) {
            elementsPThirdSectionDvl[index].style.color = whiteColorLinkNav;
        }
    }

    for (let index = 0; index < elementsContainerPictureThird.length; index++) {
        const elementPictureThirdSection = elementsContainerPictureThird[0];
        
        if (getMomentOfTheDay() == true) {
            elementPictureThirdSection.innerHTML = "<img src=" + pictureThirdSectionDay + " alt=\"photo montrant un robot humanoïde pour illustrer mon extension possible vers la robotique\" class=\"contentDevl__thirdSection__presentation__containerPicture__img\">"; 
        } else if (getMomentOfTheDay() == false) {
            elementPictureThirdSection.innerHTML = "<img src=" + pictureThirdSectionNight + " alt=\"photo montrant un robot humanoïde pour illustrer mon extension possible vers la robotique\" class=\"contentDevl__thirdSection__presentation__containerPicture__img\">"; 
        }


    }

    for (let index = 0; index < elementsContainerGalleryThird.length; index++) {
        const elementGalleryThird = elementsContainerGalleryThird[0];
        
        if (getMomentOfTheDay() == true) {
            elementGalleryThird.style.backgroundImage =  pictureThirdGalleryDay; 
        } else if (getMomentOfTheDay() == false) {
            elementGalleryThird.style.backgroundImage = pictureThirdGalleryNight; 
        }
    }

    

}

// Content WebDesign

function getContentWebDesign() {
    const elementsPicturesPresWebD = document.getElementsByClassName('contentWebD__firstSection__presentation__containerPicture');
    const elementsH2PresWebD = document.getElementsByClassName('contentWebD__firstSection__presentation__containerArticle__article__h2');
    const elementsH3PresWebD = document.getElementsByClassName('contentWebD__firstSection__presentation__containerArticle__article__h3');
    const elementsPPresWebD = document.getElementsByClassName('contentWebD__firstSection__presentation__containerArticle__article__p');
    const elementsGalleryPresWebD = document.getElementsByClassName('contentWebD__firstSection__gallery');
    const elements11GallerySecWebD = document.getElementsByClassName('contentWebD__secondSection__gallery__part1__element1');
    const elements12GallerySecWebD = document.getElementsByClassName('contentWebD__secondSection__gallery__part1__element2');
    const elements21GallerySecWebD = document.getElementsByClassName('contentWebD__secondSection__gallery__part2__element1');
    const elements22GallerySecWebD = document.getElementsByClassName('contentWebD__secondSection__gallery__part2__element2');
    const elements23GallerySecWebD = document.getElementsByClassName('contentWebD__secondSection__gallery__part2__element3');
    const elements31GallerySecWebD = document.getElementsByClassName('contentWebD__secondSection__gallery__part3__element1');
    const elements32GallerySecWebD = document.getElementsByClassName('contentWebD__secondSection__gallery__part3__element2');
    const elementsH2SecWebD = document.getElementsByClassName('contentWebD__secondSection__presentation__containerArticle__article__h2');
    const elementsH3SecWebD = document.getElementsByClassName('contentWebD__secondSection__presentation__containerArticle__article__h3');
    const elementsPSecWebD = document.getElementsByClassName('contentWebD__secondSection__presentation__containerArticle__article__p');

    const picturePresDay = picturePresWebDesignDay;
    const picturePresNight = picturePresWebDesignNight;
    const picture1GalleryDay = pictureGalleryDay1;
    const picture2GalleryDay = pictureSecondSectionDvlDay;
    const picture3GalleryDay = pictureGalleryDay3;
    const picture4GalleryDay = pictureGalleryDay4;
    const picture5GalleryDay = pictureGalleryDay5;
    const picture6GalleryDay = pictureGalleryDay6;
    const picture7GalleryDay = mockupPresentationDay;
    const picture1GalleryNight = pictureGalleryNight1;
    const picture2GalleryNight = pictureGalleryNight2;
    const picture6GalleryNight = pictureGalleryNight6;
    const picture7GalleryNight = mockupPresentationNight;
    

    for (let index = 0; index < elementsH2PresWebD.length; index++) {
        const elementH21PresWebDes = elementsH2PresWebD[0];
        
        elementH21PresWebDes.innerHTML = "De la déclinaison digitale d'une charte graphique existante à la création intégrale d'une maquette";

        if (getMomentOfTheDay() == true) {
            elementsH2PresWebD[index].style.color = blueDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementsH2PresWebD[index].style.color = yellowDomWeb;
        }
    }

    for (let index = 0; index < elementsH3PresWebD.length; index++) {
        const elementH31PresWebDesign = elementsH3PresWebD[0];

        elementH31PresWebDesign.innerHTML = "De la création d'éléments à la maquette finale, mes compétences avec la suite Adobe, la syntaxe SASS, JavaScript, HTML5 et CSS3 sont à votre service";

        if (getMomentOfTheDay() == true) {
            elementsH3PresWebD[index].style.color = blueDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementsH3PresWebD[index].style.color = yellowDomWeb;
        }
    }

    for (let index = 0; index < elementsPPresWebD.length; index++) {
        const elementP1PresWebDesign = elementsPPresWebD[0];
        const elementP2PresWebDesign = elementsPPresWebD[1];
        const elementP3PresWebDesign = elementsPPresWebD[2];
        const elementP4PresWebDesign = elementsPPresWebD[3];
        const elementP5PresWebDesign = elementsPPresWebD[4];
        const elementP6PresWebDesign = elementsPPresWebD[5];

        elementP1PresWebDesign.innerHTML = "Je peux vous accompagner dans la déclinaison pour les supports numériques de votre charte graphique comme j'ai pu le faire pour souffles positifs, mais aussi <span class='contentWebD__firstSection__presentation__containerArticle__article__p__spanGreen'>créer de A à Z</span>, <strong class='contentWebD__firstSection__presentation__containerArticle__article__p__spanBlue'>des éléments graphiques jusqu'à la maquette complète de votre site ou vote application</strong>.";
        elementP2PresWebDesign.innerHTML = "Ainsi pour le site que vous êtes en train de parcourir, tout à l'exception des photos et des typographies utilisées est de ma conception. Du <span class='contentWebD__firstSection__presentation__containerArticle__article__p__spanGreen'>logo</span>, aux <span class='contentWebD__firstSection__presentation__containerArticle__article__p__spanBlue'>icônes</span> en passant par les <span class='contentWebD__firstSection__presentation__containerArticle__article__p__spanGreen'>chemins de fer</span>, les <span class='contentWebD__firstSection__presentation__containerArticle__article__p__spanBlue'>wireframes</span>, la <span class='contentWebD__firstSection__presentation__containerArticle__article__p__spanGreen'>maquette</span> jusqu'à la <span class='contentWebD__firstSection__presentation__containerArticle__article__p__spanBlue'>mise en page effective du site par le développement front end</span>.";
        elementP3PresWebDesign.innerHTML = "Pour rappel, le développeur front end est le pont entre le web designer et le développeur back end. Comme nous sommes chargés de traduire le design en code il est tout naturel venant de la communication visuelle de m'intéresser et de pratiquer les deux faces de cette pièce.";
        elementP4PresWebDesign.innerHTML = "J'ai acquis au cours de mes formations, mes stages, mes expériences professionnelles et personnelles, des compétences variées avec la suite Adobe. Je peux ainsi, entre autres, vous accompagner dans la création d'éléments avec Adobe Illustrator, le montage vidéo avec Adobe Première, le mixage son avec Adobe Soundbooth et la maquettisation avec Adobe XD.";
        elementP5PresWebDesign.innerHTML = "Avec ce dernier je suis en mesure de réaliser des maquettes cliquables qui vous donneront une première approche du fonctionnement de votre futur site web.";
        elementP6PresWebDesign.innerHTML = "Que vous souhaitiez une réalisation web design, une réalisation front end à partir d'une maquette existante, ou une réalisation complète. Vous souhaitez me proposer un emploi en webdesign et/ou développement front end qui correspond à mes attentes de bienveillance et d'éthique, n'hésitez plus à me contacter."

        if (getMomentOfTheDay() == true) {
            elementsPPresWebD[index].style.color = greyColorParaandTitleDay;
        } else if (getMomentOfTheDay() == false) {
            elementsPPresWebD[index].style.color = whiteColorLinkNav;
        }
    }

    for (let index = 0; index < elementsPicturesPresWebD.length; index++) {
        const elementPicturePresWebDesign = elementsPicturesPresWebD[0];
        
        if (getMomentOfTheDay() == true) {
            elementPicturePresWebDesign.innerHTML = "<img src=" + picturePresDay + " alt=\"photo montrant un cahier avec une élaboration de wireframe étape préalable au webdesign\" class=\"contentWebD__firstSection__presentation__containerPicture__img\">";
        } else if (getMomentOfTheDay() == false) {
            elementPicturePresWebDesign.innerHTML = "<img src=" + picturePresNight + " alt=\"photo montrant une galerie d'image sur un écran\" class=\"contentWebD__firstSection__presentation__containerPicture__img\">";
        }
    }

    for (let index = 0; index < elementsGalleryPresWebD.length; index++) {
        
        if (getMomentOfTheDay() == true) {
            elementsGalleryPresWebD[index].style.backgroundColor = greenDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementsGalleryPresWebD[index].style.backgroundColor = blueDomWeb;
        }
    }

    for (let index = 0; index < elements11GallerySecWebD.length; index++) {
        const element1GallerySecWebD = elements11GallerySecWebD[0];

        if (getMomentOfTheDay() == true) {
            element1GallerySecWebD.innerHTML = "<img src=" + picture1GalleryDay + " alt='Mockup en journée de ma page d\'accueil version de nuit' class='contentWebD__secondSection__gallery__part1__element1__img'>";
        } else if (getMomentOfTheDay() == false) {
            element1GallerySecWebD.innerHTML = "<img src=" + picture1GalleryNight + " alt='Mockup en soirée de ma page d\'accueil version de nuit' class='contentWebD__secondSection__gallery__part1__element1__img'>";
        }
    }

    for (let index = 0; index < elements12GallerySecWebD.length; index++) {
        const element2GallerySecWebD = elements12GallerySecWebD[0];
        
        if (getMomentOfTheDay() == true) {
            element2GallerySecWebD.innerHTML = "<img src=" + picture2GalleryDay + " alt='Mockup en journée de ma page d\'accueil version de jour' class='contentWebD__secondSection__gallery__part1__element2__img'>";
        } else if (getMomentOfTheDay() == false) {
            element2GallerySecWebD.innerHTML = "<img src=" + picture2GalleryNight + " alt='Mockup en soirée de ma page d\'accueil version de jour' class='contentWebD__secondSection__gallery__part1__element2__img'>";
        }
    }

    for (let index = 0; index < elements21GallerySecWebD.length; index++) {
        const element3GallerySecWebD = elements21GallerySecWebD[0];

        element3GallerySecWebD.innerHTML = "<img src=" + picture3GalleryDay + " alt='icone d\'adobe XD' class='contentWebD__secondSection__gallery__part2__element1__img'>";
        
        if (getMomentOfTheDay() == true) {
            element3GallerySecWebD.style.backgroundColor = greenDomWeb;
        } else if (getMomentOfTheDay() == false) {
            element3GallerySecWebD.style.backgroundColor = blueDomWeb;
        }
    }

    for (let index = 0; index < elements22GallerySecWebD.length; index++) {
        const element4GallerySecWebD = elements22GallerySecWebD[0];

        element4GallerySecWebD.innerHTML = "<img src=" + picture4GalleryDay + " alt='icone de la syntaxe SASS' class='contentWebD__secondSection__gallery__part2__element2__img'>";
        
        if (getMomentOfTheDay() == true) {
            element4GallerySecWebD.style.backgroundColor = greenDomWeb;
        } else if (getMomentOfTheDay() == false) {
            element4GallerySecWebD.style.backgroundColor = blueDomWeb;
        }
    }

    for (let index = 0; index < elements23GallerySecWebD.length; index++) {
        const element5GallerySecWebD = elements23GallerySecWebD[0];

        element5GallerySecWebD.innerHTML = "<img src=" + picture5GalleryDay + " alt='icone de JavaScript' class='contentWebD__secondSection__gallery__part2__element3__img'>";
        
        if (getMomentOfTheDay() == true) {
            element5GallerySecWebD.style.backgroundColor = greenDomWeb;
        } else if (getMomentOfTheDay() == false) {
            element5GallerySecWebD.style.backgroundColor = blueDomWeb;
        }
    }

    for (let index = 0; index < elements31GallerySecWebD.length; index++) {
        const element6GallerySecWebD = elements31GallerySecWebD[0];

        if (getMomentOfTheDay() == true) {
            element6GallerySecWebD.innerHTML = "<img src=" + picture6GalleryDay + " alt='Image de ma page développement web version jour' class='contentWebD__secondSection__gallery__part3__element1__img'>";
        } else if (getMomentOfTheDay() == false) {
            element6GallerySecWebD.innerHTML = "<img src=" + picture6GalleryNight + " alt='Image de ma page développement web version nuit' class='contentWebD__secondSection__gallery__part3__element1__img'>";
        }
    }

    for (let index = 0; index < elements32GallerySecWebD.length; index++) {
        const element7GallerySecWebD = elements32GallerySecWebD[0];
        
        if (getMomentOfTheDay() == true) {
            element7GallerySecWebD.innerHTML = "<img src=" + picture7GalleryDay + " alt='Mockup en journée de la page d\'accueil du site soufflespositifs.com' class='contentWebD__secondSection__gallery__part3__element2__img'>";
        } else if (getMomentOfTheDay() == false) {
            element7GallerySecWebD.innerHTML = "<img src=" + picture7GalleryNight + " alt='Mockup en soirée de la page d\'accueil du site soufflespositifs.com' class='contentWebD__secondSection__gallery__part3__element2__img'>";
        }
    }

    for (let index = 0; index < elementsH2SecWebD.length; index++) {
        const elementH21SecWebDesign = elementsH2SecWebD[0];
        elementH21SecWebDesign.innerHTML = "Le Webdesign le lien avec mes sources";

        if (getMomentOfTheDay() == true) {
            elementsH2SecWebD[index].style.color = blueDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementsH2SecWebD[index].style.color = yellowDomWeb;
        }
    }

    for (let index = 0; index < elementsPSecWebD.length; index++) {
        const elementP1SecWebDesign = elementsPSecWebD[0];
        const elementP2SecWebDesign = elementsPSecWebD[1];
        const elementP3SecWebDesign = elementsPSecWebD[2];
        
        elementP1SecWebDesign.innerHTML= "Oui le <strong class='contentWebD__firstSection__presentation__containerArticle__article__p__spanGreen'>Web Design</strong> constitue bien pour moi un lien entre les sources de mes activités professionnelles et mon actualité dans le <span class='contentWebD__firstSection__presentation__containerArticle__article__p__spanBlue'>développement web</span>.";
        elementP2SecWebDesign.innerHTML = "En effet, je viens du secteur de la communication et je suis titulaire d'un <strong class='contentWebD__firstSection__presentation__containerArticle__article__p__spanGreen'>BTS Communication des entreprises</strong> et mes premières armes se sont faites au hasard de stages, de remplacements dans la communication visuelle. Il est donc peu surprenant que je puisse avoir une appétence particulière pour le <strong class='contentWebD__firstSection__presentation__containerArticle__article__p__spanBlue'>Design</strong>, et le <strong class='contentWebD__firstSection__presentation__containerArticle__article__p__spanBlue'>développement front end</strong>.";
        elementP3SecWebDesign.innerHTML = "Le web design qui se situe à la croisée des chemins entre l'ergonomie et l'esthétique, rejoint mon appétence pour la création, les essais de techniques et mon désir de rendre mes créations fonctionnelles. Par ailleurs, en étant en mesure d'y associer mes connaissances en codage front end, je suis capable de donner vie à vos envies esthétiques en ajoutant mon oeil fonctionnel au design de vos rêves.";

        if (getMomentOfTheDay() == true) {
            elementsPSecWebD[index].style.color = greyColorParaandTitleDay;
        } else if (getMomentOfTheDay() == false) {
            elementsPSecWebD[index].style.color = whiteColorLinkNav;
        }
    }

}

// Optimisation SEO

function getContentOptiSEO() {
    const elementsPresOptiSEO = document.getElementsByClassName('optiSeo__firstSection__presentation');
    const elementsH2PresOpti = document.getElementsByClassName('optiSeo__firstSection__presentation__containerArticle__article__h2');
    const elementsH3PresOpti = document.getElementsByClassName('optiSeo__firstSection__presentation__containerArticle__article__h3');
    const elementsPPresOpti = document.getElementsByClassName('optiSeo__firstSection__presentation__containerArticle__article__p');
    const elementsSpanPresOpti = document.getElementsByClassName('optiSeo__firstSection__presentation__containerArticle__article__p__span');
    const elementsPictureSEOPres = document.getElementsByClassName('optiSeo__firstSection__presentation__containerPicture');
    const elementsGallery1SEO = document.getElementsByClassName('optiSeo__firstSection__gallery__element1');
    const elementsGallery2SEO = document.getElementsByClassName('optiSeo__firstSection__gallery__element2');
    const elementsGallery3SEO = document.getElementsByClassName('optiSeo__firstSection__gallery__element3');
    const elementsSecPartSEO = document.getElementsByClassName('optiSeo__secondSection__presentation__containerPicture');
    const elementsH2SecPartSEO = document.getElementsByClassName('optiSeo__secondSection__presentation__containerArticle__article__h2');
    const elementsPSecPartSEO = document.getElementsByClassName('optiSeo__secondSection__presentation__containerArticle__article__p');

    const picture1SEODay = picture1OptiSEODay;
    const picture1SEONight = picture1OptiSEONight;
    const picture2SEODay = picture1DaySecPartSEO;
    const picture2SEONight = picture1NightSecPartSEO;

    const picture1GallerySEODay = picture1DayGallerySEO;
    const picture1GallerySEONight = picture1NightGallerySEO;
    const picture2GallerySEODay = picture2DayGallerySEO;
    const picture2GallerySEONight = picture2NightGallerySEO;
    const picture3GallerySEODay = picture3DayGallerySEO;
    const picture3GallerySEONight = picture3NightGallerySEO;

    for (let index = 0; index < elementsPresOptiSEO.length; index++) {
        const elementPresOptiSEO = elementsPresOptiSEO[index];
        
        if (getMomentOfTheDay() == true) {
            elementPresOptiSEO.style.backgroundColor = greenDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementPresOptiSEO.style.backgroundColor = blueDomWeb;
        }
    }


    for (let index = 0; index < elementsH2PresOpti.length; index++) {
        const elementH2PresOpti = elementsH2PresOpti[0];
        
        elementH2PresOpti.innerHTML = "L'Optimisation SEO un équilibre délicat entre le visiteur et le moteur de recherche, mais un passage obligé";

        if (getMomentOfTheDay() == true) {
            elementsH2PresOpti[index].style.color = whiteColorLinkNav;
        } else if (getMomentOfTheDay() == false) {
            elementsH2PresOpti[index].style.color = yellowDomWeb;
        }
    }

    for (let index = 0; index < elementsH3PresOpti.length; index++) {
        const elementH3PresOpti = elementsH3PresOpti[0];
        
        elementH3PresOpti.innerHTML = "L'optimisation SEO, un service associé au développement front end";

        if (getMomentOfTheDay() == true) {
            elementsH3PresOpti[index].style.color = whiteColorLinkNav; 
        } else if (getMomentOfTheDay() == false) {
            elementsH3PresOpti[index].style.color = yellowDomWeb;
        }
    }

    for (let index = 0; index < elementsPPresOpti.length; index++) {
        const elementP1PresOpti = elementsPPresOpti[0];
        const elementP2PresOpti = elementsPPresOpti[1];
        const elementP3PresOpti = elementsPPresOpti[2];
        const elementP4PresOpti = elementsPPresOpti[3];
        const elementP5PresOpti = elementsPPresOpti[4];

        elementP1PresOpti.innerHTML = "Oui l'<strong class='optiSeo__firstSection__presentation__containerArticle__article__p__span'>optimisation SEO est un exercice \"compliqué\" mais un passage obligé</strong> pour permettre aux visiteurs de trouver votre site rapidement. Cette branche du référencement, que constitue le référencement dit naturel aussi appelé SEO, est en effet un <strong class='optiSeo__firstSection__presentation__containerArticle__article__p__span'>délicat équilibre entre l'intérêt du contenu pour le visiteur et les exigences des algorithmes des moteurs de recherche</strong> largement guidé par Google, leader sur le marché. L'un et l'autre étant difficilement compatibles sans un minimum de cogitation.";
        elementP2PresOpti.innerHTML = "Je le dis très clairement, il n'y a pas d'optimisation parfaite. Même les \"experts\" de la question ne peuvent réussir parfaitement cette opération. En effet, il y a une certaine contradiction entre les intérêts des visiteurs et les algorithmes des moteurs de recherche. Par exemple, le <span class='optiSeo__firstSection__presentation__containerArticle__article__p__span'>visiteur d'un site préférera un texte court et attachera de l'importance aux éléments visuels. Or les moteurs de recherche n'aiment pas trop les textes trop courts, mais attention, il n'aime pas non plus les textes trop longs</span>. Quant aux éléments visuels, qu'ils soient photographiques, vidéos ou sonores, ils prennent leur place dans le référencement principalement à l'aide des éléments textuels qui les accompagnent comme le texte alternatif qui les remplace lorsque l'élément n'est pas atteignable. On peut tendre à la perfection mais sans doute pas l'atteindre.";
        elementP3PresOpti.innerHTML = "Il convient donc pour le <strong class='optiSeo__firstSection__presentation__containerArticle__article__p__span'>développeur front end</strong> qui pratique l'optimisation SEO, d'<span class='optiSeo__firstSection__presentation__containerArticle__article__p__span'>agir comme une pieuvre entre le client qui a un contenu à proposer, le visiteur qui attend un contenu qui lui donne envie et un moteur de recherche qui a ses propres exigences</span>. Pendant longtemps, certains développeurs étaient tentés devant ce dilemme, de tromper les moteurs de recherche, en pratiquant le black hat ou le grey hat, qui sont des ensembles de techniques interdites ou fortement déconseillées. Mais aujourd'hui les algorithmes des moteurs de recherche sont capables de détecter ces pratiques si elles sont récurrentes.";
        elementP4PresOpti.innerHTML = "Ma prestation autour de l'optimisation SEO est un service associé au développement front end. Que ce soit l'établissement d'une balise title, meta description, meta robots ou l'amélioration des contenus, que ce soit à travers des textes retravaillés ou des éléments alternatifs aux éléments visuels et sonores, cette prestation se fait en parallèle de mon activité de développement. Un supplément indispensable pour que votre site puisse être trouvé rapidement sur les moteurs de recherche.";
        elementP5PresOpti.innerHTML = "Mais attention, comme je vous l'ai dit, l'optimisation SEO n'est pas une science exacte et <span class='optiSeo__firstSection__presentation__containerArticle__article__p__span'>ne constitue pas une obligation de résultats, mais une obligation de moyens</span>.";

        if (getMomentOfTheDay() == true) {
            elementsPPresOpti[index].style.color = greyColorParaandTitleDay;
        } else if (getMomentOfTheDay() == false) {
            elementsPPresOpti[index].style.color = whiteColorLinkNav;
        }
        
    }

    for (let index = 0; index < elementsPictureSEOPres.length; index++) {
        const elementPictureSEOPres = elementsPictureSEOPres[0];
        
        if (getMomentOfTheDay() == true) {
            elementPictureSEOPres.innerHTML = "<img src=" + picture1SEODay + " alt='travail de rédaction en groupe' class='optiSeo__firstSection__presentation__containerPicture__img'>";
        } else if (getMomentOfTheDay() == false) {
            elementPictureSEOPres.innerHTML = "<img src=" + picture1SEONight + " alt='travail de rédaction en groupe' class='optiSeo__firstSection__presentation__containerPicture__img'>";
        }
    }

    for (let index = 0; index < elementsGallery1SEO.length; index++) {
        const element1GallerySEO = elementsGallery1SEO[0];
        
        if (getMomentOfTheDay() == true) {
            element1GallerySEO.innerHTML = "<img src=" + picture1GallerySEODay + " alt='personne en train de réaliser de la calligraphie' class='optiSeo__firstSection__gallery__element1__img'>";
        } else if (getMomentOfTheDay() == false) {
            element1GallerySEO.innerHTML = "<img src=" + picture1GallerySEONight + " alt='personne en train d\'écrire la lueur de bougies' class='optiSeo__firstSection__gallery__element1__img'>";
        }
    }

    for (let index = 0; index < elementsGallery2SEO.length; index++) {
        const element2GallerySEO = elementsGallery2SEO[0];
        
        if (getMomentOfTheDay() == true) {
            element2GallerySEO.innerHTML = "<img src=" + picture2GallerySEODay + " alt='gros plan sur une page manuscrite' class='optiSeo__firstSection__gallery__element2__img'>";
        } else if (getMomentOfTheDay() == false) {
            element2GallerySEO.innerHTML = "<img src=" + picture2GallerySEONight  + " alt='plan serré sur des pages manuscrites' class='optiSeo__firstSection__gallery__element2__img'>";
        }
    }

    for (let index = 0; index < elementsGallery3SEO.length; index++) {
        const element3GallerySEO = elementsGallery3SEO[0];
        
        if (getMomentOfTheDay() == true) {
            element3GallerySEO.innerHTML = "<img src=" + picture3GallerySEODay + " alt='nécessaire de calligraphie' class='optiSeo__firstSection__gallery__element3__img'>";
        } else if (getMomentOfTheDay() == false) {
            element3GallerySEO.innerHTML = "<img src=" + picture3GallerySEONight  + " alt='plan sur un carnet d\'écriture posé sur une table noire' class='optiSeo__firstSection__gallery__element3__img'>";
        }
    }

    for (let index = 0; index < elementsSecPartSEO.length; index++) {
        const elementPictSecPartSEO = elementsSecPartSEO[0];
        
        if (getMomentOfTheDay() == true) {
            elementPictSecPartSEO.innerHTML = "<img src=" + picture2SEODay + " alt='personne en train de réaliser de la calligraphie' class='optiSeo__secondSection__presentation__containerPicture__img'>";
        } else if (getMomentOfTheDay() == false) {
            elementPictSecPartSEO.innerHTML = "<img src=" + picture2SEONight + " alt='personne en train d\'écrire la lueur de bougies' class='optiSeo__secondSection__presentation__containerPicture__img'>";
        }
    }

    for (let index = 0; index < elementsH2SecPartSEO.length; index++) {
        const elementH21SecPartSEO = elementsH2SecPartSEO[0];
        
        elementH21SecPartSEO.innerHTML = "Un intérêt pour l'accessibilité des handicapés et un intérêt pour l'écriture";

        if (getMomentOfTheDay() == true) {
            elementsH2SecPartSEO[index].style.color = blueDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementsH2SecPartSEO[index].style.color = yellowDomWeb;
        }
    }

    for (let index = 0; index < elementsPSecPartSEO.length; index++) {
        const elementP1SecPartSEO = elementsPSecPartSEO[0];
        const elementP2SecPartSEO = elementsPSecPartSEO[1];
        const elementP3SecPartSEO = elementsPSecPartSEO[2];

        elementP1SecPartSEO.innerHTML = "Lorsqu'on parle de texte alternatif pour les éléments visuels, il est important de comprendre qu'ils constituent parmi d'autres des <strong class='optiSeo__secondSection__presentation__containerArticle__article__p__spanGreen'>outils d'accessibilités pour des personnes handicapées</strong>. Oui comme le reste de la vie quotidienne, <span class='optiSeo__secondSection__presentation__containerArticle__article__p__spanBlue'>la communication digitale se doit d'être ouverte le plus largement possible aux personnes handicapées</span>. Ainsi, les textes alternatifs permettent aux déficients visuels de comprendre l'élément auquel ils n'ont ou moins accès, de même que les sous-titrages de vidéo, la traduction simultanée en langue des signes, ou la retranscription écrite des éléments sonores.";
        elementP2SecPartSEO.innerHTML = "Je sais bien qu'il est extrêmement convenu de dire qu'on est pour adapter le cadre de vie aux personnes handicapées qui doivent avoir accès à la vie de tous et toutes. Mais les actes restent rares. Aussi à titre de personnel j'ai choisi de suivre un module pour adapter, j'espère de manière optimale, mes développements front end pour qu'ils soient accessibles à tous. Sans vouloir faire de la basse promotion sur mes choix, cette volonté marque ma <strong class='optiSeo__secondSection__presentation__containerArticle__article__p__spanGreen'>réelle motivation pour un monde éthique et de bienveillance</strong>.";
        elementP3SecPartSEO.innerHTML = "Pour des raisons familiales, j'ai également un grand amour de l'écriture. Un de mes grands-pères était en effet professeur de lettres et agrégé de Grammaire. Si j'ai du mal à écrire pour le web, j'aime profondément les lettres classiques ce qui m'aide pour l'optimisation SEO.";

        if (getMomentOfTheDay() == true) {
            elementsPSecPartSEO[index].style.color = greyColorParaandTitleDay;
        } else if (getMomentOfTheDay() == false) {
            elementsPSecPartSEO[index].style.color = whiteColorLinkNav;
        }
    }

    for (let index = 0; index < elementsSpanPresOpti.length; index++) {
        const elementSpanPresOpti = elementsSpanPresOpti[index];
        
        if (getMomentOfTheDay() == true) {
            elementSpanPresOpti.style.color = blueDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementSpanPresOpti.style.color = greenDomWeb;
        }
    }
}

// Passions

function getContentPassions() {
    const elementsPresContainer = document.getElementsByClassName('passions__firstSection__presentation');
    const elementsPresPassions = document.getElementsByClassName('passions__firstSection__presentation__containerPicture');
    const elementsDivAstro = document.getElementsByClassName('passions__secondSection__divAstroEtChant__divastro');
    const elementsDivChant = document.getElementsByClassName('passions__secondSection__divAstroEtChant__divchant');
    const elementsDivPaysage = document.getElementsByClassName('passions__secondSection__divpaysageetphoto__divpaysage');
    const elementsDivPhoto = document.getElementsByClassName('passions__secondSection__divpaysageetphoto__divphoto');
    const elementsDivAstroPicture = document.getElementsByClassName('passions__secondSection__divAstroEtChant__divastro__picture');
    const elementsDivChantPicture = document.getElementsByClassName('passions__secondSection__divAstroEtChant__divchant__picture');
    const elementsDivPaysagePicture = document.getElementsByClassName('passions__secondSection__divpaysageetphoto__divpaysage__picture');
    const elementsDivPhotoPicture = document.getElementsByClassName('passions__secondSection__divpaysageetphoto__divphoto__picture');

    const elementsPresH2Passions = document.getElementsByClassName('passions__firstSection__presentation__containerArticle__article__h2');
    const elementsPresPPassions = document.getElementsByClassName('passions__firstSection__presentation__containerArticle__article__p');
    
    const elementsH2DivAstro = document.getElementsByClassName('passions__secondSection__divAstroEtChant__divastro__article__h2');
    const elementsH2DivChant = document.getElementsByClassName('passions__secondSection__divAstroEtChant__divchant__article__h2');
    const elementsH2DivPaysage = document.getElementsByClassName('passions__secondSection__divpaysageetphoto__divpaysage__article__h2');
    const elementsH2DivPhoto = document.getElementsByClassName('passions__secondSection__divpaysageetphoto__divphoto__article__h2');
    const elementsPDivAstro = document.getElementsByClassName('passions__secondSection__divAstroEtChant__divastro__article__p');
    const elementsPDivChant = document.getElementsByClassName('passions__secondSection__divAstroEtChant__divchant__article__p');
    const elementsPDivPaysage = document.getElementsByClassName('passions__secondSection__divpaysageetphoto__divpaysage__article__p');
    const elementsPDivPhoto = document.getElementsByClassName('passions__secondSection__divpaysageetphoto__divphoto__article__p');

    const elementsSpan = document.getElementsByClassName('passions__firstSection__presentation__containerArticle__article__p__spanBlue');
    



    const picturePresPassionDay = picturePresPassionsDay;
    const picturePresPassionNight = picturePresPassionsNight
    const pictureAstroDay = picturePersonnalityNight;
    const pictureAstroNight = pictureAstroPassionsNight;
    const pictureChantDay = pictureChantPassionsDay;
    const pictureChantNight = pictureChantPassionsNight;
    const picturePaysageDay = picturePaysagePassionsDay;
    const picturePaysageNight = picturePaysagePassionsNight;
    const picturePhotoDay = picturePhotoPassionsDay;
    const picturePhotoNight = picturePhotoPassionsNight;

    for (let index = 0; index < elementsPresContainer.length; index++) {
        const elementPresContainer = elementsPresContainer[index];
        
        if (getMomentOfTheDay() == true) {
            elementPresContainer.style.backgroundColor = greenDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementPresContainer.style.backgroundColor = blueDomWeb;
        }
    }

    for (let index = 0; index < elementsPresPassions.length; index++) {
        const elementPresPassionPicture = elementsPresPassions[0];
        
        if (getMomentOfTheDay() == true) {
            elementPresPassionPicture.innerHTML = "<img src=" + picturePresPassionDay + " alt='boule givrée éclairée par le soleil' class='passions__firstSection__presentation__containerPicture__img'>";
            
        } else if (getMomentOfTheDay() == false) {
            elementPresPassionPicture.innerHTML = "<img src=" + picturePresPassionNight + " alt='bateau sur l\'océan s'enfonçant dans la nuit orageuse' class='passions__firstSection__presentation__containerPicture__img'>";
        }
    }

    for (let index = 0; index < elementsPresH2Passions.length; index++) {
        const elementH2PresPassions = elementsPresH2Passions[0];

        elementH2PresPassions.innerHTML = "Mes passions et attraits des ailleurs essentiels à mon bien-être";

        if (getMomentOfTheDay() == true) {
            elementsPresH2Passions[index].style.color = whiteColorLinkNav;
        } else if (getMomentOfTheDay() == false) {
            elementsPresH2Passions[index].style.color = yellowDomWeb;
        }
        
    }

    for (let index = 0; index < elementsPresPPassions.length; index++) {
        const elementP1PresPassions = elementsPresPPassions[0];
        const elementP2PresPassions = elementsPresPPassions[1];

        elementP1PresPassions.innerHTML = "Comme tout un chacun, j'ai des passions et des attraits qui sont pour moi des <strong class='passions__firstSection__presentation__containerArticle__article__p__spanBlue'>exutoires indispensables à ma qualité de vie</strong>. Je suis doté un très fort esprit de curiosité et d'un large spectre de désir de connaissance. La seule limite est celle de mes valeurs et de mon éthique. Parmi ces passions et attraits, j'aurais pu citer le sport, en effet je pratique <span class='passions__firstSection__presentation__containerArticle__article__p__spanBlue'>le Taïso</span> qui est une remise en forme spécialisée dans les sports de combat, <span class='passions__firstSection__presentation__containerArticle__article__p__spanBlue'>la marche</span> avec mon record personnel de 26 km, <span class='passions__firstSection__presentation__containerArticle__article__p__spanBlue'>la musique</span> que je pratique avec une appétence pour le piano et le saxophone (même si je ne pratique pas ce dernier) ou encore la vie sous-marine.";
        elementP2PresPassions.innerHTML = "J'ai parmi toutes ces passions, retenues 5 d'entre elles qui m'animent sans doute depuis le plus longtemps et qui un impact déterminant sur moi. Je vous propose modestement de vous les faire connaître. Elles ont toutes un point commun <strong class='passions__firstSection__presentation__containerArticle__article__p__spanBlue'>l'harmonie et la sensation de bien-être</strong> qui s'en dégage.";

        if (getMomentOfTheDay() == true) {
            elementsPresPPassions[index].style.color = greyColorParaandTitleDay;
        } else if (getMomentOfTheDay() == false) {
            elementsPresPPassions[index].style.color = whiteColorLinkNav;
        }
    }

    for (let index = 0; index < elementsDivAstro.length; index++) {
        const elementDivAstro = elementsDivAstro[index];
        if (getMomentOfTheDay() == false) {
            elementDivAstro.style.backgroundColor = blueDomWeb;
        }
    }

    for (let index = 0; index < elementsH2DivAstro.length; index++) {
        const elementH2DivAstro = elementsH2DivAstro[0];
        
        elementH2DivAstro.innerHTML = "Astronomie et astrophysique";
    }

    for (let index = 0; index < elementsPDivAstro.length; index++) {
        const elementP1DivAstro = elementsPDivAstro[0];
        const elementP2DivAstro = elementsPDivAstro[1];
        const elementP3DivAstro = elementsPDivAstro[2];
        const elementP4DivAstro = elementsPDivAstro[3];

        elementP1DivAstro.innerHTML = "Véritable passion, l'astronomie et son pendant, plus scientifique, qui est l'astrophysique, sont pour moi équivalent à l'océanographie, des sciences de l'inexploré.";
        elementP2DivAstro.innerHTML = "En effet, ce sont des espaces tellement vastes et qui furent longtemps inaccessibles que l'homme connaît en définitive peu de choses sur l'immédiat voisinage et encore plus sur le plus lointain.";
        elementP3DivAstro.innerHTML = "J'aime particulièrement la planétologie qui est une science plus accessible si on se cantonne au système solaire mais ouvre des horizons plus vastes si on s'intéresse aux exoplanètes et qui constitue une porte d'entrée sur les conditions favorables à l'existence de la vie. Mais mon attrait pour l'astronomie va plus loin, je suis tellement curieux de l'infiniment lointain (ou grand) que je suis capable d'élaborer des hypothèses sur la forme de l'univers, l'existence d'autres univers (multivers) et non univers parallèles.";
        elementP4DivAstro.innerHTML = "Ainsi tout élément qu'il soit atome, objet, être vivant, planète, étoile, galaxie, matière noire ou autres est constitué d'un ensemble d'éléments plus petits juxtaposés qui lui donnent son existence physique. Pourquoi cette réalité physique s'arrêterait à l'univers? Celui-ci serait-il cet élément immense indépassable? Et si tel était le cas, il ne flotterait, ni ne reposerait sur rien ? Possible, difficile à imaginer mais possible. Ou bien serait-il lui-même un élément plus petit d'un élément plus grand qui le contiendrait lui et les autres univers de la même forme ou à l'inverse protéiforme et reliés entre eux par de l'antimatière ? Pour ma part je penche pour cette dernière.";
    }

    for (let index = 0; index < elementsDivChant.length; index++) {
        const elementDivChant = elementsDivChant[index];
        if (getMomentOfTheDay() == false) {
            elementDivChant.style.backgroundColor = pinkDomWeb;
        }
    }

    for (let index = 0; index < elementsH2DivChant.length; index++) {
        const elementH2DivChant = elementsH2DivChant[0];
        
        elementH2DivChant.innerHTML = "Le chant le lien avec la musique";
    }

    for (let index = 0; index < elementsPDivChant.length; index++) {
        const elementP1DivChant = elementsPDivChant[0];
        const elementP2DivChant = elementsPDivChant[1];
        const elementP3DivChant = elementsPDivChant[2];

        elementP1DivChant.innerHTML = "Chez moi le chant a précédé la musique. Plus précisément je l'ai privilégié par rapport à la musique car il est plus directement accessible. En effet on peut chanter sans argent, on peut former son oreille à la justesse en chantant. Le chant est la pratique musicale la plus accessible.";
        elementP2DivChant.innerHTML = "De tessiture très large, mon pupitre de prédilection est celui des ténors (voix aiguë masculine).";
        elementP3DivChant.innerHTML = "Bien qu'ayant chanté dans une chorale, je préfère chanter en solo ou en groupe restreint 3, 4 voix maximum afin à la fois ne pas se perdre dans la multitude de voix, mais aussi que chacun puisse en tirer une satisfaction propre plus grande. J'affectionne pratiquement tous les styles musicaux mis à part la musique urbaine qui a moins ma préférence. Je prends particulièrement de plaisir à chanter de la chanson française et des comédies musicales.";
        
    }

    for (let index = 0; index < elementsDivPaysage.length; index++) {
        const elementDivPaysage = elementsDivPaysage[index];
        if (getMomentOfTheDay() == false) {
            elementDivPaysage.style.backgroundColor = greenDomWebDark;
        }
    }

    for (let index = 0; index < elementsH2DivPaysage.length; index++) {
        const elementH2DivPaysage = elementsH2DivPaysage[0];
        
        elementH2DivPaysage.innerHTML = "L'amour apaisant des paysages";
    }

    for (let index = 0; index < elementsPDivPaysage.length; index++) {
        const elementP1DivPaysage = elementsPDivPaysage[0];
        const elementP2DivPaysage = elementsPDivPaysage[1];
        const elementP3DivPaysage = elementsPDivPaysage[2];

        elementP1DivPaysage.innerHTML = "Apaisement total, voilà ce qui m'emplit lorsque je m'arrête pour contempler un paysage. Cet apaisement est certainement un besoin vital pour moi. Le calme, la possibilité de laisser mon cerveau aller librement sans risque imaginer plein de choses qui ne trouveront peut-être pas leur traduction dans la réalité mais qui s'exprime.";
        elementP2DivPaysage.innerHTML = "Le paysage est changeant en fonction du lieu, de la saison, c'est une réinvention quasi permanente. Il ne s'agit pas forcément d'admirer le sauvage de ce paysage mais l'harmonie qui se dégage de celui-ci, le mariage varié entre le relief, la nature végétale, animale, leurs variétés, le ciel changeant, la présence ou non d'élément aquatique. Tout cela est source d'harmonie et donc d'apaisement pour moi.";
        elementP3DivPaysage.innerHTML = "On a souvent parlé me concernant de mélancolie tant je peux rester figé sans mot dire durant de très longues minutes devant un paysage dont la beauté vient m'envahir instantanément. Mais c'est un apaisement total, un bien-être inégalable qui m'envahit. Ainsi l'un des plus beaux paysages que j'ai vue est dans les plaines picardes du saint-quentinois, une plaine, un soleil couchant de feu et une haie de peupliers qui sert de filtre. C'est de cet amour pour le paysage et l'envie de l'emporter avec moi que j'ai découvert la photo.";
        
    }

    for (let index = 0; index < elementsDivPhoto.length; index++) {
        const elementDivPhoto = elementsDivPhoto[index];
        if (getMomentOfTheDay() == false) {
            elementDivPhoto.style.backgroundColor = redDomWeb;
        }
    }

    for (let index = 0; index < elementsH2DivPhoto.length; index++) {
        const elementH2DivPhoto = elementsH2DivPhoto[0];
        
        elementH2DivPhoto.innerHTML = "La photo et le monde l'image";
    }

    for (let index = 0; index < elementsPDivPhoto.length; index++) {
        const elementP1DivPhoto = elementsPDivPhoto[0];
        const elementP2DivPhoto = elementsPDivPhoto[1];
        const elementP3DivPhoto= elementsPDivPhoto[2];

        elementP1DivPhoto.innerHTML = "Comme je l'ai dit la photo est venue pour moi par le paysage, d'ailleurs je ne pratique presque exclusivement que la photographie de paysage. C'est pour une moi une façon de l'emporter avec moi, de pouvoir m'y ressourcer lorsque j'en ai besoin et que je ne peux pas y accéder directement. C'est aussi une manière de partager la beauté d'une chose vue avec mes proches et mes amis: \"tenez, je vous offre la beauté et l'apaisement que je viens de ressentir.\"";
        elementP2DivPhoto.innerHTML = "Brassaï, Ronis, Doisneau, Depardon, tous ces noms me parlent, j'aime leur oeuvre, j'y trouve ce que j'essaye de partager avec mes proches en faisant mes propres photos. J'aime y déceler les sentiments des gens qui y figurent, imaginer leur histoire, comme cette belle jeune femme au début des années 80 avec un perfecto, dans un bar parisien, l'air triste. Que vit-elle? Pourquoi est-elle comme ça? J'ai instantanément cette envie, à des années de distance, de la prendre dans mes bras et de la comprendre. Pour les paysages j'aime y trouver les éléments qui vont faire naître cette paix intérieure.";
        elementP3DivPhoto.innerHTML = "La vidéo est venue de manière différente, je n'y cherche pas l'apaisement mais l'évolution technologique, un appui, une traduction visuelle de la musique, même si sur ce dernier point une photo peut être plus ajustée.";
        
    }

    for (let index = 0; index < elementsDivAstroPicture.length; index++) {
        const elementPictureDivAstro = elementsDivAstroPicture[0];
        
        if (getMomentOfTheDay() == true) {
            elementPictureDivAstro.innerHTML = "<img src=" + pictureAstroDay + " alt='Femme prenant dans ses mains l\'astre lunaire' class='passions__secondSection__divAstroEtChant__divastro__picture__img'>";
        } else if (getMomentOfTheDay() == false) {
            elementPictureDivAstro.innerHTML = "<img src=" + pictureAstroNight + " alt='bocale contenant la voie lactée' class='passions__secondSection__divAstroEtChant__divastro__picture__img'>";
        }
    }

    for (let index = 0; index < elementsDivChantPicture.length; index++) {
        const elementPictureDivChant = elementsDivChantPicture[0];
        
        if (getMomentOfTheDay() == true) {
            elementPictureDivChant.innerHTML = "<img src=" + pictureChantDay + " alt='micro sur scène' class='passions__secondSection__divAstroEtChant__divchant__picture__img'>";
        } else if (getMomentOfTheDay() == false) {
            elementPictureDivChant.innerHTML = "<img src=" + pictureChantNight + " alt='micro en studio' class='passions__secondSection__divAstroEtChant__divchant__picture__img'>";
        }
    }

    for (let index = 0; index < elementsDivPaysagePicture.length; index++) {
        const elementPictureDivPaysage = elementsDivPaysagePicture[0];
        
        if (getMomentOfTheDay() == true) {
            elementPictureDivPaysage.innerHTML = "<img src=" + picturePaysageDay + " alt='épave de bateau échoué sur fond de paysage maritime' class='passions__secondSection__divpaysageetphoto__divpaysage__picture__img'>";
        } else if (getMomentOfTheDay() == false) {
            elementPictureDivPaysage.innerHTML = "<img src=" + picturePaysageNight + " alt='paysage montagnard sous une nuit étoilée' class='passions__secondSection__divpaysageetphoto__divpaysage__picture__img'>";
        }
    }

    for (let index = 0; index < elementsDivPhotoPicture.length; index++) {
        const elementPictureDivPhoto = elementsDivPhotoPicture[0];
        
        if (getMomentOfTheDay() == true) {
            elementPictureDivPhoto.innerHTML = "<img src=" + picturePhotoDay + " alt='vieil appareil photo posé sur une boite en acajou' class='passions__secondSection__divpaysageetphoto__divphoto__picture__img'>";
        } else if (getMomentOfTheDay() == false) {
            elementPictureDivPhoto.innerHTML = "<img src=" + picturePhotoNight + " alt='appareil photo posé sur une table avec des instantanés ' class='passions__secondSection__divpaysageetphoto__divphoto__picture__img'>";
        }
    }

    for (let index = 0; index < elementsSpan.length; index++) {
        
        if (getMomentOfTheDay() == false) {
            elementsSpan[index].style.color = greenDomWeb;
        }
    }

    
}

function styleFourOhFour() {
    const containerFourOhFour = document.getElementsByClassName('fourOhFour');

    for (let index = 0; index < containerFourOhFour.length; index++) {
        const elementContainerFourOhFour = containerFourOhFour[0];

        if (getMomentOfTheDay() == true) {
            elementContainerFourOhFour.style.backgroundColor = greenDomWeb;
        } else if (getMomentOfTheDay() == false) {
            elementContainerFourOhFour.style.backgroundColor = blueDomWeb;
        }
        
    }  
}

function styleMentionsLegales() {
    const containersIntro = document.getElementsByClassName('contentMentionslLegales__introduction');
    /*const elementsTitreH2Impaire = document.getElementsByClassName('contentMentionslLegales__content__sectionImpaire__h2');
    const elementsTitreH2ImpaireSpan = document.getElementsByClassName('contentMentionslLegales__content__sectionImpaire__h2__span');
    const elementsTitreH2Paire = document.getElementsByClassName('contentMentionslLegales__content__sectionPaire__h2');
    const elementsTitreH2PaireSpan = document.getElementsByClassName('contentMentionslLegales__content__sectionPaire__h2__span');*/
    const elementsParagraphes = document.getElementsByTagName('p');

    for (let index = 0; index < containersIntro.length; index++) {
        const containerIntro = containersIntro[0];
        
        if (getMomentOfTheDay() == true) {
            containerIntro.style.backgroundColor = greenDomWeb;
        } else if (getMomentOfTheDay() == false) {
            containerIntro.style.backgroundColor = blueDomWeb;
        }
    }

    for (let index = 0; index < elementsParagraphes.length; index++) {
        const elementParagraphe = elementsParagraphes[index];
        
        if (getMomentOfTheDay() == true) {
            elementParagraphe.style.color = greyColorParaandTitleDay;
        } else if (getMomentOfTheDay() == false) {
            elementParagraphe.style.color = whiteColorLinkNav;
        }
    }
    
}


// Footer
function createFooter() {

    const elementsFooter = document.getElementsByClassName('footer');
    const elementsContainerLogoFooter = document.getElementsByClassName('footer__columnLeft__containerLogo');
    const elementsLinkFooter = document.getElementsByClassName('footer__columnLeft__containerLink__link');
    
    const logoFooterDay = logoDay;
    const logoFooterNight = logoNight;

    if (getMomentOfTheDay() == true) {
        for (let index = 0; index < elementsFooter.length; index++) {
            const elementFooter = elementsFooter[0];
            elementFooter.style.backgroundColor = greenDomWeb;
        }

        for (let index = 0; index < elementsContainerLogoFooter.length; index++) {
            const elementLogoFooter = elementsContainerLogoFooter[0];
            elementLogoFooter.innerHTML = "<img src=" + logoFooterDay + " alt='Logo de Dominique Quaintenne développeur front end, Wordpress, web designer' class='footer__columnLeft__containerLogo__logo'>";    
        }

        for (let index = 0; index < elementsLinkFooter.length; index++) {
            const elementLink = elementsLinkFooter[0];

            elementLink.addEventListener('mouseover', function() {
                elementLink.style.color = whiteColorLinkNav;
            });
            elementLink.addEventListener('mouseout', function() {
                elementLink.style.color = greyColorParaandTitleDay;
            });
            
        }

    } else if(getMomentOfTheDay() == false) {
        for (let index = 0; index < elementsFooter.length; index++) {
            const elementFooter = elementsFooter[0];
            elementFooter.style.backgroundColor = "";
        }

        for (let index = 0; index < elementsContainerLogoFooter.length; index++) {
            const elementLogoFooter = elementsContainerLogoFooter[0];
            elementLogoFooter.innerHTML = "<img src=" + logoFooterNight + " alt='Logo de Dominique Quaintenne développeur front end, Wordpress, web designer' class='footer__columnLeft__containerLogo__logo'>";    
        }

        for (let index = 0; index < elementsLinkFooter.length; index++) {
            const elementLink = elementsLinkFooter[0];
            elementLink.addEventListener('mouseover', function() {
                elementLink.style.color = yellowDomWeb;
            });
            elementLink.addEventListener('mouseout', function() {
                elementLink.style.color = whiteColorLinkNav;
            });
        }

    }
}


    




