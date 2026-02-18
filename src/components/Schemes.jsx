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
      title: "BHOJANSHALA",
      desc: "",
    },
    {
      title: "TYAGIVRATI BHOJANSHALA",
      desc: "",
    },
    {
      title: "UDASIN AASHRAM",
      desc: "",
    },
    {
      title: "GAUSHALA",
      desc: "",
    },
    {
      title: "AUSHDHALAY",
      desc: "",
    },
    {
      title: "VIDYAGAM KAKSH",
      desc: "",
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
              <a href="#donation" className="mt-4 btn-primary">
                Donate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
