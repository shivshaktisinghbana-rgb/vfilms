import React, {useState, useEffect} from 'react';

const API_URL = 'https://vernanbackend.ezlab.in/api/contact-us/';

export default function Contact() {
  const [form, setForm] = useState({name:'', email:'', phone:'', message:''});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({show:false, text:'', entering:true});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!re.test(form.email)) e.email = 'Enter a valid email';
    }
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setToast({show:false, text:'', entering:true});
    if (!validate()) return;
    setLoading(true);
    try {
      const payload = {...form};
      const resp = await fetch(API_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload)
      });
      if (resp.ok) {
        setToast({show:true, text:'Form Submitted', entering:true});
        setForm({name:'',email:'',phone:'',message:''});
        setErrors({});
        setTimeout(()=>setToast(prev=>({...prev, entering:false})),2200);
        setTimeout(()=>setToast({show:false,text:'',entering:true}),2600);
      } else {
        const txt = await resp.text().catch(()=>'');
        setToast({show:true, text:`Submission failed: ${resp.status} ${txt}`, entering:true});
        setTimeout(()=>setToast(prev=>({...prev, entering:false})),3000);
        setTimeout(()=>setToast({show:false,text:'',entering:true}),3400);
      }
    } catch(err) {
      setToast({show:true, text:`Network error: ${err.message}`, entering:true});
      setTimeout(()=>setToast(prev=>({...prev, entering:false})),3000);
      setTimeout(()=>setToast({show:false,text:'',entering:true}),3400);
    } finally {
      setLoading(false);
    }
  }

  function onChange(e) {
    const {name, value} = e.target;
    setForm(prev=>({...prev, [name]:value}));
    setErrors(prev=>({...prev, [name]:undefined}));
  }

  useEffect(()=>{
    function onKey(e){ if (e.key==='Escape') setToast({show:false,text:'',entering:true}); }
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[]);

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div className="space-y-4">
        <h3 className="text-3xl font-serif">Join the Story</h3>
        <p className="text-gray-700">Ready to bring your vision to life? Let's talk. Whether you have an idea, question, or want to collaborate — we're one message away.</p>
        <div className="mt-6 text-sm text-gray-600">vernita@varnanfilms.co.jp &nbsp; | &nbsp; +91 98736 84567</div>
      </div>

      <div>
        <form className="space-y-3 bg-white/80 p-6 rounded shadow" onSubmit={handleSubmit} noValidate>
          <div>
            <input name="name" value={form.name} onChange={onChange} placeholder="Your name*" className="w-full p-3 rounded border focus:ring-2 focus:ring-accent input-focus" />
            {errors.name && <div className="text-red-600 mt-1 text-sm">{errors.name}</div>}
          </div>

          <div>
            <input name="email" value={form.email} onChange={onChange} placeholder="Your email*" className="w-full p-3 rounded border focus:ring-2 focus:ring-accent input-focus" />
            {errors.email && <div className="text-red-600 mt-1 text-sm">{errors.email}</div>}
          </div>

          <div>
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone*" className="w-full p-3 rounded border focus:ring-2 focus:ring-accent input-focus" />
            {errors.phone && <div className="text-red-600 mt-1 text-sm">{errors.phone}</div>}
          </div>

          <div>
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Your message*" className="w-full p-3 rounded border min-h-[120px] focus:ring-2 focus:ring-accent input-focus" />
            {errors.message && <div className="text-red-600 mt-1 text-sm">{errors.message}</div>}
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" disabled={loading} className="bg-accent text-white px-5 py-2 rounded-full shadow disabled:opacity-60">{loading ? 'Submitting...' : 'Submit'}</button>
            <div className="w-48">
              <input readOnly value={toast.show && toast.text ? toast.text : ''} className="w-full p-2 border rounded bg-white text-sm" placeholder="Result" />
            </div>
          </div>
        </form>
      </div>

      {toast.show && (
        <div aria-live="polite" className={`fixed right-6 bottom-6 z-50 max-w-xs px-4 py-3 rounded shadow-lg text-white ${toast.text === 'Form Submitted' ? 'bg-emerald-600' : 'bg-red-600'} ${toast.entering ? 'animate-toastIn' : 'animate-toastOut'}`}>
          {toast.text}
        </div>
      )}
    </section>
  );
}
