import Head from 'next/head'
import { useState } from "react"
import { Transition } from "@headlessui/react"

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const [isSide, setSide] = useState(false)
  const [isModal, setModal] = useState(false)
  return (
    <div className=" min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="something_on_top">

        <nav className="bg-transparent p-1 fixed w-screen  ">
          <div className="mx-10">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" onClick={() => { setSide(!isSide) }}>
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed. */}
                  {/*
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          */}
                  <svg className={`${isSide ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* Icon when menu is open. */}
                  {/*
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          */}
                  <svg className={`${isSide ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /> */}
                  <svg className="block h-3 w-auto" viewBox="0 0 125 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M0,7.95873016 L7.68085187,7.95873016 L7.68085187,0 L0,0 L0,7.95873016 Z M41.0388533,7.98855564 L41.0388533,4.99657848 L43.2505153,4.99657848 L43.2505153,0.962010582 L48.2258731,0.962010582 L48.2258731,4.99657848 L50.8915079,4.99657848 L50.8915079,8.11015873 L48.2258731,8.11015873 L48.2258731,12.7306173 C48.2258731,13.9549559 48.50383,14.4914638 49.7588688,14.4914638 C50.1370031,14.4914638 50.5130209,14.4671252 50.8915079,14.4128042 L50.8915079,18.2441975 C49.8865597,18.2441975 48.7542734,18.3969312 47.6992365,18.3969312 C45.5877518,18.3969312 43.2505153,18.0653616 43.2505153,14.4420811 L43.2505153,8.11015873 L41.099441,8.11015873 C41.7031543,9.35326557 41.9889156,10.9126859 41.9889156,12.7555203 L32.4403204,12.7555203 C32.5676585,14.2602822 33.4223407,15.3332981 34.9765006,15.3332981 C35.7825051,15.3332981 36.6625843,15.0278307 37.0650574,14.3897354 L41.7127224,14.3897354 C40.7095378,17.2497002 37.9684173,18.5773898 35.0050723,18.5773898 C30.8325444,18.5773898 27.6907144,16.075097 27.6907144,11.6595767 C27.6907144,7.80455026 30.4529992,4.66380952 34.5775549,4.66380952 C37.8420013,4.66380952 39.9368524,5.83227076 41.0388533,7.98855564 Z M2.70514135,5.15555556 L2.70514135,2.80458554 L4.97394683,2.80458554 L4.97394683,5.15555556 L2.70514135,5.15555556 Z M10.7086066,18.2441975 L10.7086066,0.0198589065 L20.5341005,0.0198589065 C25.2590149,0.0198589065 26.2621994,2.72426808 26.2621994,4.58811287 C26.2621994,6.42479718 25.3849421,7.42232804 24.052301,8.16059965 C25.6597243,8.72356261 27.1669702,10.0247972 27.1669702,12.704515 C27.1669702,16.3542504 24.052301,18.2441975 20.8847212,18.2441975 L10.7086066,18.2441975 Z M16.2352926,4.35707231 L16.2352926,7.11544974 L19.1513708,7.11544974 C20.306585,7.11544974 21.0346345,6.78246914 21.0346345,5.6092769 C21.0346345,4.68828924 20.2818934,4.35707231 19.1513708,4.35707231 L16.2352926,4.35707231 Z M16.2352926,10.5087478 L16.2352926,13.9055732 L19.4790636,13.9055732 C20.6356888,13.9055732 21.6388733,13.5722399 21.6388733,12.1690653 C21.6388733,11.0949912 21.0106484,10.5087478 19.7037572,10.5087478 L16.2352926,10.5087478 Z M32.4643065,10.1265961 L37.2153234,10.1265961 C37.2153234,8.90049383 36.3105526,7.90613757 35.0297639,7.90613757 C33.5450932,7.90613757 32.6921747,8.69731922 32.4643065,10.1265961 Z M51.7155372,18.2442681 L51.7155372,0.0199294533 L56.690895,0.0199294533 L56.690895,6.42486772 L56.7399254,6.42486772 C57.5942549,5.40546737 58.7022023,4.66402116 60.8105124,4.66402116 C63.1481016,4.66402116 65.2867471,6.11798942 65.2867471,9.15502646 L65.2867471,18.2442681 L60.3096256,18.2442681 L60.3096256,11.3 C60.3096256,9.7691358 60.1336097,8.6957672 58.6778634,8.6957672 C57.8217703,8.6957672 56.690895,9.13068783 56.690895,11.2506173 L56.690895,18.2442681 L51.7155372,18.2442681 Z M80.2302456,12.7555203 L70.6812977,12.7555203 C70.8058139,14.2602822 71.661907,15.3332981 73.2174779,15.3332981 C74.0238351,15.3332981 74.9053253,14.7858554 75.3063875,14.1477601 L79.9522887,14.1477601 C78.9508679,17.0063139 76.2079837,18.5773898 73.2464024,18.5773898 C69.0721107,18.5773898 65.9302807,16.075097 65.9302807,11.6595767 C65.9302807,7.80455026 68.6943292,4.66380952 72.8171212,4.66380952 C77.9960084,4.66380952 80.2302456,7.60102293 80.2302456,12.7555203 Z M70.7056365,10.1265961 L75.4548898,10.1265961 C75.4548898,8.90049383 74.5532936,7.90613757 73.271094,7.90613757 C71.7878342,7.90613757 70.9317411,8.69731922 70.7056365,10.1265961 Z M92.7498049,8.84994709 L88.229478,8.84994709 C88.2019645,8.41643739 87.9776237,8.08522046 87.6481672,7.85559083 C87.350457,7.60126984 86.946573,7.47287478 86.5444526,7.47287478 C85.8403892,7.47287478 85.0372067,7.6259612 85.0372067,8.4919224 C85.0372067,8.87604938 85.3391497,9.05488536 85.6139319,9.18151675 C86.444628,9.54059965 88.3278917,9.64253968 89.9868146,10.203739 C91.6460903,10.7402469 93.1046585,11.7349559 93.1046585,13.905679 C93.1046585,17.5815168 89.6347829,18.577284 86.4672031,18.577284 C83.4040336,18.577284 80.0343354,17.5691711 79.9616715,14.1480071 L84.7123357,14.1480071 C84.7366746,14.6086772 84.9356184,14.7490653 85.3137526,15.0788713 C85.5652542,15.3070899 86.0421549,15.4629982 86.6463936,15.4629982 C87.2971937,15.4629982 88.3278917,15.2069136 88.3278917,14.4421869 C88.3278917,13.6742857 87.9000215,13.4446561 85.5881821,13.0358377 C81.7934356,12.3726984 80.2604399,11.1476543 80.2604399,8.87604938 C80.2604399,5.53178131 83.804743,4.66405644 86.4185254,4.66405644 C89.2326626,4.66405644 92.6266996,5.4562963 92.7498049,8.84994709 Z M107.421308,0.0201058201 L107.421308,18.2440917 L102.623377,18.2440917 L102.623377,16.7873016 L102.571524,16.7873016 C101.9433,17.6324515 101.190558,18.577425 98.7527918,18.577425 C95.0582227,18.577425 93.2747836,14.8758377 93.2747836,11.5559083 C93.2747836,8.44303351 94.4557476,4.66419753 98.8286303,4.66419753 C100.309774,4.66419753 101.644178,5.32663139 102.39692,6.45079365 L102.448419,6.45079365 L102.448419,0.0201058201 L107.421308,0.0201058201 Z M121.590725,9.84617284 L121.590725,15.2825044 C121.590725,16.2786243 121.637639,17.4024339 122.191789,18.2444092 L117.115901,18.2444092 C116.98821,17.8881481 116.914135,17.3512875 116.939885,16.9939683 L116.889796,16.9939683 C115.833349,18.2179541 114.303175,18.5773898 112.69293,18.5773898 C110.177913,18.5773898 108.095353,17.3512875 108.095353,14.5703351 C108.095353,10.3812698 112.917623,10.5350617 115.456978,10.0511111 C116.133528,9.92306878 116.813958,9.71954145 116.813958,8.8761552 C116.813958,7.98197531 115.986436,7.65040564 115.179374,7.65040564 C113.6492,7.65040564 113.345493,8.44299824 113.318333,9.00243386 L108.697828,9.00243386 C108.848094,5.27580247 112.315148,4.66416226 115.405126,4.66416226 C121.637639,4.66416226 121.590725,7.29449735 121.590725,9.84617284 Z M102.623377,11.6084656 C102.623377,10.0511464 102.220904,8.33968254 100.439228,8.33968254 C98.6543782,8.33968254 98.2504941,10.0511464 98.2504941,11.6084656 C98.2504941,13.1883598 98.6543782,14.9001764 100.439228,14.9001764 C102.220904,14.9001764 102.623377,13.1883598 102.623377,11.6084656 Z M116.813958,13.5216578 L116.813958,12.2959083 C116.211483,12.6027866 115.534227,12.7798589 114.852739,12.9357672 C113.747966,13.1886772 113.169477,13.4705115 113.169477,14.366455 C113.169477,14.9773898 113.825216,15.587619 114.726812,15.587619 C115.860862,15.587619 116.738119,14.9001411 116.813958,13.5216578 Z M123.240018,3.14811287 C123.484817,3.14811287 123.724679,3.21231041 123.958191,3.34 C124.191703,3.46804233 124.373715,3.65075838 124.504228,3.88850088 C124.634741,4.12694885 124.699997,4.37492063 124.699997,4.63312169 C124.699997,4.88885362 124.635799,5.13506173 124.50705,5.37068783 C124.378653,5.60666667 124.198405,5.78973545 123.967009,5.92059965 C123.735261,6.05111111 123.49293,6.11636684 123.240018,6.11636684 C122.986753,6.11636684 122.744422,6.05111111 122.512674,5.92059965 C122.281278,5.78973545 122.100677,5.60666667 121.971575,5.37068783 C121.842473,5.13506173 121.778275,4.88885362 121.778275,4.63312169 C121.778275,4.37492063 121.843531,4.12694885 121.97475,3.88850088 C122.105615,3.65075838 122.28798,3.46804233 122.521845,3.34 C122.755004,3.21231041 122.994865,3.14811287 123.240018,3.14811287 Z M123.240018,3.39432099 C123.034725,3.39432099 122.835076,3.44758377 122.640365,3.55446208 C122.446359,3.66134039 122.294329,3.81407407 122.184628,4.01266314 C122.074927,4.2112522 122.0199,4.41795414 122.0199,4.63312169 C122.0199,4.84687831 122.073869,5.05216931 122.181454,5.24793651 C122.289391,5.4437037 122.44001,5.59679012 122.634015,5.70613757 C122.827315,5.81548501 123.029434,5.87051146 123.240018,5.87051146 C123.450249,5.87051146 123.652368,5.81548501 123.845668,5.70613757 C124.039673,5.59679012 124.189939,5.4437037 124.297171,5.24793651 C124.40405,5.05216931 124.457667,4.84687831 124.457667,4.63312169 C124.457667,4.41795414 124.403345,4.2112522 124.293996,4.01266314 C124.185001,3.81407407 124.032971,3.66134039 123.83826,3.55446208 C123.643549,3.44758377 123.4439,3.39432099 123.240018,3.39432099 Z M122.599094,5.45322751 L122.599094,3.85640212 L123.139135,3.85640212 C123.323969,3.85640212 123.457304,3.87121693 123.540197,3.90049383 C123.622738,3.93012346 123.688347,3.98162257 123.737377,4.05499118 C123.786408,4.12835979 123.811099,4.20631393 123.811099,4.28885362 C123.811099,4.4059612 123.770182,4.5075485 123.688347,4.59396825 C123.606159,4.68038801 123.497516,4.72871252 123.361712,4.73929453 C123.417445,4.76292769 123.461889,4.79114638 123.4954,4.82395062 C123.558539,4.88673721 123.636142,4.99220459 123.727853,5.14070547 L123.91939,5.45322751 L123.609686,5.45322751 L123.470355,5.20137566 C123.360654,5.00349206 123.272117,4.87968254 123.205097,4.82994709 C123.158536,4.79326279 123.09081,4.77492063 123.001567,4.77492063 L122.852712,4.77492063 L122.852712,5.45322751 L122.599094,5.45322751 Z M122.852712,4.55446208 L123.160652,4.55446208 C123.307743,4.55446208 123.408273,4.53223986 123.461889,4.48779541 C123.5148,4.44335097 123.541961,4.38409171 123.541961,4.3107231 C123.541961,4.26345679 123.52891,4.22112875 123.50316,4.18373898 C123.47741,4.14634921 123.441431,4.11883598 123.395928,4.10014109 C123.350072,4.08179894 123.265062,4.07262787 123.141251,4.07262787 L122.852712,4.07262787 L122.852712,4.55446208 Z" id="path-1" /></defs><g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g id="Navigation/Top/Light/Desktop" transform="translate(-90.000000, -31.000000)"><g id="Element/Logo/Bethesda" transform="translate(90.000000, 31.000000)"><mask id="mask-2" fill="white"><use xlinkHref="#path-1" /></mask><use id="Combined-Shape" fillRule="evenodd" xlinkHref="#path-1" style={{ "fill": "rgb(255, 255, 255)" }} /></g></g></g></svg>
                  {/* <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" /> */}

                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a href="#" className="py-1 px-6 border-white border-l-2 "><img className="max-h-6" src="/img/doom-series-logo.png"></img></a>
                    <a href="#" className=" px-3 py-2 inline-flex space-x-4 ">
                      <div className="flex-1 text-white text-xs">MENU</div>
                      <div className="flex-1 text-white w-5 h-5">
                        <svg className="fill-current " focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                      </div>
                    </a>

                    <a href="#" className="text-white border-white border-2 rounded px-7 py-2 text-xs hover:text-gray-400 hover:border-gray-400">SLAYER CLUB</a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="ml-3 relative">
                  <button className="text-white border-white border-2 rounded px-7 py-2 text-xs hover:text-gray-400 hover:border-gray-400" onClick={() => { setModal(true) }}>LOGIN / SIGN UP</button>
                </div>
                {/* Profile dropdown */}
                <div className="ml-3 relative" >
                  <div>
                    <button onClick={() => { setOpen(!isOpen) }} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                  </div>

                  <Transition show={isOpen} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    {(ref) => (

                      <div ref={ref} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                      </div>
                    )}
                  </Transition>
                </div>
              </div>
            </div>
          </div>
          {/*
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
          <div className={`${isSide ? 'hidden' : 'block'} sm:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </div>
          </div>
        </nav>
        <div id="section_tops">
          <main className="flex flex-col items-center justify-center flex-1 px-20 text-center container shadow-lg mx-auto  h-screen">
            <h1 className="text-6xl font-bold">
              Welcome to{' '}
              <a className="text-blue-600" href="https://nextjs.org">
                Next.js!
          </a>
            </h1>

            <p className="mt-3 text-2xl">
              Get started by editing{' '}
              <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
                pages/index.js
          </code>
            </p>

            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <a
                href="https://nextjs.org/docs"
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
                <p className="mt-4 text-xl">
                  Find in-depth information about Next.js features and API.
            </p>
              </a>

              <a
                href="https://nextjs.org/learn"
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <h3 className="text-2xl font-bold">Learn &rarr;</h3>
                <p className="mt-4 text-xl">
                  Learn about Next.js in an interactive course with quizzes!
            </p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <h3 className="text-2xl font-bold">Examples &rarr;</h3>
                <p className="mt-4 text-xl">
                  Discover and deploy boilerplate example Next.js projects.
            </p>
              </a>

              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
                <p className="mt-4 text-xl">
                  Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
              </a>
            </div>


            {/* modal */}
            <div className={`fixed bg-gray-400 w-screen h-screen bg-opacity-50 ${isModal ? 'flex' : 'hidden'} `}>
              <div className="fixed bg-transparent w-screen h-screen left-0 top-0" onClick={() => { setModal(false) }}>
              </div>
              <div className="w-3/6 lg:w-1/4 m-auto py-3 h-3/5 rounded relative bg-white">
                <div className="inline-flex space-x-36 m-0">
                  <div className="font-bold text-lg ">
                    LOG IN TO BETHESDA.NET
                  </div>
                  <div className="cursor-pointer" onClick={() => { setModal(false) }}>
                    <svg className=" block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-100 h-4/5 mt-3 py-5">
                  <div className="py-1">
                    <input type="text" placeholder="Username" className="p-2 w-9/12 border-gray-400 border-2 focus-within:border-green-300 focus-within:text-green-300"></input>
                  </div>
                  <div className="py-1 text-left pl-16 text-green-400">
                    Help find my account
                  </div>
                  <div className="py-1">
                    <input type="password" placeholder="Password" className="p-2 w-9/12 border-gray-400 border-2"></input>
                  </div>
                  <div className="py-1 text-left pl-16 text-green-400">
                    I forgot my password
                  </div>
                  <div className="py-1 inline-flex w-9/12 space-x-4">
                    <div className="">

                      <input type="checkbox" className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-green-300 checked:border-transparent focus:outline-none"></input>
                    </div>
                    <div className="">
                      Remember my username
                    </div>
                    <div className="">
                      <button className="bg-green-200 text-white py-2 px-9">LOG IN</button>
                    </div>
                  </div>
                  <div className="py-6 pl-16">
                    <hr className="w-10/12 "></hr>
                  </div>
                  <div className="py-10 w-9/12 space-x-32 inline-flex ">
                    <div className="text-sm">Or Log in With</div>
                    <div>
                      <button className="bg-blue-700 text-white py-2 px-9">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" id="Bold" enable-background="new 0 0 24 24" className="w-4 h-4 mr-2 fill-current" viewBox="0 0 20 20" >
                          <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
                        </svg> */}
                        Facebook</button>
                    </div>
                  </div>
                </div>
                {/* footer */}
                <div className="pt-4 inline-flex space-x-16">
                  <div className="text-sm text-gray-400 font-bold pt-3">Don't have an account ?</div>
                  <div>
                    <button className=" border-2 rounded px-7 py-2 text-sm text-gray-400 border-gray-400">SIGN UP</button>
                  </div>
                </div>
              </div>
            </div>
            {/* modal end */}
          </main>
        </div>
        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </footer>
      </div>
    </div>
  )
}
