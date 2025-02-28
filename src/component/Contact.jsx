import React from 'react'
import ContactStyle from "./Contact.module.css"
export const Contact = () => {
  return (
    <div className={ContactStyle.ContactCounntainer}>
      <div className={`${ContactStyle.contactBox}`} data-aos="zoom-in">
        <div className={ContactStyle.title}>
          <h2>Contact</h2>
        </div>
        <div className={ContactStyle.form}>
          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="first_name" class="block mb-1 text-sm font-medium text-yellow-500 dark:text-white">First name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vayu" required />
              </div>
              <div>
                <label for="phone" class="block mb-1 text-sm font-medium text-yellow-500 dark:text-white">Phone number</label>
                <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9987658982" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="email" class="block mb-1 text-sm font-medium text-yellow-500 dark:text-white">Your Email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="haren128@gmail.com" required />
              </div>
              <div>
                <label for="city" class="block mb-1 text-sm font-medium text-yellow-500 dark:text-white">City</label>
                <input type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your City" required />
              </div>
            </div>

            <label for="message" class="block mb-1 text-sm font-medium text-yellow-500 dark:text-white">Your message</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm mb-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>

            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
