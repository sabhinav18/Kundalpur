// export default function Contact() {
//   return (
//     <section id="contact" className="section">
//       <div className="container">
//         <div className="card">
//         <h2 className="heading">Contact</h2>
//         <form className="mt-6 grid md:grid-cols-2 gap-4">
//           <input
//             className="rounded-lg border border-slate-300 px-4 py-2 text-sm"
//             placeholder="Your Name"
//           />
//           <input
//             className="rounded-lg border border-slate-300 px-4 py-2 text-sm"
//             placeholder="Phone or Email"
//           />
//           <textarea
//             className="md:col-span-2 rounded-lg border border-slate-300 px-4 py-2 text-sm"
//             placeholder="Message"
//             rows={4}
//           />
//           <button
//             type="button"
//             className="md:col-span-2 btn-primary  flex items-center justify-center"
//           >
//             Send
//           </button>
//         </form>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card">
        <h2 className="heading">संपर्क</h2>
        <form className="mt-6 grid md:grid-cols-2 gap-4">
          <input
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm"
            placeholder="आपका नाम"
          />
          <input
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm"
            placeholder="फोन या ईमेल"
          />
          <textarea
            className="md:col-span-2 rounded-lg border border-slate-300 px-4 py-2 text-sm"
            placeholder="संदेश"
            rows={4}
          />
          <button
            type="button"
            className="md:col-span-2 btn-primary  flex items-center justify-center"
          >
            संदेश भेजें
          </button>
        </form>
        </div>
      </div>
    </section>
  );
}

