import React from 'react';

// Team member data 
const teamMembers = [
  {
    name: 'Arthur Melo',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
  },
  {
    name: 'Amelia Anderson',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
  },
  {
    name: 'Olivia Wathan',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'John Doe',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
  },
  {
    name: 'Mia',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Junior Reis',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Joseph Gonzalez',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Emma Doe',
    role: 'Content Writer',
    image: 'https://images.unsplash.com/photo-1521488741203-dcc320950ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  },
];

// Reusable Team Member Card Component
const TeamMemberCard = ({ name, role, image }) => (
  <div
    className="flex flex-col items-center p-6 bg-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
  >
    <img
      className="object-cover w-32 h-32 rounded-full border-4 border-gray-200 transition-all duration-300 group-hover:border-[#317371]"
      src={image}
      alt={`${name}'s profile`}
    />
    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize group-hover:text-[#317371] transition-colors duration-300">
      {name}
    </h2>
    <p className="mt-2 text-gray-600 capitalize group-hover:text-gray-500 transition-colors duration-300">
      {role}
    </p>
    <div className="flex mt-4 space-x-4">
      {['Reddit', 'Facebook', 'Github'].map((platform) => (
        <a
          key={platform}
          href="#"
          className="text-gray-600 hover:text-[#317371] transition-colors duration-300 group-hover:text-[#317371]"
          aria-label={`${platform} profile of ${name}`}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* Simplified SVG paths for each platform */}
            {platform === 'Reddit' && (
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-5.193-11.457c.598 0 1.136.366 1.357.923s.08 1.192-.356 1.602c-.115.109-.248.198-.392.264.013.146.013.293 0 .44 0 2.24 2.615 4.062 5.829 4.062s5.829-1.822 5.829-4.062c.012-.147.012-.294 0-.44.607.294.928.971.773 1.628s-1.146 1.118-1.82 1.109h-.053c-.359.013-.7.158-.958.407-1.138.773-2.475 1.201-3.85 1.23l.65-3.12 2.138.45c.055.507.483.891.993.892.036 0 .072-.002.108-.006.53-.053.925-.513.899-1.045s-.469-.949-1.001-.949c-.038.001-.075.004-.113.009-.317.034-.599.217-.759.493l-2.448-.492c-.022-.005-.044-.007-.066-.007-.145.002-.269.103-.3.244l-.748 3.473c-1.392-.029-2.749-.457-3.9-1.23-.27-.255-.611-.4-.97-.407h-.053c-.674-.009-1.265-.47-1.42-1.127s.166-1.333.773-1.628c.179-.195.429-.31.694-.32h.035zM12.18 16.524c-.056 0-.113 0-.169 0s-.113 0-.169 0c-.83-.003-1.637-.274-2.3-.773-.046-.055-.068-.126-.061-.197s.042-.137.098-.182c.048-.04.108-.061.17-.061s.123.021.171.061c.561.411 1.238.631 1.933.629.049 0 .098 0 .147 0s.098 0 .147 0c.686.001 1.355-.215 1.912-.615.052-.038.113-.058.175-.058s.122.021.17.061c.056.045.091.111.098.182s-.015.142-.061.197c-.663.499-1.47.77-2.3.773v.001zm2.127-2.444h-.016l.008-.039c-.44-.03-.8-.362-.865-.798s.182-.859.594-1.016c.412-.158.878-.007 1.12.361s.195.855-.113 1.171c-.179.195-.429.31-.694.32h-.035zM9.67 14c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
            )}
            {platform === 'Facebook' && (
              <path d="M2.002 12.002C2.003 16.921 5.58 21.11 10.439 21.881v-6.989h-2.537v-2.89h2.537V9.802c0-2.2.684-3.239 1.414-3.993s2.156-.5 3.201-.421c.75.013 1.499.08 2.24.201v2.459h-1.264c-.436-.057-.873.087-1.19.391s-.478.735-.439 1.172v2.178h2.771l-.443 2.891h-2.328v6.989C18.817 21.051 22.502 16.252 21.947 10.961s-4.155-9.222-9.467-8.945c-5.312.277-9.478 4.665-9.478 10.986z" />
            )}
            {platform === 'Github' && (
              <path d="M12.026 2C7.133 1.999 2.962 5.548 2.178 10.378s2.23 9.515 6.873 11.061c.5.09.679-.217.679-.481s-.008-.628-.011-1.463c-2.775.6-3.361-1.338-3.361-1.338-.183-.603-.576-1.121-1.107-1.459-.9-.619.069-.605.069-.605.64.088 1.204.467 1.527 1.028.272.496.732.863 1.277 1.019s1.129.088 1.623-.189c.046-.506.271-.979.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.089.367-2.045 1.038-2.771-.304-.861-.268-1.805.1-2.64 0 0 .837-.269 2.742 1.021 1.634-.448 3.358-.448 4.992 0 1.906-1.29 2.742-1.021 2.742-1.021.369.835.405 1.779.101 2.64.671.726 1.038 1.682 1.038 2.771 0 3.833-2.33 4.677-4.552 4.924.479.49.725 1.162.725 1.846 0 1.334-.012 2.41-.012 2.737 0 .264.178.571.687.473 4.64-1.547 7.473-6.232 6.689-11.062S16.919 1.999 12.026 2z" />
            )}
          </svg>
        </a>
      ))}
    </div>
  </div>
);

export default function ExecutiveTeam() {
  return (
    <section className="pt-20">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 capitalize">
          Our Executive Team
        </h1>
        <p className="text-center text-gray-500 font-medium md:text-[18px] mt-4">
        Our executive team, with diverse expertise and innovation passion, drives excellence.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}