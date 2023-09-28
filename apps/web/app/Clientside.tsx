'use client';

import { useEffect, useState } from 'react';
import { trpc } from './trpc';

export default function Clientside() {
  const [greeting, setGreeting] = useState<any>('');
  const [greeting2, setGreeting2] = useState<any>('');
  // const getData = async () => {
  //   const res = await fetch('./api/hello');
  //   console.log(' res   ' , res)
  //   const data = await res.json();
  //   setGreeting(data);
  // }
  console.log(' greeting   ', greeting);
  console.log(' greeting2   ', greeting2);
  useEffect(() => {
    trpc.hello.query({ name: 'werewf sdlkfjsdlfkjx ' }).then((response) => {
      console.log('response', response);
      setGreeting2(response);
    });

    trpc.greeting.query().then((response) => {
      console.log('response', response);
      setGreeting(response);
    });

    // getData()
  }, []);

  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-green-600">
              client 1 ()- {greeting}
            </span>

            <span className="block text-red-600">
              client 2 ()- {greeting2?.greeting}
            </span>
          </h2>
        </div>
      </div>
    </>
  );
}
