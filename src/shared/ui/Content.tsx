type ContentProps = {
  page: 'home' | 'about' | 'contact';
};

const contentMap = {
  home: {
    title: 'Welcome to the Home Page!',
    description: 'This is the main landing page of the site.',
  },
  about: {
    title: 'About Us',
    description: 'Learn more about our company and mission.',
  },
  contact: {
    title: 'Contact Us',
    description: 'Reach out to us via email or phone.',
  },
};

export default function Content({ page }: ContentProps) {
  const content = contentMap[page];

  return (
    <div>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <h1 className='text-4xl font-bold mb-4'>{content.title}</h1>
        <p className='text-lg text-gray-700'>{content.description}</p>
      </div>
    </div>
  );
}
