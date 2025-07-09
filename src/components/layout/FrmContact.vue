<template>
  <section class="mt-32" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <Form :validation-schema="validationSchema" @submit="handleSubmit" class="space-y-4">
        <!-- Name Field -->
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <Field
            type="text"
            name="name"
            v-model="form.name"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" class="text-red-600 text-sm mt-1" />
        </div>

        <!-- Email Field -->
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <Field
            type="email"
            name="email"
            v-model="form.email"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" class="text-red-600 text-sm mt-1" />
        </div>

        <!-- Age Field -->
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Age</label>
          <Field
            type="number"
            name="age"
            v-model="form.age"
            min="0"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your age"
          />
          <ErrorMessage name="age" class="text-red-600 text-sm mt-1" />
        </div>

        <!-- Major Field -->
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Major</label>
          <Field
            type="text"
            name="major"
            v-model="form.major"
            min="0"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Major"
          />
          <ErrorMessage name="major" class="text-red-600 text-sm mt-1" />
        </div>

        <!-- Age Field -->
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Salary</label>
          <Field
            type="number"
            name="salary"
            v-model="form.salary"
            min="0"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Salary"
          />
          <ErrorMessage name="salary" class="text-red-600 text-sm mt-1" />
        </div>

        <!-- Submit Button -->
        <button
          :disabled="isButtonSubmitDisabled"
          type="submit"
          class="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200"
        >
          <span v-if="isButtonSubmitDisabled">
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </span>
          <span v-else>Submit</span>
        </button>
      </Form>
    </div>
  </section>
</template>
<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue'
</script>
<script>
import axios from 'axios'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
export default {
  name: 'UserForm',
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        age: '',
        major: '',
        salary: '',
      },
      isButtonSubmitDisabled: false,
      validationSchema: yup.object({
        name: yup
          .string()
          .matches(/^[A-Za-z\s]+$/, 'Only alphabet and space is accepted')
          .min(3, 'Name must be at least 3 characters')
          .required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        age: yup
          .number()
          .min(10, 'Minimum age of 10')
          .max(120, 'Maximum age of 120')
          .required('Age is required'),
        major: yup
          .string()
          .matches(/^[a-z\s]+$/, 'Only small alphabet and space is accepted')
          .min(2, 'Major must be at least 3 characters')
          .required('Major is required'),
        salary: yup
          .number()
          .min(60, 'Minimum salary of 60')
          .max(5000, 'Maximum salary of 5000')
          .required('Salary is required'),
      }),
    }
  },
  methods: {
    async handleSubmit() {
      this.isButtonSubmitDisabled = true
      console.log('Form submitted:', this.form)
      // You can add validation or API calls here
      try {
        const response = await axios.post(
          'https://68648e915b5d8d03397d8138.mockapi.io/api/v1/users',
          {
            name: this.form.name,
            email: this.form.email,
            age: this.form.age,
            major: this.form.major,
            salary: this.form.salary,
          }
        )
        console.log('Form submitted successfully:', response.data)
        this.form = {
          name: '',
          email: '',
          age: '',
          major: '',
          salary: '',
        }
        alert('User information submitted successfully!')
        this.$router.push('/users')
        this.isButtonSubmitDisabled = false
      } catch (error) {
        console.error('Error submitting form:', error)
        this.isButtonSubmitDisabled = false
      }
    },
  },
}
</script>