"use client";

import { useState } from "react";

function PaymentModal({ plan, onClose }) {
  const [iban, setIban] = useState({ iban: "", accountName: "" });
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useState(() => {
    fetch("https://api.kgnpos.com/api/subscription/payment-info")
      .then((r) => r.json())
      .then(setIban)
      .catch(() => {});
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) { setError("E-posta adresi zorunludur."); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError("Geçerli bir e-posta girin."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.kgnpos.com/api/subscription/payment-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: plan.name, email, amount: plan.rawPrice }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Bir hata oluştu."); return; }
      setDone(true);
    } catch {
      setError("Sunucuya bağlanılamadı.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#E85D04]">Ödeme Bilgileri</p>
            <h3 className="font-extrabold text-gray-900 text-lg">{plan.name} Planı</h3>
          </div>
          <button onClick={onClose} className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-5">
          {done ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FFF0E6]">
                <svg className="w-7 h-7 text-[#E85D04]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-extrabold text-gray-900 text-lg mb-2">Bildiriminiz Alındı!</h4>
              <p className="text-sm text-gray-500 mb-6">Ödemeniz doğrulandıktan sonra hesabınız aktif edilecektir.</p>
              <button onClick={onClose} className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#E85D04] hover:bg-[#C44D00] transition-colors">
                Tamam
              </button>
            </div>
          ) : (
            <>
              <div className="bg-[#FFF6EE] rounded-xl p-4 mb-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#E85D04] mb-2">Havale / EFT Bilgileri</p>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Alıcı Ad Soyad</p>
                  <p className="font-semibold text-gray-900 text-sm">{iban.accountName || "—"}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">IBAN</p>
                  <p className="font-mono font-bold text-gray-900 text-sm tracking-wide">{iban.iban || "—"}</p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-orange-100">
                  <p className="text-xs text-gray-500">Tutar</p>
                  <p className="font-extrabold text-[#E85D04] text-base">{plan.price}<span className="text-xs font-medium text-gray-500">{plan.period}</span></p>
                </div>
                <p className="text-xs text-gray-500">Açıklama olarak e-posta adresinizi yazmayı unutmayın.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">E-posta Adresiniz</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="ornek@sirket.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/20 transition"
                  />
                </div>
                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-colors disabled:opacity-60 bg-[#E85D04] hover:bg-[#C44D00]"
                >
                  {loading ? "Gönderiliyor…" : "✓ Ödeme Yaptım, Aktivasyonumu Bekleyeceğim"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PricingSection({ plans }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <>
      {selectedPlan && <PaymentModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-7 transition-all ${
              plan.highlight
                ? "bg-[#E85D04] text-white shadow-2xl shadow-orange-200"
                : "bg-white border border-orange-100 hover:shadow-lg"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                En Popüler
              </span>
            )}

            <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? "text-orange-200" : "text-[#E85D04]"}`}>
              {plan.name}
            </p>
            <div className="flex items-end gap-1 mb-2">
              <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                {plan.price}
              </span>
              {plan.period && (
                <span className={`text-sm mb-1 ${plan.highlight ? "text-orange-200" : "text-gray-500"}`}>
                  {plan.period}
                </span>
              )}
            </div>
            <p className={`text-sm mb-6 ${plan.highlight ? "text-orange-100" : "text-gray-500"}`}>
              {plan.desc}
            </p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-orange-200" : "text-[#E85D04]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={plan.highlight ? "text-orange-50" : "text-gray-600"}>{f}</span>
                </li>
              ))}
            </ul>

            {plan.rawPrice === 0 ? (
              <a
                href="/register"
                className="block w-full py-3 rounded-xl font-semibold text-sm transition-colors text-center bg-[#E85D04] text-white hover:bg-[#C44D00]"
              >
                {plan.cta}
              </a>
            ) : (
              <button
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-white text-[#E85D04] hover:bg-orange-50"
                    : "bg-[#E85D04] text-white hover:bg-[#C44D00]"
                }`}
              >
                {plan.cta}
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
