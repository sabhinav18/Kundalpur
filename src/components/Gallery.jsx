// import { useState } from "react";

// const images = [
//   "./src/assets/K1.png",
//   "./src/assets/K2.png",
//   "./src/assets/K3.png",
//   "./src/assets/K4.jpg",
//   "./src/assets/K2.png",
//   "./src/assets/K3.png",
// ];

// export default function Gallery() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section id="gallery" className="section">
//       <div className="container">
//       <div className="flex items-end justify-between">
//         <h2 className="heading">Photo Gallery</h2>
//         <a
//           href="#"
//           className="text-sm font-semibold text-rose-700 hover:text-rose-800"
//         >
//           View all
//         </a>
//       </div>
//       <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//         {images.map((src, i) => (
//           <button
//             key={src}
//             className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 shadow-sm hover:shadow-md transition"
//             onClick={() => setOpenIndex(i)}
//             aria-label={`Open image ${i + 1}`}
//           >
//             <img
//               src={src}
//               alt="Temple gallery"
//               className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
//           </button>
//         ))}
//       </div>
//       </div>

//       {openIndex !== null && (
//         <div
//           className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
//           onClick={() => setOpenIndex(null)}
//         >
//           <div
//             className="relative max-w-5xl w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={images[openIndex]}
//               alt="Large view"
//               className="w-full h-auto rounded-2xl shadow-2xl"
//             />
//             <button
//               className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow hover:bg-white"
//               onClick={() => setOpenIndex(null)}
//               aria-label="Close"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



import { useState } from "react";

const images = [
  "./src/assets/K1.png",
  "./src/assets/K2.png",
  "./src/assets/K3.png",
  "./src/assets/K4.jpg",
  "./src/assets/K2.png",
  "./src/assets/K3.png",
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="gallery" className="section">
      <div className="container">
      <div className="flex items-end justify-between">
        <h2 className="heading">कुण्डलपुर गैलरी</h2>
        <a
          href="#"
          className="text-sm font-semibold text-rose-700 hover:text-rose-800"
        >
          सभी देखें
        </a>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 shadow-sm hover:shadow-md transition"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open image ${i + 1}`}
          >
            <img
              src={src}
              alt="Temple gallery"
              className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </button>
        ))}
      </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[openIndex]}
              alt="Large view"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow hover:bg-white"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
