var bio = {
  "name": "Bobby Tan",
  "role": "Senior Interaction Designer",
  "welcomeMessage": "Ut enim ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat.",
  "contacts": {
    "phone": "404-668-7965",
    "email": "bobby.tan@gmail.com",
    "github": "bt7893",
    "twitter": "@ttstan",
    "location": "McKinney, TX"
  },
  "skills": ["Adobe Creative Suite ", "CSS 5", "HTML 5", "Javascript"],
  "biopic": "images/fry.jpg"
}

var education = {
  "schools": [{
    "name": "School of the Art Institute of Chicago",
    "degree": "Masters of Fine Arts",
    "location": "Chicago, IL",
    "majors": "Art & Technology",
    "minors": "3D Computer Animation",
    "datesAttended": 1995,
    "onlineInfo": "https://www.saic.edu"
  }, {
    "name": "Saito Academy of Graphic Design",
    "degree": "Bachelors of Fine Arts",
    "location": "Tokyo, Japan",
    "majors": "Industrial Design",
    "minors": "Illustration",
    "datesAttended": 1990,
    "onlineInfo": "https://www.saito.com.my"
  }],

  "onlineCourses": [{
    "title": "Front-End Web Development",
    "school": "Udacity",
    "datesAttended": 2014,
    "url": "http://www.udacity.com"
  }]
}

var work = {
  "jobs": [{
    "employer": "AT&T, Inc",
    "title": "Senior Visual Designer",
    "location": "Dallas, TX",
    "dates": "Apr 2004 - Present (8 years)",
    "description": "UI/UX design for TV, Mobile, Tablet, Web and Wearables. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
{
  "employer": "Terraglyph Interactive Studios",
  "title": "Lead 3D Animator",
  "location": "Schaumburg, IL",
  "dates": "Jan 2000 - Mar 2004",
  "description": "3D Character Animation for TV commercials and In-house TV promotions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
},
{
  "employer": "All Asia Broadcast Center",
  "title": "Lead 3D Animator",
  "location": "Kuala Lumpur, Malaysia",
  "dates": "Apr 1996 - Oct 1999",
  "description": "3D Animation for TV commercials and In-house TV promotions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
},
]
}

var projects = {
  "project": [{
    "titles": "U-verse On Demand",
    "date": "August, 2013",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrls": {
      "sample1": "images/197x148.gif",
      "sample2": "images/197x148.gif"
    }

  }]
}

var contactsPhone = bio.contacts.phone;
var contactsEmail = bio.contacts.email;
var contactsGithub = bio.contacts.github;
var contactsTwitter = bio.contacts.twitter;
var contactsLocation = bio.contacts.location;
var bioList = ["name", "role", "welcomeMessage", "contacts", "skills"]
var contactsList = [contactsPhone, contactsEmail, contactsGithub, contactsTwitter, contactsLocation];
var HTMLlist = [HTMLmobile, HTMLemail, HTMLgithub, HTMLtwitter, HTMLlocation];

/////////////////////////////////////////////////////////////////////////////////////////////////////


// Append & Prepend
function prependThis(param1, param2, param3) {
  var thisElement = param1.replace("%data%", param2);
  $(param3).prepend(thisElement);
}

function appendThis(param1, param2, param3) {
  var thisElement = param1.replace("%data%", param2);
  $(param3).append(thisElement);
}

//// Header --------------------------------------------------------------------

// Name and Role
if (bio.role.length > 0) {
  prependThis(HTMLheaderRole, bio.role, "#header");
}

if (bio.name.length > 0) {
  prependThis(HTMLheaderName, bio.name, "#header");
}

//// Top Contacts (& Footer)
for (var i in contactsList) {
  if (contactsList[i].length > 0) {
    appendThis(HTMLlist[i], contactsList[i], "#topContacts");
    appendThis(HTMLlist[i], contactsList[i], "#footerContacts");
  }
}

// Biopic
  appendThis(HTMLbioPic, bio.biopic, "#header");

// Welcome Message
  appendThis(HTMLWelcomeMsg, bio.welcomeMessage, "#header");

// Skills at a Glance
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (i = 0; i < bio.skills.length; i++) {
    appendThis(HTMLskills, bio.skills[i], "#header");
  }
}




//// Work Experience -----------------------------------------------------------
work.display = function() {
  for (var i in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var workEmployerList = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var workJobTitleList = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var employerAndTitle = workEmployerList + workJobTitleList;
    var workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var workDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(employerAndTitle, workDates, workDescription);
  }
}

work.display();

//// Projects ------------------------------------------------------------------
projects.display = function() {
  if (projects.project.length > 0) {
    $("#projects").append(HTMLprojectStart);
    for (i = 0; i < projects.project.length; i++) {
      var projectsTitleList = HTMLprojectTitle.replace("%data%", projects.project[i].titles);
      var projectDatesList = HTMLprojectDates.replace("%data%", projects.project[i].date);
      var projectDescriptionList = HTMLprojectDescription.replace("%data%", projects.project[i].description);
      var projectImage1 = HTMLprojectImage.replace("%data%", projects.project[i].imageUrls.sample1);
      var projectImage2 = HTMLprojectImage.replace("%data%", projects.project[i].imageUrls.sample2);
      $(".project-entry:last").append(projectsTitleList, projectDatesList, projectDescriptionList, projectImage1, projectImage2);
    }
  }
}

projects.display();

//// Education -----------------------------------------------------------------
education.display = function() {
  //--- Schools ---//
  if (education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    for (i = 0; i < education.schools.length; i++) {
      var schoolNameList = HTMLschoolName.replace("%data%", education.schools[i].name);
      var schoolDegreeList = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var schoolNameAndDegree = schoolNameList + schoolDegreeList;
      var schoolDegreeList = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
      var schoolLocationList = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var schoolMajorList = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $(".education-entry:last").append(schoolNameAndDegree, schoolDegreeList, schoolLocationList, schoolMajorList);
    }
  }

  //--- Online Courses ---//
  if (education.onlineCourses.length > 0) {
    $(".education-entry:last").append(HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses.length; i++) {
      var onlineTitleList = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var onlineSchoolList = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var onlineTitleAndSchoolName = onlineTitleList + onlineSchoolList;
      var onlineDatesList = HTMLonlineDates.replace("%data%", education.onlineCourses[i].datesAttended);
      var onlineURLList = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
      $(".education-entry:last").append(onlineTitleAndSchoolName, onlineDatesList, onlineURLList);
    }
  }
}

education.display();

//// GOOGLE MAPS ---------------------------------------------------------------
$("#mapDiv").append(googleMap);
