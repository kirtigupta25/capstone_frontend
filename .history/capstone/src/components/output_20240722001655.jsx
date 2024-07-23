import React from 'react'

export default function Output() {
  return (
    <div>
        <form class="p-4 max-w-sm mx-auto border-4 border-gray-300 shadow-lg rounded-lg bg-white">
  <div class="mb-5">
      <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Output</label>
      <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Output will be binary deciding wether to switch ON or OFF the pump'/>
  </div>
  
</form>
    </div>
  )
}
