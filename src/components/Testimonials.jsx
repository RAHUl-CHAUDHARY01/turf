import React from 'react';

const testimonials = [
  {
    name: 'Samantha Vohnhale',
    feedback: 'Our family vacation was perfectly organized and unforgettable!',
    image: '/images/samantha.jpg',
  },
  {
    name: 'Wilson Tomales',
    feedback: 'Exceptional service and attention to detail. Highly recommend!',
    image: '/images/wilson.jpg',
  },
  {
    name: 'Tammy Georgeon',
    feedback: 'A seamless experience from start to finish. Loved every moment!',
    image: '/images/tammy.jpg',
  },
];

const Testimonials = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
            <h4 className="text-lg font-semibold text-center">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
