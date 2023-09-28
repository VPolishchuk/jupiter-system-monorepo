import Clientside from './Clientside';
import { trpc } from './trpc';

export default async function Index(props: any) {
  console.log('Index props', props);
  console.log('Index trpc', trpc);
  const response = await trpc.hello.query({ name: 'test     dlkfjdsal    aldkfjsld' });
  const response2 = await trpc.greeting.query();
  const { greeting } = response;
  console.log('greeting  ssr       ______', greeting);
  console.log('response2  ssr       ______', response2);
  // console.log('response         ______', response)

  // const res  = await fetch('/api/hello');
  // const data = await res.json()
  // console.log('Index', res)
  // console.log('Index  data', data)
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">
            Start your free trial today. server (SSR)- {greeting}
          </span>

          <span className="block text-indigo-600">
            Start your free trial today. server (SSR)- {response2}
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <Clientside />
    </div>
  );
}
