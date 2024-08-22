import Image from 'next/image';
import Link from 'next/link';

import AmericanLogo from '../../assets/png/American.png';
import CountryFlag1 from '../../assets/png/country1.png';
import CountryFlag2 from '../../assets/png/country2.png';
import Hamper from '../../assets/png/hamper.png';
import Pilot from '../../assets/png/trustPilot.png';
import Shopify from '../../assets/png/shopify.png';
import Cards from '../../assets/png/bankCards.png';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="flex justify-center">
        <div className="flex flex-col justify-between items-start mb-8 w-11/12 md:w-9/12">
          {/* 1st line */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full">
            <div className="flex items-start flex-1 justify-start">
              <Image
                src={AmericanLogo}
                alt="Australian Owned Certified"
                objectFit="cover"
              />
              <div className="ml-4 max-w-xs">
                <h3 className="text-lg md:text-xl font-bold">
                  Australian Owned Certified
                </h3>
                <p className="text-sm">
                  We are proud to be certified as an Australian-owned company.
                  Our commitment to offering quality products and services is
                  unparalleled, with our team of dedicated professionals putting
                  the needs of our customers first. We strive to provide
                  exemplary customer service and satisfaction always. Our
                  mission is to foster lasting business relationships with our
                  customers based on mutual respect and trust.
                </p>
              </div>
            </div>
            <div className="flex items-start flex-1 justify-start mt-8 md:mt-0">
              <div className="flex flex-col">
                <Image
                  src={CountryFlag1}
                  alt="CountryFlag1"
                  objectFit="cover"
                  className="mb-2"
                />
                <Image
                  src={CountryFlag2}
                  alt="CountryFlag2"
                  objectFit="cover"
                />
              </div>
              <div className="ml-4 max-w-xs">
                <h3 className="text-lg md:text-xl font-bold">
                  Acknowledgement to the Country
                </h3>
                <p className="text-sm">
                  In the spirit of reconciliation, The Hamper Boutique Co
                  acknowledges the Traditional Custodians of the country
                  throughout Australia and their connections to land, sea, and
                  community. We pay our respects to their Elders past, present
                  and emerging and extend that respect to all Aboriginal and
                  Torres Strait Islander peoples today.
                </p>
              </div>
            </div>
          </div>
          {/* 2nd line */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-y-8 gap-x-6 w-full mt-8">
            <div className="flex w-full md:w-[30%] flex-col gap-6">
              <Image src={Hamper} alt="CountryFlag1" objectFit="cover" />
              <span>
                The Hamper Boutique Co was born out of a love for gifting and
                the joy of spending time with your family and friends. We wanted
                to create a unique gift experience that would offer something
                special for everyone, whatever their budget.
              </span>
              <div className="flex items-center gap-6">
                <Image src={Pilot} alt="CountryFlag1" objectFit="cover" />
                <Image src={Shopify} alt="CountryFlag1" objectFit="cover" />
              </div>
            </div>
            <div className="flex w-full md:w-[70%] flex-col md:flex-row md:space-x-8">
              <div className="mb-8 md:mb-0">
                <h4 className="text-lg font-semibold">Quick Links</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <Link href="blog" className="hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Gift Hampers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-8 md:mb-0">
                <h4 className="text-lg font-semibold">Customer Service</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Payment Option
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-8 md:mb-0">
                <h4 className="text-lg font-semibold">Policies and Legal</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Our Policies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Responsible Liquor Sales
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Address Info</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>+61 3 7046 4648</li>
                  <li>
                    <a
                      href="mailto:info@thehamperboutique.com"
                      className="hover:underline"
                    >
                      Email The Hamper Boutique
                    </a>
                  </li>
                  <li>
                    Suite 15, Ground Floor, 440 Collins St, Melbourne VIC 3000
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* last line */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full mt-8">
            <div className="text-left md:flex-1">
              <p className="text-xs">
                <span className="text-red-500">⚠️ Warning:</span> Under the
                Liquor Control Reform Act 1998 it is an offence:
              </p>
              <ul className="list-disc list-inside text-xs mt-1">
                <li>
                  To supply alcohol to a person under the age of 18 years
                  (Penalty exceeds $17,000).
                </li>
                <li>
                  For a person under the age of 18 years to purchase or receive
                  liquor (Penalty exceeds $700).
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:items-end items-center md:flex-1 mt-4 md:mt-0">
              <p className="text-sm mb-2">ABN: 76 639 489 702</p>
              <p className="text-sm mb-2">Liquor Licence Number: 36171663</p>
              <p className="text-sm mb-2">Happiness Lives Here ™</p>
              <p className="text-sm mb-2">
                Copyright © 2024 The Hamper Boutique Co
              </p>
              <div>
                <Image src={Cards} alt="CountryFlag1" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
