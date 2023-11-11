import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'CityTech Solutions Singapore | Python/Django Developer',
    date: 'Jan 2020 - Aug 2023',
    description: [
      'Developed and maintained a complex web application using Python, Django,and related technologies, resulting in a 25% increase in user engagement and a 20% increase in revenue within the first year.',
      'Developed swift IOS app from scratch and modified existing ones, by adding new screens, transitions and styling.',
      'Developed software by following the Agile Methodology',
    ],
    
  },
  {
    title: 'Orchard Tech Solutions Singapore | Web Developer',
    date: 'Feb 2016 - Nov 2019',
    description: [
      'Optimized a web application for performance and scalability, resulting in a 30% reduction in page load times and a 25% increase in user engagement.',
      'Created and maintained automated unit and integration tests, reducing bugrelated delays by 40% and improving overall code quality by 15%.',
      'Developed RESTful web services and APIs, resulting in a 25% increase in application functionality and a 20% reduction in development time.',
      'Debugged and troubleshot existing code, identifying and addressing performance bottlenecks and minimizing production issues by 30%.'
    ],
    
  },
 
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date}: { children: React.ReactNode; title: string; date?: string; }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto')}>
         
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden')}>
            
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
