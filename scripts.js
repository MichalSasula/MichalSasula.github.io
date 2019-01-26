var footer = '';
var name = '';
var lastName = '';
var aboutMe = [];
var experience = [];
var education = [];
var languages = [];
var skills = [];
var skillsPerson = [];
var mail = '';
var phone = '';
var address1 = '';
var address2 = '';

var pBegin = '<p>';
var pEnd = '</p>';
var pTextAlign = '<p style="text-align: justify">';


/* DANE */

/* PERSON */
name = 'Michał';
lastName = 'Sasuła';
/* FOOTER */
footer = 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celach rekrutacji, zgodnie z Ustawą z dn. 29 sierpnia 1997 r. o ochronie danych osobowych<br>(Dz. U. z 2002 r. Nr 101, poz. 926 z późniejszymi zmianami.';
/* ABOUT ME */
aboutMe[0] = 'Obecnie doktorant na Wydziale Budownictwa Lądowego i Wodnego Politechniki Wrocławskiej.';
aboutMe[1] = 'Moje zainteresowania naukowe dotyczą głównie teorii prętów cienkościennych i jej implementacji z wykorzystaniem metody elementów skończonych.';
/* EXPERIENCE */
experience.push([]);
experience[0][0] = '07.2013 - 09.2013 - budowa biurowca w kompleksie biurowym West Forum firmy Archicom. Wrocław, ul. Strzegomska 142.';
experience[0][1] = '• Stażysta w ramach praktyk studenckich na Wydziale Budownictwa Lądowego i Wodnego PWr.';
experience.push([]);
experience[1][0] = '07.2017 - 09.2017 - praca w dziale Kalibracji firmy Sonel S.A. Świdnica, ul. Wokulskiego11.';
experience[1][1] = '• Stażysta w ramach praktyk studenckich na kierunku Matematyka Stosowana.';
/* EDUCATION */
education.push([]);
education[0][0] = '2017 - obecnie - Studia 3. stopnia na kierunku Budownictwo Lądowe i Wodne, Politechnika Wrocławska.';
education[0][1] = '• Temat przewodu: Analiza stateczności prętów cienkościennych.';
education.push([]);
education[1][0] = '2014 - 2017 - Studia 2. stopnia na kierunku Budownictwo Lądowe i Wodne, Politechnika Wrocławska.';
education[1][1] = '• Specjalność: Konstrukcje budowlane.';
education.push([]);
education[2][0] = '2010 - 2014 - Studia 1. stopnia na kierunku Budownictwo Lądowe i Wodne, Politechnika Wrocławska.';
education[2][1] = '• Specjalność: Inżynieria budowlana.';
education.push([]);
education[3][0] = '2007 - 2010 - Wykształcenie Średnie, I Liceum Ogólnokształcące im. Jędrzeja Śniadeckiego w Dzierżoniowie.';
education[3][1] = '• Profil: biologiczno-chemiczny.';
/* LANGUAGES */
languages.push([]);
languages[0][0] = 'Angielski';
languages[0][1] = '75%';
languages.push([]);
languages[1][0] = 'Niemiecki';
languages[1][1] = '50%';
/* SKILLS */
skills.push([]);
skills[0][0] = 'Python';
skills[0][1] = '20%';
skills.push([]);
skills[1][0] = 'C++';
skills[1][1] = '35%';
skills.push([]);
skills[2][0] = 'Abaqus, AutoCAD, Robot Structural Analysis';
skills[2][1] = '80%';
skills.push([]);
skills[3][0] = 'WEB (HTML, CSS, JS)';
skills[3][1] = '20%';
skills.push([]);
skills[4][0] = 'Matlab, Mathematica, R, LaTeX';
skills[4][1] = '80%';
skills.push([]);
skills[5][0] = 'Pakiet Office';
skills[5][1] = '70%';
skills.push([]);
skills[6][0] = 'Linux';
skills[6][1] = '30%';
/* SKILLS PERSON */
skillsPerson.push([]);
skillsPerson[0][0] = 'Gotowość do uczenia się';
skillsPerson[0][1] = '100%';
skillsPerson.push([]);
skillsPerson[1][0] = 'Komunikatywność';
skillsPerson[1][1] = '90%';
/* CONTACT */
mail = 'michalsasula@gmail.com';
phone = '(+48) 668 830 989';
address1 = '58-200 Dzierżoniów';
address2 = 'Oś. Różane 16B/10';



/* DANE - KONIEC */


window.onload = function loadVariables(){
    document.getElementById('cv-head-person').innerHTML = pBegin + name + ' ' + lastName + pEnd;
    document.getElementById('cv-head-photo').innerHTML = '<img src="images/picture2.jpg" alt="Photo">';
    document.getElementById('cv-footer').innerHTML = pBegin + footer + pEnd;
    document.getElementById('cv-block-content-aboutMe').innerHTML = pTextAlign + aboutMe[0] + pBegin + aboutMe[1] + pEnd;
    for(var i = 0; i < experience.length; i++){
        document.getElementById('cv-block-content-experience').innerHTML += pBegin + experience[i][0] + pEnd;
        for(var j = 1; j< experience[i].length; j++){
            document.getElementById('cv-block-content-experience').innerHTML += pBegin + experience[i][j] + pEnd;
        }
    }
    for(var i = 0; i < education.length; i++){
        document.getElementById('cv-block-content-education').innerHTML += pBegin + education[i][0] + pEnd;
        for(var j = 1; j< education[i].length; j++){
            document.getElementById('cv-block-content-education').innerHTML += pBegin + education[i][j] + pEnd;
        }
    }
    for(var i = 0; i < languages.length; i++){
        document.getElementById('cv-block-content-languages').innerHTML +=
        pBegin + languages[i][0] + pEnd +
        '<div class="cv-block-content-languages-skill"><div class="cv-block-content-languages-skill-progress"' + 'style="width: ' + languages[i][1] + '">' + '</div></div>';
    }
    for(var i = 0; i < skills.length; i++){
        document.getElementById('cv-block-content-skills').innerHTML +=
        pBegin + skills[i][0] + pEnd +
        '<div class="cv-block-content-skills-skill"><div class="cv-block-content-skills-skill-progress"' + 'style="width: ' + skills[i][1] + '">' + '</div></div>';
    }
    document.getElementById('cv-block-content-skills').innerHTML += '<div class="cv-block-content-LSbar"></div>' + '<div class="cv-block-content-LSbar"></div>';
    for(var i = 0; i < skillsPerson.length; i++){
        document.getElementById('cv-block-content-skills').innerHTML +=
        pBegin + skillsPerson[i][0] + pEnd +
        '<div class="cv-block-content-skills-skill"><div class="cv-block-content-skills-skill-progress"' + 'style="width: ' + skillsPerson[i][1] + '">' + '</div></div>';
    }
    document.getElementById('cv-block-content-contact').innerHTML +=
    '<i class="material-icons">mail</i><div class="cv-block-content-contact-text">' + pBegin + '<a href="mailto'+ mail + '">' + mail + '</a>' + pEnd + '</div>' + 
    '<i class="material-icons">phone</i><div class="cv-block-content-contact-text">' + pBegin + phone + pEnd + '</div>' +
    '<i class="material-icons">home</i><div class="cv-block-content-contact-text">' + pBegin + address1 + pEnd + pBegin + address2 + pEnd + '</div>';
};