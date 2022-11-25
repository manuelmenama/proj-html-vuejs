import { reactive } from 'vue';

export const store = reactive ({

  //store del menu header

  //store del carosello jumbotron

  //store delle materie con loghi

  //store degli insegnanti

  //store di what in for you

  //store card "popular courses"

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