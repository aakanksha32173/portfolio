import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-10 
                 bg-blue-100 text-gray-900"
    >
      {/* Left Side: Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-blue-900">
          Aakanksha Trivedi
        </h1>
        <p className="text-lg md:text-xl text-blue-800 mb-6 max-w-lg">
          Passionate CS Grad Student | Innovating in Networking & Scalable Systems.
        </p>
        <p className="text-md text-blue-700 mb-8 max-w-md">
          Exploring Kernel Programming, XDP & eBPF to build high-performance network solutions.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-amber-600 transition"
        >
          View Resume
        </a>
      </div>

      {/* Right Side: Flip Card */}
      <div className="flex-1 flex justify-center">
        <div className="group perspective w-72 md:w-96 h-72 md:h-96">
          <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/profile1.jpg"
                alt="Profile Front"
                fill
                style={{ objectFit: 'cover', borderRadius: '1rem' }}
              />
            </div>
            {/* Back Side */}
            <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg rotate-y-180">
              <Image
                src="/profile2.jpg"
                alt="Profile Back"
                fill
                style={{ objectFit: 'cover', borderRadius: '1rem' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
