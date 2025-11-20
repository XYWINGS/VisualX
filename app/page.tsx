"use client";

import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MarsIcon, Film, Sparkles, Users, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { JSX } from "react/jsx-runtime";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

const specializations = [
  "Visual Effects",
  "Music Videos",
  "Feature Films",
  "Demo Videos",
  "Advertising Commercials (Digital & TVC)",
  "Presentation Videos",
  "Documentary Videos",
  "CG Animation - 2D & 3D",
  "Modeling, Texturing, Rendering",
  "Lighting & Rigging",
  "Roto Scoping",
  "Opening and End Titles",
];

const clients = [
  { name: "Studio 101", location: "No. 155/2, Kynsey Road, Colombo 08" },
  { name: "Commercial Bank of Ceylon PLC", location: "No. 21, Sir Razik Fareed Mawatha, Colombo 01" },
  { name: "Long Island Films", location: "Colombo 05" },
  { name: "24 frames", location: "No. 7A, Esther Place, Park road, Colombo 05" },
  { name: "Neochem International (Pvt) Ltd", location: "No.478, Pannipitiya Road, Pelawatta, Battaramulla" },
  { name: "Autumn Lane Studio", location: "Battaramulla South, Colombo" },
];

const timeline = [
  {
    name: "Independent VFX Artist",
    description:
      "Started journey as an independent VFX artist with a passion for visual storytelling and cutting-edge effects.",
    date: "2014",
    dateTime: "2014",
  },
  {
    name: "Diploma in Multimedia",
    description:
      "Completed comprehensive training in multimedia production, strengthening technical expertise and creative vision.",
    date: "2016",
    dateTime: "2016",
  },
  {
    name: "500+ Commercials",
    description: "Achieved milestone of over 500 completed commercial projects for local and international brands.",
    date: "2020",
    dateTime: "2020",
  },
  {
    name: "Visual X (Pvt) Ltd",
    description:
      "Established Visual X (Pvt) Ltd, creating a full-service VFX and animation studio to serve Sri Lanka and beyond.",
    date: "2023",
    dateTime: "2023",
  },
];

const footerNavigation = {
  social: [
    {
      name: "Facebook",
      href: "https://web.facebook.com/visualxlk/",
      icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/visualx.lk/",
      icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function VisualXWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                VISUAL X
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <MarsIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900 hover:text-purple-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#contact" className="text-sm/6 font-semibold text-purple-600 hover:text-purple-700">
              Get in Touch <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                <Sparkles className="h-8 w-8 text-purple-600" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  VISUAL X
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <MarsIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-purple-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-purple-600/10 ring-purple-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
                Leading Visual Effects Company in Sri Lanka
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                  Visual X (Pvt) Ltd is a one-stop-hub for Visual Effects and Film Production. A creative place where
                  exchange of ideas forms the genesis of our work, we stand for Quality and Commitment.
                </p>
                <p className="mt-4 text-base text-gray-500">Reg No. PV 00288753</p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#contact"
                    className="rounded-md bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                  >
                    Get Started
                  </a>
                  <a href="#services" className="text-sm font-semibold text-gray-900">
                    Our Services <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <img
                alt="VFX Studio"
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"
                className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/10 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Philosophy Section */}
        <div id="about" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Philosophy</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We treat each project with equal passion and constantly endeavor to push the boundaries to achieve high
              standards of quality.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality & Commitment</h3>
              <p className="text-base/7 text-gray-600">
                A creative place where exchange of ideas forms the genesis of our work. We stand for 'Quality' and
                'Commitment', which is the key to creating and delivering world class standards.
              </p>
            </div>
            <div className="flex flex-col bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation & Excellence</h3>
              <p className="text-base/7 text-gray-600">
                We are always eager to explore ways of creating content through newer technologies. We like to keep it
                simple & visually elegant. Quality and Delivery timeliness are the aspects that really matter to us.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Journey</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              From independent artist to leading VFX company - a decade of passion, innovation, and excellence.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-purple-600">
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </time>
                <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base/7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div id="services" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Specializations</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              From visual effects to animation, we have the expertise to create excellent outcomes for each project.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {specializations.map((spec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow"
              >
                <Film className="h-6 w-6 text-purple-600 mb-3" />
                <p className="text-base font-semibold text-gray-900">{spec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 bg-white">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Excellence in Numbers
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              Over a decade of dedication to visual excellence, serving clients across Sri Lanka and internationally.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">10 Years</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">Industry Experience</p>
                <p className="mt-2 text-base/7 text-gray-600">A decade of visual storytelling excellence</p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">600+</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">Commercials Completed</p>
                <p className="mt-2 text-base/7 text-gray-400">
                  Bringing brands to life through stunning visual effects
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-purple-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">5+ Films</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">International & Local Films</p>
                <p className="mt-2 text-base/7 text-purple-200">
                  Contributing to cinematic masterpieces with world-class VFX
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Showreel Video Section - MOVED TO APPEAR LATER */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center mb-12">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Showreel</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Experience the artistry and technical excellence that defines Visual X through our portfolio of work.
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/6Ttov4xyDs8"
                  title="Visual X Showreel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Section */}
        <div className="overflow-hidden py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">CEO/Director</h2>
                <h3 className="mt-6 text-3xl font-bold tracking-tight text-purple-600">Rivinu Amanda</h3>
                <p className="mt-6 text-xl/8 text-gray-700">
                  Mr. Rivinu Amanda established Visual X (Pvt) Ltd in 2023, after working as an independent VFX artist
                  for 10 years since 2014.
                </p>
                <p className="mt-6 text-base/7 text-gray-600">
                  With a Diploma in Multimedia, he is an enthusiastic person eager to learn and grow. He has extensive
                  knowledge of Visual Effects and CG Animations, having completed more than 600 commercials and 5
                  international and local films.
                </p>
                <p className="mt-6 text-base/7 text-gray-600 italic">
                  A very talented and influential young person who has achieved his goals and continues his journey with
                  the same energetic manner.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt="VFX Production"
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1152&q=80"
                    className="aspect-7/5 w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      alt="Studio Work"
                      src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=604&q=80"
                      className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      alt="Creative Process"
                      src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=1152&h=842&q=80"
                      className="aspect-7/5 w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div id="clients" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Clients</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Trusted by leading brands and production houses across Sri Lanka for exceptional visual effects and
              production services.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {clients.map((client, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{client.name}</h3>
                <p className="text-sm text-gray-600">{client.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Get in Touch</h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                Ready to bring your vision to life? Contact us today to discuss your project and discover how we can
                help create stunning visual experiences.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-900/5">
                <Phone className="h-6 w-6 text-purple-600 mb-3" />
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-sm text-gray-600">+94 71 392 5442</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-900/5">
                <Mail className="h-6 w-6 text-purple-600 mb-3" />
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:visualx.lk@gmail.com" className="text-sm text-gray-600 hover:text-purple-600">
                  visualx.lk@gmail.com
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-900/5">
                <MapPin className="h-6 w-6 text-purple-600 mb-3" />
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-sm text-gray-600">No. 500/36, Ruwanpura, Aggona, Angoda</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-900/5">
                <Users className="h-6 w-6 text-purple-600 mb-3" />
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Follow Us</h3>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://web.facebook.com/visualxlk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/visualx.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 border-t border-gray-900/10">
          <div className="mt-8 md:flex md:items-center md:justify-between">
            <div className="flex gap-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
              &copy; 2024 Visual X (Pvt) Ltd. All rights reserved. | Reg No. PV 00288753
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
