'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'err'
  const [err, setErr] = useState('');

  async function submit(e) {
    e.preventDefault();
    setStatus('sending'); setErr('');
    try {
      const res = await fetch('https://api.kgnpos.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(f),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Hata');
      setStatus('ok');
    } catch(e) {
      setErr(e.message);
      setStatus('err');
    }
  }

  if (status === 'ok') return (
    <div className="text-center py-12">
      <div className="text-5xl mb-4">✅</div>
      <p className="text-xl font-bold text-gray-800 mb-2">Mesajınız alındı!</p>
      <p className="text-gray-500">En kısa sürede size dönüş yapacağız.</p>
    </div>
  );

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 max-w-lg mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Ad Soyad</label>
          <input
            required value={f.name}
            onChange={e => setF(p => ({...p, name: e.target.value}))}
            placeholder="Adınız Soyadınız"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">E-posta</label>
          <input
            required type="email" value={f.email}
            onChange={e => setF(p => ({...p, email: e.target.value}))}
            placeholder="ornek@email.com"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none text-sm"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Mesaj</label>
        <textarea
          required rows={5} value={f.message}
          onChange={e => setF(p => ({...p, message: e.target.value}))}
          placeholder="Nasıl yardımcı olabiliriz?"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-400 focus:outline-none text-sm resize-none"
        />
      </div>
      {err && <p className="text-red-500 text-sm text-center">{err}</p>}
      <button
        type="submit" disabled={status === 'sending'}
        className="px-8 py-3 rounded-xl font-bold text-white bg-[#E85D04] hover:bg-orange-600 transition-colors disabled:opacity-60">
        {status === 'sending' ? 'Gönderiliyor…' : 'Mesaj Gönder'}
      </button>
    </form>
  );
}
