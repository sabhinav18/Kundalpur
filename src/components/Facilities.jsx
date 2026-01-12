// export default function Facilities() {
//   const features = [
//     "Accommodation",
//     "Prasad Hall",
//     "Library",
//     "Meditation Hall",
//     "Parking",
//     "Water Points",
//     "Guided Tours",
//     "First Aid",
//   ];

//   return (
//     <section id="facilities" className="section">
//       <div className="container">
//         <h2 className="heading">Facilities</h2>
//         <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((f) => (
//             <div key={f} className="card text-sm font-medium">
//               {f}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import { Home, Coffee, Car, Wifi } from 'lucide-react';
// import facilitiesImg from '../assets/K5.jpg';


// const Facilities = () => {
//   const facilities = [
//     {
//       icon: <Home className="h-6 w-6" />,
//       title: "Dharamshala",
//       description: "Clean and affordable accommodation for pilgrims."
//     },
//     {
//       icon: <Coffee className="h-6 w-6" />,
//       title: "Canteen",
//       description: "Hygienic sattvic food served daily."
//     },
//     {
//       icon: <Car className="h-6 w-6" />,
//       title: "Parking",
//       description: "Spacious parking area for vehicles."
//     },
//     {
//       icon: <Wifi className="h-6 w-6" />,
//       title: "Free Wi-Fi",
//       description: "Connectivity within the temple complex."
//     }
//   ];

//   return (
//     <section id="facilities" className="py-20 bg-orange-50/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row gap-12 items-center">
//           <div className="flex-1 space-y-8">
//             <div>
//               <span className="text-temple-red font-semibold uppercase tracking-wider text-sm">
//                 Amenities
//               </span>
//               <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
//                 Facilities for Devotees
//               </h2>
//               <p className="mt-4 text-lg text-gray-600">
//                 We ensure your visit is comfortable and spiritually fulfilling with our wide range of amenities.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {facilities.map((facility, index) => (
//                 <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
//                   <div className="flex-shrink-0 p-2 bg-temple-orange/10 rounded-lg text-temple-orange">
//                     {facility.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">{facility.title}</h3>
//                     <p className="text-sm text-gray-500 mt-1">{facility.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="flex-1 relative h-full w-full min-h-[400px]">
//              <div className="absolute inset-0 bg-gradient-to-tr from-temple-orange to-temple-red rounded-3xl transform rotate-2 opacity-10"></div>
//              <img 
//               //  src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
//                src={facilitiesImg}
//               alt="Temple Facilities" 
//                className="relative rounded-3xl shadow-2xl object-cover h-full w-full"
//              />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Facilities;


import React from 'react';
import { Home, Coffee, Car, Wifi } from 'lucide-react';
import facilitiesImg from '../assets/K5.jpg';


const Facilities = () => {
  const facilities = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "धर्मशाला",
      description: "तीर्थयात्रियों के लिए स्वच्छ और किफायती आवास।"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "कैंटीन",
      description: "प्रतिदिन स्वच्छ और सात्विक भोजन परोसा जाता है।"
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "पार्किंग",
      description: "वाहनों के लिए विशाल पार्किंग क्षेत्र।"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "नि: शुल्क वाई - फाई",
      description: "तीर्थयात्रियों के लिए नि: शुल्क वाई - फाई उपलब्ध है।"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-orange-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-temple-red font-semibold uppercase tracking-wider text-sm">
                सुविधाएं
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                श्रद्धालुओं के लिए सुविधाएं
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                हम अपनी व्यापक सुविधाओं के माध्यम से यह सुनिश्चित करते हैं कि आपकी यात्रा आरामदायक और आध्यात्मिक रूप से संतुष्टिदायक हो।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 p-2 bg-temple-orange/10 rounded-lg text-temple-orange">
                    {facility.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{facility.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative h-full w-full min-h-[400px]">
             <div className="absolute inset-0 bg-gradient-to-tr from-temple-orange to-temple-red rounded-3xl transform rotate-2 opacity-10"></div>
             <img 
              //  src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               src={facilitiesImg}
              alt="Temple Facilities" 
               className="relative rounded-3xl shadow-2xl object-cover h-full w-full"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
