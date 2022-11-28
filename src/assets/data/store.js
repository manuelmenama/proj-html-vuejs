import { reactive } from 'vue';

export const store = reactive ({

  //store del menu header
  menuList:[
    {
      name: "Home",
      link: "#"
    },
    {
      name: "Courses",
      link: "#"
    },
    {
      name: "Istructor",
      link: "#"
    },
    {
      name: "Events",
      link: "#"
    },
    {
      name: "Pages",
      link: "#"
    },
    {
      name: "Elements",
      link: "#"
    }
  ],

  //store del carosello jumbotron
  jumbotronCta: [
    {
      title: "Contemporay Ideas",
      description: "Sed dolore consetetur sit sadipscing stet sit accusam eos est et. Eos consetetur amet sed tempor aliquyam et no takimata ea. Duo aliquyam et sadipscing rebum sed. Sed sit rebum."
    },
    {
      title: "Lorem Ipsum",
      description: "Rebum ut et ipsum magna magna dolore. Dolore magna dolore voluptua kasd voluptua duo. Tempor kasd sed sadipscing sit sea. Voluptua kasd et lorem clita tempor erat sit dolor, dolor."
    },
    {
      title: "Essilio di",
      description: "Et nonumy rebum consetetur dolore sit est et sanctus, et erat dolor aliquyam sadipscing est voluptua amet magna, ipsum stet ipsum consetetur no ea labore dolores ipsum, lorem ipsum et."
    },
  ],
  
  //store delle materie con loghi
  subjects: [
    {
      name: "Languages",
      logoPath: "h5-custom-icon-1.png",
      link: "#"
    },
    {
      name: "Software",
      logoPath: "h5-custom-icon-2.png",
      link: "#"
    },
    {
      name: "Business",
      logoPath: "h5-custom-icon-3.png",
      link: "#"
    },
    {
      name: "Chemestry",
      logoPath: "h5-custom-icon-4.png",
      link: "#"
    },
    {
      name: "Science",
      logoPath: "h5-custom-icon-5.png",
      link: "#"
    },
    {
      name: "DIY&Craft",
      logoPath: "h5-custom-icon-6.png",
      link: "#"
    },
  ],

  //store of our number
  ourNumber: [
    {
      name: 'User stories',
      number: 168,
      link: '#'
    },
    {
      name: 'Events',
      number: 347,
      link: '#'
    },
  ],
  //store di what in for you
  whatIn: [
    {
      question: "What We Do",
      answer: "Learning Possibilities",
      longAnswer: "Justo stet et ut ipsum consetetur et eos eos amet. Sit sed et gubergren lorem sed, at duo vero sit accusam tempor labore amet sit et. Nonumy magna et sadipscing dolores no.",
      logoPath: "h12-tabs-icon-1.png",
      powerPoint: [
        "We enrich lives through insividual learning.",
        "Mazimizing potential through individual attention.",
        "The trusted name for specialized training.",
        "People teach. People learn. This is were they connect."
      ]
    },
    {
      question: "Degree Programme",
      answer: "Labore labore sadipscing",
      longAnswer: "Name the open present ere say a childe and, feere his parasites they sullen so in kiss been alas, not are so was scape. Mood land a honeyed den it..",
      logoPath: "h12-tabs-icon-2.png",
      powerPoint: [
        "We enrich lives through insividual learning.",
        "Mazimizing potential through individual attention.",
        "The trusted name for specialized training.",
        "People teach. People learn. This is were they connect."
      ]
    },
    {
      question: "Career Achievements",
      answer: "Dolor diam",
      longAnswer: "Did smile for of monastic to. Of oer few breast spent go of many them. Fall seemed albions feel maddest he sad for. The thence might his longed nor then.",
      logoPath: "h12-tabs-icon-3.png",
      powerPoint: [
        "We enrich lives through insividual learning.",
        "Mazimizing potential through individual attention.",
        "The trusted name for specialized training.",
        "People teach. People learn. This is were they connect."
      ]
    },
    {
      question: "Personal Management",
      answer: "Et takimata et",
      longAnswer: "Holy sore glare been to isle, harolds to was or he like waste nor and, revel long forgot glare love steel by. Bower few had from some den his chill.",
      logoPath: "h12-tabs-icon-4.png",
      powerPoint: [
        "We enrich lives through insividual learning.",
        "Mazimizing potential through individual attention.",
        "The trusted name for specialized training.",
        "People teach. People learn. This is were they connect."
      ]
    },
    {
      question: "Steps To Success",
      answer: "Given he a",
      longAnswer: "Shell sighed isle sorrow ancient who suits sea, and native where rhyme shades in him fall sore lands. In sacred his did honeyed lines did by in. And uses not.",
      logoPath: "h12-tabs-icon-5.png",
      powerPoint: [
        "We enrich lives through insividual learning.",
        "Magna vero amet dolor invidunt vero..",
        "People teach. People learn. This is were they connect."
      ]
    },
    {
      question: "Knowledge Transfer",
      answer: "Learning Possibilities",
      longAnswer: "Deigned a ah than atonement knew sight, friends and dwelt yea ever alone few nor deadly paphian. Sighed many was oer me a. Nor mood and along but maddest before.",
      logoPath: "h12-tabs-icon-6.png",
      powerPoint: [
        "We enrich lives through insividual learning.",
        "Mazimizing potential through individual attention.",
        "Earth true open below soul and ever."
      ]
    },
  ],
  whatInCounter: 0,

  //store card "popular courses"
  popularCourses: [
    {
      id: 1,
      name: "Android Developer",
      shortDescriprion: "Sed justo et takimata stet at et lorem, nonumy at consetetur sit dolore tempor sed sed stet. Sanctus lorem sed.",
      teacher: {
        name: "David Sanders",
        work: "PROGRAMMER",
        teacherDescription: "Sadipscing diam invidunt eirmod amet diam accusam diam. Sit est accusam dolore invidunt amet justo dolor erat aliquyam, sea ipsum.",
        portraitPath: "instructor-img-5.jpg"
      },
      price: "free",
      numberOfStudent: 20,
      subject: "programming",
      imagePath: "course-1-f-img.jpg",
      link: "#"
    },
    {
      id: 2,
      name: "Web Designing",
      shortDescriprion: "No et sit lorem takimata aliquyam accusam aliquyam tempor kasd. Dolor sanctus ipsum accusam ut elitr no sit, dolor sed.",
      teacher: {
        name: "Jennifer Powell",
        work: "DESIGNER",
        teacherDescription: "Sadipscing diam invidunt eirmod amet diam accusam diam. Sit est accusam dolore invidunt amet justo dolor erat aliquyam, sea ipsum.",
        portraitPath: "instructor-img-8.jpg"
      },
      price: "free",
      numberOfStudent: 20,
      subject: "programming",
      imagePath: "course-2-f-img.jpg",
      link: "#"
    },
    {
      id: 3,
      name: "Financial Modeling",
      shortDescriprion: "Amet ea rebum elitr et diam no diam labore sanctus diam, et diam rebum dolores rebum. Invidunt et et sit.",
      teacher: {
        name: "Edward Bowman",
        work: "TEACHER",
        teacherDescription: "Sadipscing diam invidunt eirmod amet diam accusam diam. Sit est accusam dolore invidunt amet justo dolor erat aliquyam, sea ipsum.",
        portraitPath: "instructor-img-1.jpg"
      },
      price: "$20",
      numberOfStudent: 30,
      subject: "programming",
      imagePath: "course-3-f-img.jpg",
      link: "#"
    },
    {
      id: 4,
      name: "Business English",
      shortDescriprion: "Lorem nonumy ipsum dolore at et lorem eos est. Et lorem dolores diam sea stet sed accusam justo, accusam voluptua.",
      teacher: {
        name: "Preston Marshall",
        work: "STUDENT",
        teacherDescription: "Sadipscing diam invidunt eirmod amet diam accusam diam. Sit est accusam dolore invidunt amet justo dolor erat aliquyam, sea ipsum.",
        portraitPath: "instructor-img-9.jpg"
      },
      price: "$30",
      numberOfStudent: 40,
      subject: "language",
      imagePath: "course-4-f-img.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Social Computing",
      shortDescriprion: "Dolor sanctus est voluptua vero dolores accusam ipsum ut, no duo accusam erat dolor sed no dolores ipsum. Diam et.",
      teacher: {
        name: "David Sanders",
        work: "STUDENT",
        teacherDescription: "Sadipscing diam invidunt eirmod amet diam accusam diam. Sit est accusam dolore invidunt amet justo dolor erat aliquyam, sea ipsum.",
        portraitPath: "instructor-img-6.jpg"
      },
      price: "free",
      numberOfStudent: 100,
      subject: "tecnology",
      imagePath: "course-5-f-img.jpg",
      link: "#"
    },
    {
      id: 6,
      name: "Learn Spanish",
      shortDescriprion: "Justo invidunt lorem tempor gubergren magna. Lorem et clita diam tempor elitr aliquyam accusam dolor. Sed magna dolores erat sed.",
      teacher: {
        name: "Jennie King",
        work: "STUDENT",
        teacherDescription: "Sadipscing diam invidunt eirmod amet diam accusam diam. Sit est accusam dolore invidunt amet justo dolor erat aliquyam, sea ipsum.",
        portraitPath: "instructor-img-4.jpg"
      },
      price: "$30",
      numberOfStudent: 30,
      subject: "language",
      imagePath: "course-6-f-img.jpg",
      link: "#"
    },
  ],

  //store pricing plan
  paymentPlans: [
    {
      type: "Standard",
      price: "$12",
      numberOfCourses: 2,
      duration: "15 Days",
      coursesIncluded: {
        webDesigning: true,
        humanCenteredDesign: true,
        basicMarketing: false,
        pytonForEverybody: false,
        androidDeveloper: false,
        businessEnglish: false
      }
    },
    {
      type: "Professional",
      price: "$59",
      numberOfCourses: 4,
      duration: "30 Days",
      coursesIncluded: {
        webDesigning: true,
        humanCenteredDesign: true,
        basicMarketing: true,
        pytonForEverybody: true,
        androidDeveloper: false,
        businessEnglish: false
      }
    },
    {
      type: "Advanced",
      price: "$88",
      numberOfCourses: 6,
      duration: "30 Days",
      coursesIncluded: {
        webDesigning: true,
        humanCenteredDesign: true,
        basicMarketing: true,
        pytonForEverybody: true,
        androidDeveloper: true,
        businessEnglish: true
      }
    },
  ],

  //store famous clienti

  //store footer
  //info iAcademy
  contactAcademy: {
    telephone: "1-677-124-44227",
    openTime: "Mon - Sat 8.00 - 18.00"
  },
  //support links
  supportLinks: [
    {
      name: "User dashboard",
      link: "#"
    },
    {
      name: "Contact Us",
      link: "#"
    },
    {
      name: "FAQ",
      link: "#"
    },
    {
      name: "Course Offer",
      link: "#"
    },
    {
      name: "Events",
      link: "#"
    },
  ],
  //lower footer
  //copyright info
  externalInfo: {
    
    copyright: "Copyrights 2017 ©Mikado Themes",
    telephone: "+44 300 303 0266"
    
  },
  socialContact:[
    {
      name: "Twitter",
      logoClass: "bi bi-twitter",
      link: "#"
    },
    {
      name: "Instagram",
      logoClass: "bi bi-instagram",
      link: "#"
    },
    {
      name: "Facebook",
      logoClass: "fa-brands fa-facebook-f",
      link: "#"
    },
  ]

});