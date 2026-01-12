export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <h2 className="heading text-orange-500">श्री दिगम्बर जैन सिद्धक्षेत्र (कुण्डलपुर) कुण्डलगिरि</h2>
          <p className="mt-3 text-slate-700">
            {/* Shri Bade Baba at Kundalpur is a revered Jain Tirth known for
            its spiritual ambiance and magnificent architecture. The temple
            complex offers devotees a tranquil space for prayer, study, and
            community service. */}
            भारतवर्ष का ह्रदय स्थल मध्य प्रदेश का एक जिला है “दमोह”
            I दमोह (जिला मुख्यालय) से लगभग ३५ किलोमीटर दूर पटेरा तहसील में
            बुन्देखण्ड का शिरर्मोर्य तीर्थ है I “कुंडलपुर” जो की
            “कुण्डलगिरी” नामक अर्द्धचन्द्राकार पहाड़ियों पर स्थित है
          </p>
        </div>
        {/* <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          <div className="card">
            <div className="text-sm font-semibold text-rose-700">Heritage</div>
            <div className="mt-2 text-sm text-slate-700">
              Rooted in centuries-old Jain traditions honoring Lord Adinath
              and the lineage of Tirthankaras.
            </div>
          </div>
          <div className="card">
            <div className="text-sm font-semibold text-rose-700">Community</div>
            <div className="mt-2 text-sm text-slate-700">
              Supports education, healthcare, food seva, and cultural
              preservation through seva-driven initiatives.
            </div>
          </div>
          <div className="card">
            <div className="text-sm font-semibold text-rose-700">Spirituality</div>
            <div className="mt-2 text-sm text-slate-700">
              Daily aarti, pravachans, and meditation sessions led by
              respected monks and volunteers.
            </div>
          </div>
          <div className="card">
            <div className="text-sm font-semibold text-rose-700">Environment</div>
            <div className="mt-2 text-sm text-slate-700">
              Clean, eco-conscious campus focusing on water conservation and
              greenery.
            </div>
          </div>
        </div> */}

        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          <div className="card">
            <div className="text-sm font-semibold text-rose-700">विरासत</div>
            <div className="mt-2 text-sm text-slate-700">
              सदियों पुरानी जैन परंपराओं में निहित, जो भगवान आदिनाथ और तीर्थंकरों की वंशावली का सम्मान करती हैं।
            </div>
          </div>
          <div className="card">
            <div className="text-sm font-semibold text-rose-700">समुदाय</div>
            <div className="mt-2 text-sm text-slate-700">
              सेवा-आधारित पहलों के माध्यम से शिक्षा, स्वास्थ्य सेवा, खाद्य सेवा और सांस्कृतिक संरक्षण का समर्थन करता है।
            </div>
          </div>
          <div className="card">
            <div className="text-sm font-semibold text-rose-700">आध्यात्मिकता</div>
            <div className="mt-2 text-sm text-slate-700">
              दैनिक आर्टी, प्रवाचन और ध्यान कार्यक्रम जो प्रतिबद्ध शिक्षक और नर्माणकर्ताओं पर आधारित है।
            </div>
          </div>
          <div className="card">
            <div className="text-sm font-semibold text-rose-700">पर्यावरण</div>
            <div className="mt-2 text-sm text-slate-700">
              स्वच्छ, पर्यावरण के प्रति जागरूक परिसर जो जल संरक्षण और हरियाली पर केंद्रित है।
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
