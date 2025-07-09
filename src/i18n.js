import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            Hi:'Hi',
            Panharith: 'Panharith',
            I_M:"I'm",
            Service: 'Service',
            Skills: 'Skills',
            WhyMe:'Why Me',
            register: 'Register',
            user: 'User',
            services: 'Services',
            Projects: 'Projects',
            setting: 'Setting',
            files: 'Files',
            productTitle: 'Welcome to our project',
            Contact:'Contact'
        },
        khm: {
            Hi:'សួស្តី',
            Panharith: 'បញ្ញារិទ្ធិ',
            I_M:'ខ្ញុំឈ្មោះ',
            Skills: 'ជំនាញ',
            WhyMe:'ហេតុអ្វី',
            about: 'អំពីយើង',
            register: 'ចុះឈ្មោះ',
            user: 'អ្នកប្រើប្រាស់',
            Service: 'សេវាកម្ម',
            Projects: 'គម្រោង',
            setting: 'ការកំណត់',
            files: 'ឯកសារ',
            productTitle: 'សូមស្វាគមន៍មកកាន់គម្រោងរបស់យើង',
            Contact:'ទំនាក់ទំនង'
        }
    }
}
)

export default i18n;