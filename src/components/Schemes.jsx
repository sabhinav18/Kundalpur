// export default function Schemes() {
//   // const items = [
//   //   {
//   //     title: "Annadan (Food Seva)",
//   //     desc: "Support daily prasad and community meals for visitors and the needy.",
//   //   },
//   //   {
//   //     title: "Education Aid",
//   //     desc: "Sponsor scholarships, study materials, and spiritual literature.",
//   //   },
//   //   {
//   //     title: "Healthcare Support",
//   //     desc: "Fund medical camps, health checkups, and essential services.",
//   //   },
//   // ];

//   const items = [
//     {
//       title: "Annadan (Food Seva)",
//       desc: "Support daily prasad and community meals for visitors and the needy.",
//     },
//     {
//       title: "Education Aid",
//       desc: "Sponsor scholarships, study materials, and spiritual literature.",
//     },
//     {
//       title: "Healthcare Support",
//       desc: "Fund medical camps, health checkups, and essential services.",
//     },
//   ];

//   return (
//     <section id="schemes" className="section">
//       <div className="container">
//         <div className="flex items-end justify-between">
//           <h2 className="heading">Schemes</h2>
//           <a href="#donate" className="text-sm font-semibold text-rose-700">
//             Contribute
//           </a>
//         </div>
//         <div className="mt-6 grid md:grid-cols-3 gap-6">
//           {items.map((card) => (
//             <div key={card.title} className="card">
//               <div className="text-sm font-semibold text-rose-700">
//                 {card.title}
//               </div>
//               <div className="mt-2 text-sm text-slate-700">{card.desc}</div>
//               <a href="#donate" className="mt-4 btn-primary">
//                 Donate
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


export default function Schemes() {
  const items = [
    // {
    //   title: "BHOJANSHALA",
    //   desc: "Daily satvik meals for saints, devotees and visiting pilgrims.",
    // },
    // {
    //   title: "TYAGIVRATI BHOJANSHALA",
    //   desc: "Dedicated bhojanshala for tyagivrat saints observing austerity and vows.",
    // },
    // {
    //   title: "UDASIN AASHRAM",
    //   desc: "Seva, stay and facilities for Udasin sadhus and seekers.",
    // },
    // {
    //   title: "GAUSHALA",
    //   desc: "Protection, shelter and nurturing care for gaumata (cows and calves).",
    // },
    // {
    //   title: "AUSHDHALAY",
    //   desc: "Distribution of medicines and basic healthcare support for the needy.",
    // },
    // {
    //   title: "VIDYAGAM KAKSH",
    //   desc: "Classroom space for spiritual, moral and cultural education.",
    // },
    {
      title: "भोजशाला (BHOJANSHALA)",
      desc: "यह योजना श्रद्धालुओं एवं जरूरतमंदों को स्वच्छ, पौष्टिक और सुस्वादु भोजन उपलब्ध कराने हेतु संचालित की जाती है।",
    },
    {
      title: "त्यागीव्रती भोजनशाला (TYAGIVRATI BHOJANSHALA)",
      desc: "यह भोजनशाला त्यागी, संन्यासी एवं व्रतधारी साधकों के लिए विशेष रूप से सात्विक एवं नियमपूर्वक तैयार भोजन प्रदान करती है।",
    },
    {
      title: "उदासीन आश्रम (UDASIN AASHRAM)",
      desc: "यह आश्रम साधु-संतों एवं आध्यात्मिक साधकों के निवास, साधना एवं सत्संग हेतु शांत एवं पवित्र वातावरण उपलब्ध कराता है।",
    },
    {
      title: "गौशाला (GAUSHALA)",
      desc: "गौशाला में गौमाता की सेवा, संरक्षण एवं पालन-पोषण किया जाता है, साथ ही गौवंश के संवर्धन और देखभाल का विशेष ध्यान रखा जाता है।",
    },
    {
      title: "औषधालय (AUSHDHALAY)",
      desc: "औषधालय में जरूरतमंदों को प्राथमिक उपचार एवं आवश्यक दवाइयाँ उपलब्ध कराई जाती हैं, जिससे जनस्वास्थ्य की सेवा हो सके।",
    },
    {
      title: "विद्यागम कक्ष (VIDYAGAM KAKSH)",
      desc: "विद्यागम कक्ष विद्यार्थियों के अध्ययन, ज्ञान-वृद्धि एवं शैक्षणिक गतिविधियों के संचालन हेतु समर्पित है।",
    },
  ];


  return (
    <section id="schemes" className="section">
      <div className="container">
        <div className="flex items-end justify-between">
          <h2 className="heading">योजनाओं</h2>
          <a href="#donation" className="text-sm font-semibold text-rose-700">
            योगदान देना
          </a>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.map((card) => (
            <div key={card.title} className="card">
              <div className="text-sm font-semibold text-rose-700">
                {card.title}
              </div>
              <div className="mt-2 text-sm text-slate-700">{card.desc}</div>
              <a href="https://shreebadebaba.techjainsupport.co.in/phonelogin" className="mt-4 btn-primary">
                Donate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


  // {
  //     title: "भोजशाला (BHOJANSHALA)",
  //     desc: "यह योजना श्रद्धालुओं एवं जरूरतमंदों को स्वच्छ, पौष्टिक और सुस्वादु भोजन उपलब्ध कराने हेतु संचालित की जाती है।",
  //   },
  //   {
  //     title: "त्यागीव्रती भोजनशाला (TYAGIVRATI BHOJANSHALA)",
  //     desc: "यह भोजनशाला त्यागी, संन्यासी एवं व्रतधारी साधकों के लिए विशेष रूप से सात्विक एवं नियमपूर्वक तैयार भोजन प्रदान करती है।",
  //   },
  //   {
  //     title: "उदासीन आश्रम (UDASIN AASHRAM)",
  //     desc: "यह आश्रम साधु-संतों एवं आध्यात्मिक साधकों के निवास, साधना एवं सत्संग हेतु शांत एवं पवित्र वातावरण उपलब्ध कराता है।",
  //   },
  //   {
  //     title: "गौशाला (GAUSHALA)",
  //     desc: "गौशाला में गौमाता की सेवा, संरक्षण एवं पालन-पोषण किया जाता है, साथ ही गौवंश के संवर्धन और देखभाल का विशेष ध्यान रखा जाता है।",
  //   },
  //   {
  //     title: "औषधालय (AUSHDHALAY)",
  //     desc: "औषधालय में जरूरतमंदों को प्राथमिक उपचार एवं आवश्यक दवाइयाँ उपलब्ध कराई जाती हैं, जिससे जनस्वास्थ्य की सेवा हो सके।",
  //   },
  //   {
  //     title: "विद्यागम कक्ष (VIDYAGAM KAKSH)",
  //     desc: "विद्यागम कक्ष विद्यार्थियों के अध्ययन, ज्ञान-वृद्धि एवं शैक्षणिक गतिविधियों के संचालन हेतु समर्पित है।",
  //   },