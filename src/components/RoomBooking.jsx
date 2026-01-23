import React from 'react';
import { Calendar, User, Phone, Users } from 'lucide-react';

const RoomBooking = () => {
  return (
    <section id="room-booking" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-temple-red font-semibold uppercase tracking-wider text-sm">
            आवास
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            कमरा बुकिंग (Room Booking)
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            कुंडलपुर में अपने प्रवास के लिए आरामदायक कमरे बुक करें। कृपया अपनी जानकारी भरें।
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-temple-orange p-6 text-center">
            <h3 className="text-2xl font-bold text-white">बुकिंग पूछताछ फॉर्म</h3>
          </div>
          
          <form className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">पूरा नाम</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-temple-orange focus:border-temple-orange p-3 border"
                    placeholder="आपका नाम"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">मोबाइल नंबर</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-temple-orange focus:border-temple-orange p-3 border"
                    placeholder="आपका मोबाइल नंबर"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">आगमन तिथि (Check-in)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-temple-orange focus:border-temple-orange p-3 border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">प्रस्थान तिथि (Check-out)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-temple-orange focus:border-temple-orange p-3 border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">कमरों की संख्या</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HomeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <select className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-temple-orange focus:border-temple-orange p-3 border">
                    <option>1 कमरा</option>
                    <option>2 कमरे</option>
                    <option>3+ कमरे</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">व्यक्तियों की संख्या</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    min="1"
                    className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-temple-orange focus:border-temple-orange p-3 border"
                    placeholder="कुल व्यक्ति"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-temple-orange hover:bg-temple-red text-white font-bold py-4 rounded-lg transition duration-300 shadow-lg mt-6"
            >
              बुकिंग अनुरोध भेजें
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Helper icon component since 'Home' is already used in lucide-react but I want to be specific
const HomeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export default RoomBooking;
