         tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#fcf4fd',
                            100: '#f8e6fa',
                            200: '#f0cbf5',
                            300: '#e5a1ed',
                            400: '#d56de0',
                            500: '#bf3ecd',
                            600: '#a129ac',
                            700: '#84208d',
                            800: '#6f1d75',
                            900: '#5c1d60',
                            primary: '#7C1C80', // Logo Purple Color
                            dark: '#521255',
                            light: '#FAF5fb'
                        }
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                    }
                }
            }
        }
                // Mobile Menu Navigation Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            } else {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            }
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            });
        });

        // Interactive Impact Calculator Logic
        const donationSlider = document.getElementById('donation-slider');
        const donationAmount = document.getElementById('donation-amount');
        const impactWorkshops = document.getElementById('impact-workshops');
        const impactPeople = document.getElementById('impact-people');

        if(donationSlider) {
            donationSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value);
                donationAmount.innerText = `$${val.toLocaleString('es-AR')} ARS`;

                // Calculate rough metrics for visual engagement
                const people = Math.max(1, Math.floor(val / 8000));
                const workshops = Math.max(1, Math.floor(val / 5000));

                impactPeople.innerText = people;
                impactWorkshops.innerText = workshops;
            });
        }

        // Switch between Donor / Volunteer view in Impact Section
        function setMode(mode) {
            const donorTab = document.getElementById('tab-donor');
            const volunteerTab = document.getElementById('tab-volunteer');
            const donorContent = document.getElementById('donor-content');
            const volunteerContent = document.getElementById('volunteer-content');

            if(mode === 'donor') {
                donorTab.className = "px-6 py-2.5 rounded-xl font-bold text-sm transition-all bg-white text-brand-primary shadow";
                volunteerTab.className = "px-6 py-2.5 rounded-xl font-bold text-sm transition-all text-white hover:text-purple-200";
                donorContent.classList.remove('hidden');
                volunteerContent.classList.add('hidden');
            } else {
                volunteerTab.className = "px-6 py-2.5 rounded-xl font-bold text-sm transition-all bg-white text-brand-primary shadow";
                donorTab.className = "px-6 py-2.5 rounded-xl font-bold text-sm transition-all text-white hover:text-purple-200";
                volunteerContent.classList.remove('hidden');
                donorContent.classList.add('hidden');
            }
        }

        // Modal Functionality
        function openCourseModal(courseTitle) {
            document.getElementById('modal-title').innerText = `Inscripción: ${courseTitle}`;
            document.getElementById('course-modal').classList.remove('hidden');
        }

        function closeCourseModal() {
            document.getElementById('course-modal').classList.add('hidden');
        }

        function scrollToContact() {
            document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
        }

        // Forms and Notifications Handling
        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = msg;
            toast.classList.remove('translate-y-24', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 4000);
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            showToast('¡Gracias por tu mensaje! Nos pondremos en contacto a la brevedad.');
            e.target.reset();
        }

        function handleModalSubmit(e) {
            e.preventDefault();
            closeCourseModal();
            showToast('Pre-inscripción recibida con éxito.');
            e.target.reset();
        }