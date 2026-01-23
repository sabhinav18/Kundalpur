import React from 'react';
import { Heart, Copy, CheckCircle } from 'lucide-react';

const Donation = () => {
  const [copied, setCopied] = React.useState(false);

  const bankDetails = {
    accountName: "Shri Digambar Jain Siddha Kshetra Kundalpur",
    bankName: "State Bank of India",
    accountNumber: "12345678901",
    ifscCode: "SBIN0001234",
    branch: "Damoh Main Branch"
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `Account: ${bankDetails.accountName}\nNumber: ${bankDetails.accountNumber}\nIFSC: ${bankDetails.ifscCode}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donation" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-temple-red font-semibold uppercase tracking-wider text-sm">
            सहयोग
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            दान करें (Donation)
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            क्षेत्र के विकास और समाज कल्याण कार्यों में अपना सहयोग दें। आपकी छोटी सी मदद बड़ा बदलाव ला सकती है।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">बैंक विवरण</h3>
              <button 
                onClick={copyToClipboard}
                className="flex items-center text-sm text-temple-orange hover:text-temple-red transition-colors"
              >
                {copied ? <CheckCircle className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                {copied ? "कॉपीड!" : "कॉपी करें"}
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">खाता धारक का नाम</p>
                <p className="font-semibold text-gray-900">{bankDetails.accountName}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">बैंक का नाम</p>
                <p className="font-semibold text-gray-900">{bankDetails.bankName}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">खाता संख्या</p>
                  <p className="font-mono font-semibold text-gray-900">{bankDetails.accountNumber}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">IFSC कोड</p>
                  <p className="font-mono font-semibold text-gray-900">{bankDetails.ifscCode}</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">शाखा</p>
                <p className="font-semibold text-gray-900">{bankDetails.branch}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-temple-orange/10 p-8 rounded-2xl border border-temple-orange/20">
              <Heart className="h-12 w-12 text-temple-orange mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">आपका योगदान महत्वपूर्ण है</h3>
              <p className="text-gray-600">
                दान के माध्यम से आप मंदिर निर्माण, अन्नदान, गौशाला और शिक्षा जैसे पुण्य कार्यों में भागीदार बनते हैं।
                दान धारा 80G के तहत कर मुक्त है।
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-48 h-48 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">QR Code Placeholder</span>
              </div>
              <p className="font-semibold text-gray-900">UPI द्वारा दान करें</p>
              <p className="text-sm text-gray-500">Google Pay / PhonePe / Paytm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
