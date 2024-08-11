// src/hooks/useSendEmail.js
import { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_h9z5vb4';
const TEMPLATE_ID = 'template_o0m8edv';
const PUBLIC_KEY = 'ZFnUDpaId4Y3BEMnX';

// Configuración global
emailjs.init(PUBLIC_KEY);

export const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (emailProps) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Usa `emailjs.send` para enviar datos directamente

      toast.promise(
        emailjs.send(SERVICE_ID, TEMPLATE_ID, emailProps),
         {
           loading: 'Enviando...',
           success: '¡Correo enviado exitosamente!',
           error: 'Ha ocurrido un error.',
         }
       );

      
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send email');
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, error, success };
};



// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//         publicKey: 'YOUR_PUBLIC_KEY',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
