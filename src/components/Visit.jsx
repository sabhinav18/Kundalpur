export default function Visit() {
  return (
    <section id="visit" className="section">
      <div className="container">
        <div className="card">
        <h2 className="heading">Plan Your Visit</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm font-semibold text-slate-700">Timings</div>
            <div className="mt-1 text-sm text-slate-600">
              Darshan: 6:00 AM – 9:00 PM
            </div>
            <div className="text-sm text-slate-600">Aarti: 7:00 AM, 7:00 PM</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-700">Dress Code</div>
            <div className="mt-1 text-sm text-slate-600">
              Modest attire recommended. Maintain decorum inside the temple.
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-700">How to Reach</div>
            <div className="mt-1 text-sm text-slate-600">
              Nearest city: Damoh, MP. Well-connected by road and rail.
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
