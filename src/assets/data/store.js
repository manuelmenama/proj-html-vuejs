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

  //store delle materie con loghi

  //store degli insegnanti

  //store di what in for you

  //store card "popular courses"
  popularCourses: [
    {
      id: 1,
      name: "Android Developer",
      shortDescriprion: "Sed justo et takimata stet at et lorem, nonumy at consetetur sit dolore tempor sed sed stet. Sanctus lorem sed.",
      teacher: "David Sanders",
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
      teacher: "Jennifer Powell",
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
      teacher: "Edward Bowman",
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
      teacher: "Preston Marshall",
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
      teacher: "David Sanders",
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
      teacher: "Jennie King",
      price: "$30",
      numberOfStudent: 30,
      subject: "language",
      imagePath: "course-6-f-img.jpg",
      link: "#"
    },
  ],

  //store pricing plan

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