import React, { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";

const ContactForm = () => {
  const { loading, post } = useAxios();
  const form = useRef();
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [subject, setSubject] = useState(null);
  const [massage, setMassage] = useState(null);
  const data = {
    name,
    email,
    phone,
    subject,
    massage,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form1 = e.target;

    emailjs
      .sendForm(
        "service_k2zqm4y",
        "template_oj7j287",
        form.current,
        "p9u53QcQWMYYqP-0V",
      )
      .then(
        (result) => {
          if (result.text) {
            setEmail("");
            setMassage("");
            setName("");
            setSubject("");
            setPhone("");
          }
        },
        (error) => {
          console.log(error.text);
        },
      );
    post("/emailCreate", data)
      .then((response) => {
        console.log("Response:", response);
        toast.success(" Thank You ");
        form1.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, show a toast, etc.
        toast.error("An error occurred while creating the project.");
      });
  };
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <div className='row'>
        <div className='col-lg-6 form-group'>
          <label for='name'>Name (required)</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Your name'
            onChange={(e) => setName(e.target.value)}
          />
          <span className='errors'></span>
          <br />
        </div>
        <div className='col-lg-6 form-group'>
          <label for='email'>Email (required)</label>
          <input
            type='email'
            placeholder='Email address'
            id='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className='errors'></span>
          <br />
        </div>
        <div className='col-lg-6 form-group'>
          <label for='phone'>Phone (required)</label>
          <input
            type='text'
            placeholder='Phone number'
            id='phone'
            name='phone'
            onChange={(e) => setPhone(parseInt(e.target.value))}
          />
          <span className='errors'></span>
          <br />
        </div>
        <div className='col-lg-6 form-group'>
          <label>Subject (required)</label>
          <input
            type='text'
            id='subeject'
            name='subject'
            placeholder='Subject'
            onChange={(e) => setSubject(e.target.value)}
          />
          <span className='errors'></span>
          <br />
        </div>
        <div className='col-lg-12 form-group'>
          <label for='message'>Message (required)</label>
          <textarea
            placeholder='Your message'
            name='message'
            id='message'
            onChange={(e) => setMassage(e.target.value)}></textarea>
          <span className='errors'></span>
          <br />
        </div>

        <div className='col-lg-6 form-group'>
          <input className='btn' type='submit' value='Send message' />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
