"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("kgn_cookie_consent")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("kgn_cookie_consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("kgn_cookie_consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-0">
      <div className="md:max-w-2xl md:mx-auto md:mb-6 bg-gray-950 border border-white/10 rounded-2xl px-5 py-4 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-xs text-gray-500 leading-relaxed flex-1">
          Sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.{" "}
          <Link href="/gizlilik" className="text-[#E85D04] underline underline-offset-2 hover:text-orange-400">
            Gizlilik Politikası
          </Link>
          &apos;nı inceleyebilirsiniz. KVKK kapsamında verileriniz korunmaktadır.
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={reject}
            className="text-xs font-medium text-gray-500 hover:text-white px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
          >
            Reddet
          </button>
          <button
            onClick={accept}
            className="text-xs font-semibold text-white px-4 py-2 rounded-lg bg-[#E85D04] hover:bg-[#C44D00] transition-colors"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
