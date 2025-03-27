const serviceCategories = {
  'BeautyAndWellness': [
    { 
      name: 'Beautician',
      description: 'Expert in skincare, makeup, and beauty treatments',
      about:'Enhance your natural beauty with our expert beautician services, designed to make you look and feel your best. Our skilled beauticians offer a range of treatments tailored to your needs, including facials, waxing, eyebrow shaping, eyelash extensions, and professional makeup application. Whether you are preparing for a special occasion or simply indulging in some self-care, our team uses high-quality products and techniques to deliver exceptional results. Book your appointment today and experience personalized beauty treatments in a relaxing environment. Let us help you glow inside and out!',
      image:'/beutician.jpeg',
      icon :'/beautician.png'
      
    },
    { 
      name: 'Barber',
      description: 'Professional haircuts, shaves, and grooming services',
      about:'Experience top-notch grooming with our expert barbers. We offer stylish haircuts, beard shaping, straight razor shaves, and scalp massages tailored to your needs. Whether you’re looking for a quick trim or a complete makeover, our skilled barbers ensure you leave looking sharp and feeling refreshed. Book your appointment today and enjoy a personalized grooming experience!',
      image:'/barber.jpeg',
      icon:'/barber.png'
    },
    { 
      name: 'MassageTherapist',
      description: 'Relieves stress and pain through therapeutic massages',
      about:'Relax and unwind with our professional massage therapy services. Whether you need to relieve stress, ease muscle tension, or improve circulation, our experienced massage therapists offer a range of treatments, including deep tissue, Swedish, aromatherapy, and hot stone massages. Each session is designed to rejuvenate your body and mind, providing a soothing and restorative experience. Book your appointment today for a relaxing escape!',
      image:'/massagetherapist.jpeg',
      icon:'/massagetherapist.png'
    },
    { 
      name: 'FitnessTrainer',
      description: 'Guides clients in workouts and healthy living',
      about:'Achieve your fitness goals with the guidance of our expert trainers. Whether you are looking to lose weight, build muscle, or improve overall strength and endurance, our personalized fitness plans are designed to suit your needs. From one-on-one sessions to group classes, we provide a supportive and motivating environment to help you reach your full potential. Book your session today and take the first step towards a healthier, stronger you!',
      image:'/fitnesstrainer.jpeg',
      icon:'/fitnesstrainer.png'
      },
    { 
      name: 'YogaTrainer',
      description: 'Teaches yoga for flexibility, strength, and mindfulness',
      about:'Find balance and inner peace with our expert yoga trainers. Whether you are a beginner or an experienced practitioner, our personalized sessions cater to your specific needs, helping you improve flexibility, strength, and mindfulness. From calming restorative yoga to energizing flow classes, we offer a variety of styles to suit your goals. Book your session today and experience the transformative benefits of yoga for both body and mind.',
      image:'/yogatrainer.jpeg',
      icon:'/yogatrainer.png'
    },
    { 
      name: 'SpaTherapist',
      description: 'Provides relaxing spa treatments and therapies',
      about:'Indulge in ultimate relaxation with our professional spa therapy services. Our skilled spa therapists offer a range of treatments including facials, body wraps, exfoliating scrubs, and aromatherapy massages, all designed to rejuvenate your skin and soothe your senses. Whether you are looking for a relaxing escape or a skin refresh, our treatments are tailored to leave you feeling revitalized. Book your appointment today and treat yourself to a luxurious spa experience.',
      image:'/spatherapist.jpeg',
      icon:'/spatherapist.png'
    }
],
'HomeServices': [
    { 
      name: 'Carpenter',
      description: 'Skilled in woodworking, furniture making, and repairs',
      about:'Transform your space with the help of our skilled carpenters. From custom furniture and cabinetry to repairs and home improvements, our expert craftsmen provide high-quality woodworking solutions tailored to your needs. Whether you need a new bookshelf, a kitchen makeover, or repairs around the house, we deliver precise, durable results. Book your appointment today and let us bring your woodworking projects to life!',
      image:'/carpenter.jpeg',
      icon:'/carpenter.png'
    },
    { 
      name: 'Electrician',
      description: 'Handles electrical installations, repairs, and maintenance',
      about:'Ensure your home or office is safe and powered with our expert electrician services. Whether you need electrical repairs, installations, or upgrades, our licensed electricians provide reliable and efficient solutions. From wiring and lighting to circuit repairs and safety inspections, we handle all your electrical needs with precision. Book your appointment today and experience top-quality electrical service with a focus on safety and reliability.',
      image:'/electrician.jpeg',
      icon:'/electrician.png'
    },
    { 
      name: 'Plumber',
      description: 'Fixes and installs pipes, faucets, and drainage systems',
      about:'Fix leaks, clogs, and more with our professional plumbing services. Whether you need repairs, installations, or maintenance, our experienced plumbers provide efficient and reliable solutions for your home or business. From pipe repairs to water heater installations, we ensure everything flows smoothly. Book your appointment today and trust us to handle all your plumbing needs with expertise and care.',
      image:'/plumber.jpeg',
      icon:'/plumber.png'
    },
    { 
      name: 'ACTechnician',
      description: 'Repairs and maintains air conditioning systems',
      about:'Keep your space cool and comfortable with our professional AC technician services. Whether you need installation, repairs, or maintenance, our skilled technicians provide reliable solutions for all types of air conditioning systems. From routine checks to emergency repairs, we ensure your AC runs efficiently all year round. Book your appointment today and stay cool with expert service at your doorstep.',
      image:'/actechnician.jpeg',
      icon:'/actechnician.png'
    },
    { 
      name: 'HomeCleaner',
      description: 'Provides deep cleaning and sanitation services',
      about:'Keep your home spotless with our professional cleaning services. Whether you need a one-time deep clean, regular maintenance, or move-in/move-out cleaning, our experienced cleaners provide thorough and reliable solutions. We use eco-friendly products to ensure a safe and clean environment for you and your family. Book your appointment today and enjoy a sparkling home without the hassle!',
      image:'/homecleaner.jpeg', 
      icon:'/homecleaner.png'
    },
    { 
      name: 'PestControlExpert',
      description: 'Eliminates pests and ensures a pest-free environment',
      about:'Protect your home or business from unwanted pests with our expert pest control services. Whether you are dealing with rodents, insects, or other pests, our trained professionals provide safe and effective solutions to eliminate and prevent infestations. We use eco-friendly treatments to ensure the safety of your environment. Book your appointment today and enjoy a pest-free space with our reliable and thorough pest control services.',
      image:'/pestcontrolexpert.jpeg',
      icon:'/pestcontrolexpert.png'
    },
    { 
      name: 'ApplianceRepairTechnician',
      description: 'Repairs and services home appliances efficiently',
      about:'Get your household appliances running smoothly again with our expert appliance repair services. From refrigerators and washing machines to ovens and dishwashers, our skilled technicians provide fast, reliable repairs to extend the life of your appliances. We diagnose and fix issues efficiently, ensuring your appliances work like new. Book your appointment today for hassle-free repairs and peace of mind.',
      image:'/actechnician.jpeg',
      icon:'/technician.png'
    },
    { 
      name: 'Painter',
      description: 'Provides painting services for homes and offices',
      about:'Refresh your space with our professional painting services. Whether you are looking to repaint a room, update your exterior, or add custom designs, our skilled painters deliver flawless results. We use high-quality paints and materials to ensure a durable, vibrant finish. Book your appointment today and transform your home or office with a fresh coat of paint!',
      image:'/painter.jpeg',
      icon:'/painter.png'
    },
    { 
      name: 'PlumbingExpert',
      description: 'Expert in resolving plumbing issues and installations',
      about:'Ensure your plumbing system runs smoothly with our expert plumbing services. From leak repairs and drain cleaning to pipe installations and water heater maintenance, our skilled plumbers provide efficient and reliable solutions. Whether it is a quick fix or a major project, we handle it all with precision and care. Book your appointment today and keep your plumbing in top shape!',
      image:'/plumber.jpeg',
      icon:'/plumber.png'
    },
],
'DomesticHelp': [
    { 
      name: 'HousekeepingStaff',
      description: 'Ensures cleanliness and organization in homes',
      about:'Keep your home clean and organized with our professional housekeeping services. Our trained staff provide thorough cleaning, dusting, vacuuming, and organizing to maintain a tidy and comfortable living space. Whether you need regular upkeep or a one-time deep clean, we tailor our services to fit your needs. Book your appointment today and enjoy a spotless, well-kept home!',
      image:'/housekeepingstaff.jpeg',
      icon:'/housekeeping.png'
    },
    { 
      name: 'MaidService',
      description: 'Offers daily cleaning, laundry, and home chores',
      about:'Make your life easier with our professional maid services. Whether you need regular cleaning, laundry assistance, or help with light housekeeping, our reliable maids provide quality service to keep your home neat and organized. We offer flexible scheduling to fit your needs and ensure your home stays clean and comfortable. Book your appointment today and enjoy a stress-free, tidy home!',
      image:'/maidservice.jpeg',
      icon:'/maid.png'
    },
    { 
      name: 'Babysitter',
      description: 'Provides childcare and ensures kids’ safety',
      about:'Ensure your children are in caring and capable hands with our professional nanny and babysitting services. Whether you need part-time, full-time, or occasional care, our experienced caregivers provide a safe, nurturing environment for your little ones. We offer flexible hours to fit your schedule, ensuring peace of mind while you’re away. Book your appointment today and let us help with your childcare needs!',
      image:'/nanniesbabysitter.jpeg',
      icon:'/nanny.png'
    },
    { 
      name: 'GardeningService',
      description: 'Maintains gardens, plants, and outdoor spaces',
      about:'Is your garden in need of some TLC? Our expert gardeners are here to help you transform your outdoor space into a lush, vibrant paradise! Whether you need lawn care, plant maintenance, garden design, or seasonal clean-ups, we’ve got you covered. Imagine stepping into your own backyard oasis—just let us know your vision, and we’ll bring it to life! Ready to get started? Book your appointment today and watch your garden bloom!',
      image:'/gardeningservice.jpeg',
      icon:'/gardener.png'
    },
    { 
      name: 'LaundryService',
      description: 'Washes, dries, and irons clothes professionally',
      about:'Drowning in laundry? Let us take care of it! Our professional laundry service is designed to make your life easier. From washing and drying to folding and ironing, we handle it all with care. Whether it’s everyday laundry or special items like delicate fabrics, we ensure your clothes come back fresh and spotless. Ready for a hassle-free laundry day? Book your appointment today and enjoy clean clothes without lifting a finger!',
      image:'/laundryservice.jpeg',
      icon:'/laundry.png'
    }
],
'ProfessionalServices': [
    { 
      name: 'InteriorDesigner',
      description: 'Creates stylish and functional interior spaces',
      about:'Transform your space into a masterpiece with our expert interior design services. Whether you are renovating your home or designing from scratch, our skilled designers work with you to create stylish, functional, and personalized interiors. From layout planning to furniture selection and color schemes, we ensure every detail enhances your space. Book your appointment today and start turning your vision into reality!',
      image:'/interiordesigner.jpeg',
      icon:'/interiordesign.png'
    },
    { 
      name: 'EventPlanner',
      description: 'Plans and organizes events like weddings, parties, and conferences.',
      about:'Make your event unforgettable with the help of our expert event planners. Whether you are hosting a wedding, birthday, corporate event, or any special occasion, we handle every detail, from venue selection and catering to decorations and entertainment. We work with you to create an event that reflects your style and exceeds your expectations. Book your appointment today and let us bring your event vision to life!',
      image:'/eventplanner.jpeg',
      icon:'/eventplanner.png'
    },
    { 
      name: 'LegalAdvisor',
      description: 'Provides legal consultation and advice',
      about:'Navigate legal challenges with confidence with our expert legal advisors. Whether you need guidance on contracts, property law, business regulations, or personal matters, our experienced lawyers provide clear and reliable advice tailored to your situation. Book your appointment today and get the legal support you need to make informed decisions.',
      image:'/legaladvisor.jpeg',
      icon:'/legaladvisor.png'
    },
    { 
      name: 'BusinessConsultant',
      description: 'Offers business advice to help grow and optimize companies',
      about:'Take your business to the next level with professional consulting services. Our experienced business consultants work closely with you to optimize operations, develop growth strategies, and improve performance across all areas of your business. Whether you’re a startup or an established company, we provide valuable insights that lead to measurable success. Book your appointment today and start seeing results!',
      image:'/businessconsultant.jpeg',
      icon:'/businessconsultant.png'
    },
    { 
      name: 'Photographer',
      description: 'Captures moments and provides professional photo services',
      about:'Capture life’s most important moments with our professional photography services. Whether you need portraits, event coverage, product photography, or family pictures, our experienced photographers use the latest techniques and equipment to deliver stunning, high-quality images. Book your appointment today and preserve your memories with our expert photography!',
      image:'/photographer.jpeg',
      icon:'/photographer.png'
    },
    { 
      name: 'WebDeveloper',
      description: 'Designs and develops websites for various needs',
      about:'Elevate your online presence with the help of our expert web developers. Whether you need a personal blog, a business website, or an e-commerce platform, we specialize in designing and developing custom websites tailored to your needs. We focus on responsive design, user-friendly interfaces, and performance optimization. Book your appointment today and get a website that stands out!',
      image:'/webdeveloper.jpeg',
      icon:'/webdeveloper.png'
    }
  ]
}

export const getAllServiceCategories = () => {
  return Object.keys(serviceCategories);
};

export const getServicesByCategory = (category) => {
  return serviceCategories[category] || [];
};

export const getServiceByName = (name) => {
  for (const category in serviceCategories) {
      const foundService = serviceCategories[category].find(service => service.name === name);
      if (foundService) return foundService;
  }
  return null;
};

// export const getServicesByCategory = (category) => services.filter(service => service.category === category);
// export const getServiceByName = (name) => services.find(service => service.name === name);