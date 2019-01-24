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
aboutMe[0] = 'Lorem ipsum.';
aboutMe[1] = 'Lorem ipsum.<br>Lorem ipsum.';
/* EXPERIENCE */
experience.push([]);
experience[0][0] = '07.2015 - 09.2015 - Lorem ipsum.';
experience[0][1] = '• Praktykant w Lorem ipsum.'
/* EDUCATION */
education.push([]);
education[0][0] = '2016 - obecnie - Lorem ipsum:';
education[0][1] = '• Lorem ipsum.';
education.push([]);
education[1][0] = '2013 - 2016 - Lorem ipsum:';
education[1][1] = '• Lorem ipsum';
education.push([]);
education[2][0] = '2012 - 2013 - Lorem ipsum:';
education[2][1] = '• Lorem ipsum';
education.push([]);
education[3][0] = '2009 - 2012 - I Liceum Ogólnokształcące im. Jędrzeja Śniadeckiego w Dzierżoniowie:';
education[3][1] = '• profil matematyczno – fizyczny';
/* LANGUAGES */
languages.push([]);
languages[0][0] = 'Angielski';
languages[0][1] = '85%';
languages.push([]);
languages[1][0] = 'Niemiecki';
languages[1][1] = '20%';
/* SKILLS */
skills.push([]);
skills[0][0] = 'MS Office';
skills[0][1] = '80%';
skills.push([]);
skills[1][0] = 'MS Access';
skills[1][1] = '50%';
skills.push([]);
skills[2][0] = 'MS Project';
skills[2][1] = '30%';
skills.push([]);
skills[3][0] = 'WEB (HTML, CSS, JS)';
skills[3][1] = '80%';
skills.push([]);
skills[4][0] = 'Grafika (GIMP, Inkscape)';
skills[4][1] = '80%';
/* SKILLS PERSON */
skillsPerson.push([]);
skillsPerson[0][0] = 'Praca w grupie';
skillsPerson[0][1] = '80%';
skillsPerson.push([]);
skillsPerson[1][0] = 'Kreatywność';
skillsPerson[1][1] = '90%';
skillsPerson.push([]);
skillsPerson[2][0] = 'Gotowość do uczenia się';
skillsPerson[2][1] = '85%';
skillsPerson.push([]);
skillsPerson[3][0] = 'Komunikatywność';
skillsPerson[3][1] = '90%';
/* CONTACT */
mail = 'Loremipsum@gmail.com';
phone = 'xxx xxx xxx';
address1 = '58-200 Dzierżoniów';
address2 = 'ul. Lorem ipsum';



/* DANE - KONIEC */


window.onload = function loadVariables(){
    document.getElementById('cv-head-person').innerHTML = pBegin + name + ' ' + lastName + pEnd;
    document.getElementById('cv-head-photo').innerHTML = '<img src="images/photo.png" alt="Photo">';
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