// export default function Support() {
//   return (
//     <section id="support" className="section">
//       <div className="container grid md:grid-cols-2 gap-8 items-center">
//         <div className="card bg-gradient-to-br from-rose-50 to-amber-50">
//           <h2 className="heading">Support</h2>
//           <p className="mt-3 text-slate-700">
//             Your contribution helps sustain seva, maintain the temple, and
//             serve devotees better. Every donation counts.
//           </p>
//           <div id="donate" className="mt-5 flex gap-3">
//             <a href="#" className="btn-primary">Donate Online</a>
//             <a href="#contact" className="btn-secondary">Contact Office</a>
//           </div>
//         </div>
//         <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200">
//           <img
//             src="https://images.unsplash.com/photo-1558960891-88b71488d5a7?q=80&w=1600&auto=format&fit=crop"
//             alt="Seva and support"
//             className="h-full w-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from 'react';
// import { Mail, Phone, MapPin, Heart } from 'lucide-react';

// const Support = () => {
//   return (
//     <section id="support" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
//           <div>
//             <span className="text-temple-red font-semibold uppercase tracking-wider text-sm">
//               Get In Touch
//             </span>
//             <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Support & Contact
//             </h2>
//             <p className="text-lg text-gray-600 mb-8">
//               We are here to assist you. Whether you have questions about sevas, accommodation, or donations, please reach out to us.
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 bg-gray-100 rounded-full text-temple-red">
//                   <MapPin className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Address</h4>
//                   <p className="text-gray-600">Shri Bade Baba Temple Complex,  <br/>Kundalpur, Madhya Pradesh 4707723</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 bg-gray-100 rounded-full text-temple-red">
//                   <Phone className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Phone</h4>
//                   <p className="text-gray-600">+91 98765 43210</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="p-3 bg-gray-100 rounded-full text-temple-red">
//                   <Mail className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Email</h4>
//                   <p className="text-gray-600">info@badebabatemple.org</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
//             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
//             <div className="relative z-10">
//               <div className="flex items-center space-x-3 mb-6">
//                 <Heart className="h-8 w-8 fill-current" />
//                 <h3 className="text-2xl font-bold">Make a Donation</h3>
//               </div>
//               <p className="text-white/90 mb-8">
//                 Your contributions help us maintain the temple, feed the needy, and continue our spiritual activities.
//               </p>
              
//               <div className="space-y-4">
//                 <button className="w-full bg-white text-red-600 font-bold py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
//                   Donate Online
//                 </button>
//                 <button className="w-full bg-transparent border-2 border-white text-white font-bold py-4 rounded-xl hover:bg-white/10 transition-colors">
//                   Bank Transfer Details
//                 </button>
//               </div>
              
//               <p className="mt-6 text-sm text-white/70 text-center">
//                 *All donations are tax-exempt under 80G.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Support;



import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Support = () => {
  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-temple-red font-semibold uppercase tracking-wider text-sm">
              संपर्क में रहो
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              समर्थन एवं संपर्क
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              हमारे साथ संपर्क करें। किसी भी प्रश्न या सेवाओं के बारे में, हमारे साथ संपर्क करें।
            </p>



            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-full text-temple-red">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">Shri Bade Baba Temple Complex,  <br/>Kundalpur, Madhya Pradesh 4707723</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-full text-temple-red">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-full text-temple-red">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@badebabatemple.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-8 w-8 fill-current" />
                <h3 className="text-2xl font-bold">दान करो</h3>
              </div>
              <p className="text-white/90 mb-8">
                आपके योगदान से हमें मंदिर के रखरखाव, जरूरतमंदों को भोजन कराने और अपनी आध्यात्मिक गतिविधियों को जारी रखने में मदद मिलती है।
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-white text-red-600 font-bold py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
                  ऑनलाइन दान करें
                </button>
                <button className="w-full bg-transparent border-2 border-white text-white font-bold py-4 rounded-xl hover:bg-white/10 transition-colors">
                  बैंक हस्तांतरण विवरण
                </button>
              </div>
              
              <p className="mt-6 text-sm text-white/70 text-center">
                * सभी दानों को 80G नियम के तहत न्यायदायक रूप से छोड़ दिया जाता है।
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Support;

