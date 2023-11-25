let headsData = [
    {
      name: "Akshay Sawai",
      image: "teaming/akshay.jpg",
      headstype:"Events Head",
      // instalink: "https://www.instagram.com/bhawesh_kukreja/",
      fblink: "https://www.facebook.com/profile.php?id=100077291792847",
      // twitterlink: "https://twitter.com/BhaweshKukreja",
      whatsapplink: "https://api.whatsapp.com/send/?phone=917796272629&text&type=phone_number&app_absent=0",
      linkedinlink: "https://www.linkedin.com/in/akshay-sawai-430466249/",
      maillink:"mailto:akshaysawai.iitkgp@gmail.com",
    },
    {
      name: "Hari Prasad Gardas",
      image: "teaming/hari.jpg",
      headstype:"Events Head",
      // instalink: "https://www.instagram.com/bhawesh_kukreja/",
      fblink: "https://www.facebook.com/profile.php?id=100075432186360&mibextid=nW3QTL",
      // twitterlink: "https://twitter.com/BhaweshKukreja",
      whatsapplink: "https://api.whatsapp.com/send/?phone=917416767210&text&type=phone_number&app_absent=0",
      linkedinlink: "https://www.linkedin.com/in/hari-prasad-gardas-618536232/",
      maillink:"mailto:hariprasadgardas.iitkgp@gmail.com",
    },{
      name: "Kaashvi Batra",
      image: "teaming/kaashvi.jpg",
      headstype:"Events Head",
      // instalink: "https://www.instagram.com/bhawesh_kukreja/",
      fblink: "https://www.facebook.com/profile.php?id=100075293118704",
      // twitterlink: "https://twitter.com/BhaweshKukreja",
      whatsapplink: "https://api.whatsapp.com/send/?phone=919899981695&text&type=phone_number&app_absent=0",
      linkedinlink: "https://www.linkedin.com/in/kaashvi-batra/",
      maillink:"mailto:kaashvibatra.iitkgp@gmail.com",
    },{
      name: "S L Maanas",
      image: "teaming/maanas.jpg",
      headstype:"Events Head",
      // instalink: "https://www.instagram.com/bhawesh_kukreja/",
      fblink: "https://www.facebook.com/profile.php?id=100012539835667",
      // twitterlink: "https://twitter.com/BhaweshKukreja",
      whatsapplink: "https://api.whatsapp.com/send/?phone=917981189177&text&type=phone_number&app_absent=0",
      linkedinlink: "https://www.linkedin.com/in/maanas-s-l-bbb26022b/",
      maillink:"mailto:slmaanas.iitkgp@gmail.com",
    },
  ];
  
  headsData = headsData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  
  
  export default headsData;