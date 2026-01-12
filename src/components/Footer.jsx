// export default function Footer() {
//   return (
//     <footer className="mt-20 border-t border-slate-200 bg-white/70">
//       <div className="container py-10">
//         <div className="grid gap-8 md:grid-cols-4">
//           <div>
//             <div className="text-lg font-semibold">Shri Bade Baba</div>
//             <div className="mt-2 text-sm text-slate-600">
//               Kundalpur Jain Tirth, Madhya Pradesh
//             </div>
//             <div className="mt-2 text-sm text-slate-600">
//               Darshan timings: 6:00 AM – 9:00 PM
//             </div>
//           </div>
//           <div>
//             <div className="text-sm font-semibold">Quick Links</div>
//             <ul className="mt-3 space-y-2 text-sm">
//               <li><a href="#about" className="hover:text-rose-700">About</a></li>
//               <li><a href="#schemes" className="hover:text-rose-700">Schemes</a></li>
//               <li><a href="#facilities" className="hover:text-rose-700">Facilities</a></li>
//               <li><a href="#gallery" className="hover:text-rose-700">Photo Gallery</a></li>
//               <li><a href="#support" className="hover:text-rose-700">Support</a></li>
//             </ul>
//           </div>
//           <div>
//             <div className="text-sm font-semibold">Contact</div>
//             <div className="mt-3 text-sm text-slate-600">
//               Phone: +91-00000 00000
//             </div>
//             <div className="text-sm text-slate-600">
//               Email: info@badebaba.org
//             </div>
//             <div className="text-sm text-slate-600">
//               Address: Kundalpur, Damoh, MP
//             </div>
//           </div>
//           <div>
//             <div className="text-sm font-semibold">Follow</div>
//             <div className="mt-3 flex gap-3">
//               <a className="text-slate-600 hover:text-rose-700" href="#" aria-label="Instagram">Instagram</a>
//               <a className="text-slate-600 hover:text-rose-700" href="#" aria-label="Facebook">Facebook</a>
//               <a className="text-slate-600 hover:text-rose-700" href="#" aria-label="YouTube">YouTube</a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 text-xs text-slate-500">
//           © {new Date().getFullYear()} Shri Bade Baba Temple. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }



// import React from 'react';
// import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">Shri Bade Baba</h3>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               A spiritual destination for peace and devotion. Join us in our daily rituals and find your inner sanctuary.
//             </p>
//             <div className="flex space-x-4 mt-6">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
//             <ul className="space-y-3 text-sm text-gray-400">
//               <li><a href="#home" className="hover:text-temple-orange transition-colors">Home</a></li>
//               <li><a href="#about" className="hover:text-temple-orange transition-colors">About Us</a></li>
//               <li><a href="#schemes" className="hover:text-temple-orange transition-colors">Sevas & Schemes</a></li>
//               <li><a href="#facilities" className="hover:text-temple-orange transition-colors">Facilities</a></li>
//               <li><a href="#gallery" className="hover:text-temple-orange transition-colors">Photo Gallery</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-6">Temple Timings</h4>
//             <ul className="space-y-3 text-sm text-gray-400">
//               <li className="flex justify-between">
//                 <span>Morning:</span>
//                 <span>5:00 AM - 1:00 PM</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>Evening:</span>
//                 <span>4:00 PM - 9:00 PM</span>
//               </li>
//               <li className="mt-4 pt-4 border-t border-gray-800">
//                 <span className="block text-temple-gold">Aarti Timings</span>
//                 <span className="block mt-1">6:00 AM & 7:30 PM</span>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
//             <p className="text-gray-400 text-sm mb-4">Subscribe to get updates on festivals and events.</p>
//             <form className="flex flex-col space-y-2">
//               <input 
//                 type="email" 
//                 placeholder="Your Email" 
//                 className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-temple-orange"
//               />
//               <button className="bg-temple-orange hover:bg-temple-red text-white py-2 rounded-lg text-sm font-semibold transition-colors">
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
//           <p>&copy; {new Date().getFullYear()} Shri Bade Baba Temple Trust. All rights reserved.</p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/logo1.png';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            {/* <h3 className="text-2xl font-bold mb-4">श्री बड़े बाबा</h3> */}
            <img src={logo} alt="Shri Bade Baba Temple Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              शांति और भक्ति का एक आध्यात्मिक स्थल। हमारे दैनिक अनुष्ठानों में शामिल हों और अपने भीतर शांति की खोज करें।
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">त्वरित लिंक्स</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-temple-orange transition-colors">घर</a></li>
              <li><a href="#about" className="hover:text-temple-orange transition-colors">आपके बारे में</a></li>
              <li><a href="#schemes" className="hover:text-temple-orange transition-colors">सेवाएँ और योजनाएँ</a></li>
              <li><a href="#facilities" className="hover:text-temple-orange transition-colors">उपकरण और सुविधाएँ</a></li>
              <li><a href="#gallery" className="hover:text-temple-orange transition-colors">फोटो गैलरी</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">मंदिर का समय</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>सुबह:</span>
                <span>5:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>शाम:</span>
                <span>4:00 PM - 9:00 PM</span>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-800">
                <span className="block text-temple-gold">आरती का समय</span>
                <span className="block mt-1">6:00 AM & 7:30 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">समाचार पत्रिका</h4>
            <p className="text-gray-400 text-sm mb-4">त्योहारों और कार्यक्रमों के बारे में अपडेट पाने के लिए सब्सक्राइब करें।</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-temple-orange"
              />
              <button className="bg-temple-orange hover:bg-temple-red text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shri Bade Baba Temple Trust. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

