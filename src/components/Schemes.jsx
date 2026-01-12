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
    {
      title: "अन्नदान (भोजन सेवा)",
      desc: "आगंतुकों और जरूरतमंदों के लिए दैनिक प्रसाद और सामुदायिक भोजन में सहयोग करें।",
    },
    {
      title: "शैक्षिक सहायता",
      desc: "छात्रवृत्तियाँ, अध्ययन सामग्री और आध्यात्मिक साहित्य प्रायोजित करना।",
    },
    {
      title: "स्वास्थ्य सेवा सहायता",
      desc: "चिकित्सा शिविरों, स्वास्थ्य जांचों और आवश्यक सेवाओं के लिए धन उपलब्ध कराएं।",
    },
  ];


  return (
    <section id="schemes" className="section">
      <div className="container">
        <div className="flex items-end justify-between">
          <h2 className="heading">योजनाओं</h2>
          <a href="#donate" className="text-sm font-semibold text-rose-700">
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
              <a href="#donate" className="mt-4 btn-primary">
                Donate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
