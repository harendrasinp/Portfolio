import React, { useState } from 'react'
import ContactStyle from "./Contact.module.css"
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city:"",
    message: "",
  })

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleForm=async(e)=>{
    e.preventDefault();
    const response=await fetch("https://portfoliobackendemail.onrender.com/api/email/send",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if(response.ok){
      alert("Email sent Successfully to Harendrasinh@VayuSoftwares, will reach to you in next 24 hours")
      setFormData({ name: "", email: "", phone: "",city:"", message: "" });
    }else {
      alert("Failed to send message.");
    }
  }
  return (
    <div className={ContactStyle.ContactCounntainer}>
      <div className={`${ContactStyle.contactBox}`} data-aos="zoom-in">
        <div className={ContactStyle.title}>
          <h2>Contact</h2>
        </div>
        <div className={ContactStyle.form}>
          <form onSubmit={handleForm}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="first_name" className="block mb-1 text-[15px]  font-medium text-orange-400 dark:text-white">First name</label>
                <input onChange={handleChange} value={formData.name} name="name"type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vayu" required />
              </div>
              <div>
                <label for="phone" className="block mb-1 text-[15px] font-medium text-orange-400 dark:text-white">Phone number</label>
                <input onChange={handleChange} value={formData.phone}name="phone" type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9987658982" pattern="[0-9]{10}" required />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="email" className="block mb-1 text-[15px] font-medium text-orange-400 dark:text-white">Your Email</label>
                <input onChange={handleChange} value={formData.email} name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="haren128@gmail.com" required />
              </div>
              <div>
                <label for="city" className="block mb-1 text-[15px] font-medium text-orange-400 dark:text-white">City</label>
                <input onChange={handleChange} value={formData.city} name="city" type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your City" required />
              </div>
            </div>

            <label for="message" className="block mb-1 text-[15px] font-medium text-orange-400 dark:text-white">Your message</label>
            <textarea onChange={handleChange} value={formData.message} name="message" id="message" rows="4" className="block p-2.5 w-full text-sm mb-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
